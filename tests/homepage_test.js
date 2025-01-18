const { describe } = require("mocha");
const homepage = require("../pages/homepage");
var should = require("chai").Should();


const homepage_url="https://www.google.com/chrome"

describe("Describe block to group tests", function () {
   this.timeout(50000);
   afterEach(function () {
      homepage.closeDriver();
   });

   it("Chrome Homepage loads", function () {
      homepage.goto_URL(homepage_url);
      homepage.hero_is_present().should.equal(true); // PREGUNTAR SOBRE ESTE ESTE ASSERT Y CÓMO DEBUGGEAR LA EJECUCIÓN
   });

});