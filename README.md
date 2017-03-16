# Front End Testing

This repo is a practice area for testing front end JavaScript code.


Author: David Steed

Project Purpose:
  Learn how Behavior Driven Development (BDD) utilizes assertions for expected behavior to validate Javascript programs.

  Assignment:
    Create the Mocha/Chai/Karma infrastructure for testing, and write/validate tests against two functions.

Critical Path:
  1.  Install Mocha, Chai, and Karma into a clone repository
  2.  Test a simple expect() statement in the Karma to validate if calc() will return the value passed ([1] as a single-element array) into the function

  3.  build and validate test conditions for each function:

      initial thoughts on the calc() test conditions:

          Success:
            array sizes:  one, two, or 10 element arrays

          Failure:
            possibly loop over each array position and confirm that typeof(element) === Number
            only arrays that contain numbers
              not multi-dim array
              not array of non-numbers (such as objects)

            empty array?  - currently returns number 0.  This is not strictly as per th function description, but we'll let it go, since the developer already wrote this code:
              if (!numbers) {
                  return total;
              }

      initial thoughts for factorial() test conditions:
        In descending order:
        1.  did they provide a topnumber at all?
        2.  only accept a topnumber value that is typeof(number)
        3.  needs to be a positive number,
        4.  needs not to be zero
