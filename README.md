# Testing Framework
Week 7 Makers Academy exercise to create our own testing framework for JavaScript.

## The basics of a testing framework:
* Pass/Fail
* Label for test
* Equal matcher

## What does a testing framework supply:
* Mocking functions to help isolate the part of the code being tested.
* Assertion functions that help check that specific things are true.
* A standard way to describe what a test or group of tests is doing.
* A way to organise tests.
* An easy way to run lots of tests.

## Approach
In previous projects I have used Rspec to test Ruby, and Jasmine to test JavaScript.  I am therefore used to giving the test a name, and then setting an expectation for how the test will work.

We were given a Makers resource which set up an equality matcher in Javascript, based on a hypothetical 'Circle' class.  I have used this, in conjunction with a [YouTube video]{https://www.youtube.com/watch?v=HyGnxxKJmeQ} by Alice Lieutier and a [Medium blog post]{https://medium.com/javascript-in-plain-english/unit-test-front-end-javascript-code-without-a-framework-8f00c63eb7d4} by Amit Gupta, to get an understanding of how to go about building a testing framework.

## How to use the framework
Firstly, you will need to clone the repo:
```sh
$ git clone git@github.com:stringiest/stringiest-testing-framework.git
```
Copy the files `testingFramework.js` & `testRunner.html` into your project folder.

Insert the file names for your source code into `testRunner.html` where indicated.

Write your tests in a separate js file, and add the file name for this into `testRunner.html` where indicated.

To run the tests, navigate to your `testRunner.html` file in Chrome.  The results of your tests will appear in the console.  To access the console in Chrome, go to 'View', 'Developer', 'Javascript Console'.

## What commands should I use to define my tests?  
Tests should be drafted in the format:
```js
it('description of test', function() {
  expect('code to be tested').toEqual('expected output');
})
```
Available matchers:
* `toEqual`
* `toBeAnArray`
* `isTrue`

You can also see sample tests in `sample_tests.js`
