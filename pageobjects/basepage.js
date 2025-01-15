var webdriver = require ("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({implicit:(10000)}); //so it waits for the element the allocated time

class BasePage {
   constructor() {
      global.driver = driver; //to be able to use the driver across page classes 
   }

   goto_URL(theURL){
      driver.get(theURL);
   }
}

module.exports = BasePage; //this actually export the class to other locations in the project