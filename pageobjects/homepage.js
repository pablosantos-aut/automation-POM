const {Builder,By, Key, until} = require("selenium-webdriver");
var BasePage = require("../pageobjects/basepage");
var webdriver = require("selenium-webdriver");

class Homepage extends BasePage {
   enter_search(searchText){
      driver.findElement(By.css("input[name=q]")).sendKeys(searchText);
      driver.findElement(By.css("input[name=q]")).sendKeys(Key.RETURN);      
   }
}

module.exports = new Homepage(); //Why is this export so different from the one on basepase.js???