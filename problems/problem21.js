/**
 * @file Contains a function that answer Project Euler Problem 21
 * @author Thomas J. Purk
 *
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which
 * divide evenly into n). If d(a)=b and d(b)=a, where a≠b, then a and b are an
 * amicable pair and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1,2,4,5,10,11,20,22,44,55 and 110;
 * therefore d(220)=284. The proper divisors of 284 are 1,2,4,71 and 142;
 * so d(284)=220. Evaluate the sum of all the amicable numbers under 10000.
 */

import { computeFactors } from "../utils/compute-factors.js";

/**
 * @function problem21 Computes the answer to Project Euler Problem #21 based on the input.
 * @export
 * @param {number} n The input to problem 21.
 * @return {number} The answer to problem 21.
 */
export function problem21(n) {
  let answer = 0;
  let register = {};
  let amicablePairs = [];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    let factors = computeFactors(i).factors;
    // Sum the factors
    factors.forEach((f) => {
      if (f != i) sum += f;
    });
    // Track the sum of the factors for the current number
    register[i] = sum;
    // Test for amicable pair.
    // If the current sum of factors is in the registry and it's sum matches the current number.
    // Then it is an amicable pair
    if (register[sum] && sum != i && register[sum] == i) {
      amicablePairs.push({ a: sum, b: i });
    }
  }
  amicablePairs.forEach((ap) => {
    answer += ap.a + ap.b;
  });
  return answer;
}
