/**
 * @file Contains a function that answer Project Euler Problem 13
 * @author Thomas J. Purk
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 */

import { arr50DigitNumbers } from "../data/problem13-data.js";

/**
 * @function problem13 Computes the answer to Project Euler Problem #13 based on the input.
 * @export
 * @param {number} digits The number of digits of the answer to report
 * @param {number} itemCount The number of array items to sum.
 * @return {number} The answer to problem 13.
 */
export function problem13(digits, itemCount) {
  let answer = 0;

  // ensure itemCount is not larger than the array length
  itemCount = Math.min(itemCount, arr50DigitNumbers.length);

  for (let i = 0; i < itemCount; i++) {
    arr50DigitNumbers[i].forEach((digit) => {
      answer += digit;
    });
  }

  // JavaScript uses exponent format numbers for large number by default
  // toPrecision converts the number to a string retaining the specified precision.
  answer = answer.toPrecision(50);
  // Get the requested number of digits
  answer = answer.substring(0, digits);
  // Convert back to a number
  return parseInt(answer);
}
