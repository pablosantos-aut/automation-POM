var webdriver = require("selenium-webdriver");
const { until, Builder } = require("selenium-webdriver");

class BasePage {
   
   constructor() {
      global.driver = new webdriver.Builder().forBrowser("chrome").build();;
   }

   async waitForUrlContains(urlPart, timeout) {
      await driver.wait(until.urlContains(urlPart), timeout, `URL does not contain "${urlPart}"`
      );
   }

   async siteLoads(url) {
      try {
         await driver.get(url);
         const readyState = await driver.executeScript('return document.readyState');
         if (readyState === 'complete') {
            return true;
         } else {
            return false;
         }
      } catch (error) {
         console.error('Error loading website:', error);
         return false;
      }
   }
}

module.exports = BasePage;