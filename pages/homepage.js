const { Builder, By, Key, until } = require("selenium-webdriver");
var BasePage = require("../pages/basepage");
var webdriver = require("selenium-webdriver");
const locator = require("../utils/locators.json");

class Homepage extends BasePage {
   
}

module.exports = new Homepage();