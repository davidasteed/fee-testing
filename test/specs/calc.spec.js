(function() {
  'use strict';

  // import expect() from chai library
  let expect = chai.expect;

  // outer describe() is for the suite for all unit tests for this repository
  describe('calc module', function(){
    // unit tests for calc()
    describe('calc function', function(){
      // unit test:  does a single array passed in get returned?
      it('an argument of [1] should return number 1', function(){
        // unit test argument
        let testVal = [1];
        // store result of function call
        let result = window.calc.sum(testVal);
        // chai assertion
        expect(result).to.equal(1);
      });

      // unit test: does an empty array return a value of undefined?
      it('no arguments present should return 0', function(){
        // unit test argument
        let testVal;
        // store result of function call
        let result = window.calc.sum(testVal);
        // chai assertion
        expect(result).to.equal(0);
      });

      // unit test:  multiple element array is ok?
      it('an argument of [1, 2, 3, 4] should return number 10', function(){
        let testVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let result = window.calc.sum(testVal);
        expect(result).to.equal(55);
      });

      // unit test:  can a NaN value fail?
      it('pass in NaN in the array', function(){
        let testVal = [NaN, 1, 5, 0];
        let result = window.calc.sum(testVal);
        expect(result).to.equal(0);
      });

      // unit test: can a Null value fail?
      it('pass in object (or Null) value in the array', function(){
        let testVal = [2, null, 5, 0];
        let result = window.calc.sum(testVal);
        expect(result).to.equal(0);
      });

    });

    describe('factorial function', function(){

    });
  });


})();
