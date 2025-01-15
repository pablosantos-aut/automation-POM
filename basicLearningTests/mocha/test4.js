/*TRYNG OUT MOCHA FRAMEWORK
FOR MORE JAVASCRIPT TESTING KNOWLEDGE*/

const { Builder, By, Key } = require("selenium-webdriver");
const { describe, it } = require("mocha");
var should = require("chai").Should();

describe("Add ANOTHER todo tests", function () {
   it("Successfully adds ANOTHER item to the todo list app", async function () {
      let driver = await new Builder().forBrowser("firefox").build();
      await driver.get("https://lambdatest.github.io/sample-todo-app/");
      await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium MOCHA", Key.RETURN);
      let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
         return value;
      });
      todoText.should.equal("Learn Selenium MOCHA");
      await driver.close();
   })
});
