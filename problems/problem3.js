/**
 * @file Contains a function that answer Project Euler Problem 3
 * @author Thomas J. Purk
 * The prime factors of 13195 are 5, 7, 13, and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 */

import { computeFactors } from "../utils/compute-factors.js";

/**
 * @function problem3 Computes the answer to Project Euler Problem #1 based on the input.
 * @export
 * @param {number} n The problem's input.
 * @return {number} The problem's answer.
 */
//cmd: node -e 'require("./app.js").problem3(600851475143)'
export function problem3(n) {
  let answer = 0;
  let objFactors = computeFactors(n);
  // Find the largest number in the prim factors array
  objFactors.primeFactors.forEach((pf) => {
    if (pf > answer) answer = pf;
  });

  return answer;
}
