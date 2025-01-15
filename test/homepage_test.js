const { describe } = require("mocha");
const homepage = require("../pageobjects/homepage");

describe("Describe block to group tests",function(){
   this.timeout(50000);
   beforeEach(function(){
      //stuff to be ran before each test
   });

   afterEach(function(){
      //stuff to be ran after each test
   });

   it("POM Test 1",function(){
      var baseURL = "https://www.google.com/";
      homepage.goto_URL(baseURL);
      homepage.enter_search("QA underground tutorial for beginners");
   });

});