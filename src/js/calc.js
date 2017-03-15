(function() {
  'use strict';

  window.calc = window.calc || {};

  /**
  * Adds whatever numbers are provided and returns the total
  * @param  {Array} numbers  The numbers to add together
  * @return {Number}         The total of all numbers
  */
  window.calc.sum = function sum(numbers) {
    let total = 0;
    //
    // NOTE
    // This code implies that the programmer wants a default behavior of:
    // Return a value of 0, in cases that the argument is missing, undefined,
    // or of an unexpected/unsupported type or value
    //
    if (!numbers) {
      return total; // array is empty?  then return it
    }

    let isArray = false;

    // if an array
    if (Array.isArray(numbers)){
      isArray = true;
    } else {
      return total; // argument is missing, return a value of 0
    }

    let isInvalid = false;
    // loop over each number
    numbers.forEach(function loopOverNumbers(eachElement) {
      if (isNaN(eachElement)) {
        // number is a NaN, so return a value of 0
        isInvalid = true;
        return;
      } else if (typeof(eachElement) === 'object') {
        // so the element is another type of object or null,
        // so return a value of 0
        isInvalid = true;
        return;
      } else if (typeof(eachElement) === 'string') {
        // so the element is string.  now we need to check if it has a numerical value
        if (typeof(Number(eachElement)) === 'number') {
          // if the element, converted to a string, is a number,
          // then add it to the total
          total += Number(eachElement);
        } else {
          // the string does not convert to a number,
          // so abort the looping
          isInvalid = true;
          return;
        }
      } else if (typeof(eachElement) === 'number') {
        total += eachElement;
      }

    });

    // if one of the tests failed, return a zero value
    if (isInvalid) {
      total = 0;
    }

    // if the argument passes type/content sanity checks, return the total
    return total;
  };

  /**
  * Returns the factorial for the given number which is defined as:
  *    1 * 2 * 3 * ... * topNumber
  *    For example, if the number is 5, the factorial would be:
  *    1 * 2 * 3 * 4 * 5 = 120
  * @param  {Number} topNumber  The number to get the factorial value for
  * @return {Number}            The final factorial value
  */
  function factorial(topNumber) {
    let total = 0;

    if (typeof(topNumber) !== 'number') {
      return 0;
    }

    for (let i = 1; i <= topNumber; i++) {
      total *= i;
    }

    console.info("Debug:  total was return with a value of: ", total);
    return total;
  }

})();
