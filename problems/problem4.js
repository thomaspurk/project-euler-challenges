/**
 * @file Contains a function that answer Project Euler Problem 1
 * @author Thomas J. Purk
 * A palindromic number reads the same both ways. The largest palindrome
 * made from the product of two-digit numbers is 9009 = 91 x 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

/**
 * @function problem4 Computes the answer to Project Euler Problem #4 based on the input.
 * @export
 * @param {number} digitCount the number of digits in the factor number.
 * @return {number} The answer to problem 4.
 */
export function problem4(digitCount) {
  let upperFactor = parseInt("9".repeat(digitCount));
  let lowerFactor = parseInt("9".repeat(digitCount - 1));
  let answer = 0;
  // decending index loop
  for (let factor1 = upperFactor; factor1 > lowerFactor; factor1--) {
    for (let factor2 = upperFactor; factor2 > lowerFactor; factor2--) {
      let result = factor1 * factor2;

      // Determine if the string read forwards and backwards are equal.
      if (result.toString() == result.toString().split("").reverse().join("")) {
        // Track the largest number as the asnwer
        if (result > answer) {
          answer = result;
        }
      }
    }
  }
  return answer;
}
