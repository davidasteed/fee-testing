(function() {
    'use strict';

    // import expect() from chai library
    let expect = chai.expect;

    // outer describe() is for the suite for all unit tests for this repository
    describe('calc module', function(){
      describe('calc function', function(){
        it('a argument of [1] should return number 1', function(){
          // unit test argument
          let testVal = [1];
          // store result of function call
          let result = window.calc.sum(testVal);
          // chai assertion
          expect(result).to.equal(1);
        });
      });
    });


})();
