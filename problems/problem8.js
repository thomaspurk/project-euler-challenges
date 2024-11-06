/**
 * @file Contains a function that answer Project Euler Problem 8
 * @author Thomas J. Purk
 * The four adjacent digits in the 1000-digit number that have the greatest product are
 * 9 x 9 x 8 x 9 = 5832.
 *
 * Find the thirteen adjacent digits in the
 * 1000-digit number that have the greatest product. What is the value of this product?
 */

import { digitsString } from "../data/problem8-data.js";

/**
 * @function problem8 Computes the answer to Project Euler Problem #8 based on the input.
 * @export
 * @param {number} n The input to problem 8.
 * @return {number} The answer to problem 8.
 */
export function problem8(n) {
  // Track the best candidate answer so far
  let answer = 0;
  const digitArray = digitsString.split("");

  // Scan the digit list with n lookahead
  for (let i = 0; i < digitArray.length - n; i++) {
    let test = 1;
    for (let ii = 0; ii < n; ii++) {
      test = test * digitArray[i + ii];
    }
    // Update to the best answer
    if (test > answer) answer = test;
  }
  return answer;
}
