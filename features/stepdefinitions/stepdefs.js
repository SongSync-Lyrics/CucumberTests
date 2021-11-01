const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const exp = require("constants");

//Feature 1 tests
function leader(userType) {
  if(userType === "not"){
    return " not ";
  }else{
    return " ";
  }
}

Given('I am not a leader', function () {
  this.userType = "not";
});

Given('I am a leader', function () {
  this.userType = "";
});

When("I create a room", function () {
  this.actualAnswer = leader(this.userType);
});

Then("ensure room is{}created", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Then('followers can join my session', function () {
  return 'join';
});

//Feature 2 tests
function userCheck(userType){
  if(userType === "leader"){
    return "leader";
  }else{
    return "follower";
  }
}

Given('I am a "leader"', function () {
  this.userType = "leader";
});

Given('I am a "follower"', function () {
  this.userType = "follower";
});

When("I join a room", function () {
  this.actualAnswer = userCheck(this.userType);
  this.leadCheck = "";
  
  if(this.actualAnswer == "leader"){
    this.leaderCheck = "can";
  }else{
    this.leaderCheck = "cannot";
  }
});

Then("ensure I am a {word}", function (expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Then("I {word} lead the session", function (expectedAnswer){
  assert.strictEqual(this.leaderCheck, expectedAnswer);
});

//Feature 3 tests
Given('that I am a leader', function () {
  this.userType = "";
});

When("I join my room", function (){
  this.roomLeader = "can lead";
  this.userType = "leader";
});

When("I join a different room", function (){
  this.roomLeader = "cannot lead";
  this.userType = "follower";
});

Then("ensure Im a {word}", function (expectedAnswer){
  assert.strictEqual(this.userType, expectedAnswer);
});

Then("I {string} the session", function (expectedAnswer){
  assert.strictEqual(this.roomLeader, expectedAnswer);
});

//Feature 4 tests
Given('I am a follower', function () {
  this.userType = "follower";
});

When("I enter a {word} room code", function (expectedAnswer){
  this.code = expectedAnswer;
  this.actualAnswer = "";
  this.actualAnswer2 = "";
  
  if(this.code === "valid"){
    this.actualAnswer = "";
    this.actualAnswer2 = "can";
  }else{
    this.actualAnswer = "can't ";
    this.actualAnswer2 = "cannot";
  }
});

Then("press join", function (){
  return "";
});

Then("I {}join a leader's session", function (expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Then("I {word} view lyrics", function (expectedAnswer){
  assert.strictEqual(this.actualAnswer2, expectedAnswer);
});