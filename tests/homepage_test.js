const { describe, it } = require("mocha");
const { By, until } = require("selenium-webdriver");
const homepage = require("../pages/homepage");
var should = require("chai").should();
const urls = require("../utils/urls.json")
const locators = require("../utils/locators.json")

describe("Describe block to group tests", function () {

   afterEach(function () {
      driver.close();
   });

   it("Chrome Homepage loads", async function () {
      await driver.get(urls.homepage_url);
      itLoaded = await homepage.siteLoads(urls.homepage_url);
      itLoaded.should.equal(true);
   });

   it("Thank you page is loaded successfully after downloading Chrome Installer from Hero", async function () {
      await driver.get(urls.homepage_url);
      const element = await driver.wait(until.elementLocated(By.css(locators.homepageHeroButton)), 10000);
      await element.click();
      await homepage.waitForUrlContains("next-steps", 10000);
      let title = await driver.getTitle();
      title.should.equal("Google Chrome Web Browser: Finish downloading and installing");
   })

});