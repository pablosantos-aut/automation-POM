const { Builder, By, Key, until } = require("selenium-webdriver");
var BasePage = require("../pages/basepage");
var webdriver = require("selenium-webdriver");
const locator = require("../utils/locators.json");

class Homepage extends BasePage {
   hero_is_present() {
      try {
         driver.findElement(By.className(locator.homepage_hero));
      } catch (NoSuchElementException) {
         return false;
      }
      return true;
   }

}

module.exports = new Homepage();