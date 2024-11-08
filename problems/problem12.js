/**
 * @file Contains a function that answer Project Euler Problem 12
 * @author Thomas J. Purk
 *
 * The sequence of triangle numbers is generated by adding the natural numbers.
 * So the 7th triangle number would be 1+2+3+4+5+6+7=28.
 * The first ten terms would be:
 * 1,3,6,10,15,21,28,36,45,55,…
 * Let us list the factors of the first seven triangle numbers:
 *       1: 1
 *       3: 1,3
 *       6: 1,2,3,6
 *      10: 1,2,5,10
 *      15: 1,3,5,15
 *      21: 1,3,7,21
 *      28: 1,2,4,7,14,28
 * We can see that 28 is the first triangle number to have over five divisors.
 * What is the value of the first triangle number to have over five hundred divisors?
 */

import { computeFactors } from "../utils/compute-factors.js";

/**
 * @function problem12 Computes the answer to Project Euler Problem #12 based on the input.
 * @export
 * @param {number} n The input to problem 12.
 * @return {number} The answer to problem 12.
 */
export function problem12(n) {
  let triangleNumber = 0;
  let nn = 1;
  let factors = undefined;
  // Investigate each triangle number
  do {
    triangleNumber += nn;
    factors = computeFactors(triangleNumber).factors;
    nn++; // The number to add to get the next triangle number
  } while (factors.length <= n);
  // Stop the loop when the number of factors is over n

  return triangleNumber;
}
