const { Builder, By, Key } =  require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").Should();

async function example() {
   //launch browser
   let driver = await new Builder().forBrowser("firefox").build();

   //navigate to website
   await driver.get("https://lambdatest.github.io/sample-todo-app/");
   
   //add a todo item to the list
   await driver.findElement(By.id("sampletodotext")).sendKeys("This is a NEW Item",Key.RETURN);
   
   //check if the item was indeed added
   let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
      return value;
   });
   
   //assertion using NodeJS assert built-in
   assert.strictEqual(todoText,"Learn Selenium");
   //assertion using Chai
   todoText.should.equal("Learn Selenium");
   
   //close browser
   await driver.close();
}

example();