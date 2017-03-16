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
      // unit test: should fail if no argument is provided
      it('fail on no argument', function(){
        let testVal;
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(0);
      });

      // unit test: should fail if object or null is provided
      it('fail if object or null is provided', function(){
        let testVal = null;
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(0);
      });

      // unit test:  should fail if string provided
      it('fail if string is provided', function(){
        let testVal = 'foo';
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(0);
      });

      // unit test:  should fail if array provided
      it('fail if array is provided', function(){
        let testVal = [1, 2, 3];
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(0);
      });

      // unit test: should fail if boolean provided
      it('fail if boolean is provided', function(){
        let testVal = true;
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(0);
      });

      // unit test: should fail if NaN provided
      it('fail if NaN is provided', function(){
        let testVal = true;
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(0);
      });

      // unit test:  argument of zero should return a value of 1
      it('if argument is value of 0, return a value of 1', function(){
        let testVal = 0;
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(1);
      });

      // unit test:  a negative number for argument should return a value of 0
      it('if argument is a negative number, return a value of 0', function(){
        let testVal = -43;
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(0);
      });

      // unit test: a positive number should return the correct value
      it('argument value 5 should return 120', function(){
        let testVal = 5;
        let result = window.calc.factorial(testVal);
        expect(result).to.equal(120);
      });
    });

    describe('minValue function', function(){
      // unit test: should fail if no argument is provided
      it('minValue fail on no argument', function(){
        let testVal;
        let result = window.calc.minValue(testVal);
        expect(result).to.equal(0);
      });

      // unit test: fail if the array contains a null or object
      it('minValue() - fail if array has object or null',
        function(){
          let testVal = [null, 1, 2, 3];
          let result = window.calc.minValue(testVal);
          expect(result).to.equal(0);
        }
      );

      it('minValue() - fail if array has non-numerical string',
        function(){
          let testVal = ['hello', 4, 10, 5];
          let result = window.calc.minValue(testVal);
          expect(result).to.equal(0);
        }
      );

      it('minValue() - fail if array has a boolean',
        function(){
          let testVal = [true, 4, 1, 55];
          let result = window.calc.minValue(testVal);
          expect(result).to.equal(0);
        }
      );
      

    });
  });

})();
