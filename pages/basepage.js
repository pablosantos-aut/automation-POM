var webdriver = require("selenium-webdriver");
const { until } = require("selenium-webdriver");

var driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({ implicit: (10000) });

class BasePage {
   constructor() {
      global.driver = driver;
   }

   async waitForUrlContains(urlPart, timeout) {
      await driver.wait(
         until.urlContains(urlPart),
         timeout,
         `URL does not contain "${urlPart}"`
      );
   }

   async siteLoads(url) {
      try {
         await driver.get(url);
         const readyState = await driver.executeScript('return document.readyState');
         console.log("readyState is: ", readyState);
         if (readyState === 'complete') {
            console.log('Website loaded successfully');
            return true;
         } else {
            console.log('Website failed to load completely');
            return false;
         }
      } catch (error) {
         console.error('Error loading website:', error);
         return false;
      }
   }
}

module.exports = BasePage;