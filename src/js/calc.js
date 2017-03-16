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

    // if an array
    if (!Array.isArray(numbers)){
      return total; // argument is mising, return a value of 0
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
  window.calc.factorial = function factorial(topNumber) {
    let total = 0;    // total to be returned
    let factorialNum; // number for factorial operation

    // if no argument, return a value of zero
    if (topNumber === 'undefined') {
      return total;
    }

    if (topNumber === 0) {
      // A factorial with value of zero
      // computes to 1 as per wikipedia on factorial
      return (total = 1);
    }

    // only accept a topNumber that is typeof Number
    if (typeof(topNumber) === 'number') {
      // only accept a positive number
      if (topNumber > 0) {
        factorialNum = topNumber;
        // perform factorial operation
        total = factorialNum;
        for (let i = factorialNum; i > 1; i--) {
          total *= (i - 1);
        }
        return total;
      }
    } else {
      // Argument is not a valid factorial,
      // set return value to 0
      return (total = 0);
    }
    return total;
  };


  /**
  * minValue calculates the minimum value in an array
  * @param  array  inputArray   THe input array provided by caller
  * @return Number              A Number for the minimum value in the array
  */
  window.calc.minValue = function minValue(inputArray){
    let minValue = 0;

    if (!inputArray) {
      return minValue; // array is empty?  then return it
    }

    // if an array
    if (!Array.isArray(inputArray)){
      return minValue; // argument is mising, return a value of 0
    }

    let isInvalid = false;
    let thisValue;
    // loop over each element and check if a number:
    // if not, exit loop
    // if it is a number, leave it alone
    // if it is a string that can be converted to a number, convert it
    inputArray.forEach(function loopArray(eachElement) {
      if (typeof(eachElement) === 'string') {
        console.info('Did we get here?');
        console.info('The element should be a string and contains', eachElement);
        // so the element is string.  now we need to check if it has a numerical value
        if (typeof(Number(eachElement)) === 'number') {
          // if the element, converted to a string, is a number,
          // then write the number value back into the array
          eachElement = Number(eachElement);
        } else {
          console.info('Did we get here?');
          // the string does not convert to a number,
          // so abort the looping
          isInvalid = true;
          return;
        }
      } else if (typeof(eachElement) !== 'number') {
        isInvalid = true;
        return;
      }
    });

    console.info('minValue after loop is: ', minValue);
    console.info('isInvalid = ', isInvalid);
    console.info('the array contains: ', inputArray);
    // calculate the minimum value
    if (!isInvalid) {
      console.info("The min value returned was ", minValue);
      return (minValue = Math.min(inputArray));

    }

    // if an invalid array element is found, return a value of 0
    if (isInvalid) {
      return (minValue = 0);
    }
  };
})();
