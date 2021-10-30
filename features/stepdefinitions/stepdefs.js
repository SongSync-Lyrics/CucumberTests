const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");


function leader(userType) {
  if(userType === "not"){
    return "not";
  }else{
    return "";
  }
}

Given("I am {word} a leader", function (wordd) {
  this.userType = wordd;
});

When("I create a room", function () {
  this.actualAnswer = leader(this.userType);
});

Then("ensure room is {word} created", function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
  });

