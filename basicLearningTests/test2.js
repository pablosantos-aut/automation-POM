//import statements
const { Builder, By, Key } =  require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function firstSteps() {
  // set the browser options
  const browserOptions = new chrome.Options().addArguments('--headless');
  // initialize the webdriver
  const driver = new Builder().forBrowser('chrome').setChromeOptions(browserOptions).build();

  try {   
      // navigate to the target webpage
      await driver.get('https://lambdatest.github.io/sample-todo-app/');
      //add a todo item to the list
      await driver.findElement(By.id("sampletodotext")).sendKeys("This is THE NEW Item",Key.RETURN);
  } catch (error) {
      // handle error  
      console.error('An error occurred:', error);
  } finally {
      // quit browser session 
      await driver.quit();
}
}

firstSteps();