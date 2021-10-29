const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

function leader(userType) {
}

Given("I am not a leader", function () {
  this.userType = "Follower";
});

When("I create a room", function () {
  this.actualAnswer = leader(this.userType);
});

Then('ensure room is not created', function () {
    return "created";
  });

