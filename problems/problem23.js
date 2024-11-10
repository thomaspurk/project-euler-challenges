/**
 * @file Contains a function that answer Project Euler Problem 23
 * @author Thomas J. Purk
 *
 * A perfect number is a number for which the sum of its proper divisors is
 * exactly equal to the number. For example, the sum of the proper divisors
 * of 28 would be 1+2+4+7+14=28, which means that 28 is a perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors is less
 * than n and it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1+2+3+4+6=16, the smallest number
 * that can be written as the sum of two abundant numbers is 24. By mathematical
 * analysis, it can be shown that all integers greater than 28123 can be
 * written as the sum of two abundant numbers. However, this upper limit cannot
 * be reduced any further by analysis even though it is known that the greatest
 * number that cannot be expressed as the sum of two abundant numbers is less
 * than this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the
 * sum of two abundant numbers.
 */

import { computeFactors } from "../utils/compute-factors.js";

/**
 * @function problem23
 * @export
 * @param {number} limit Calculate the solution using items below this number
 */
export function problem23(limit = 28123) {
  let answer = 0;
  // Track the abundant numbers found
  let abundantNumbers = [];
  // Scan number up to the limit to test for abundant numbers
  for (let n = 1; n <= limit; n++) {
    let t = { factorSum: 1 }; // 1 is not included in the proper factors, add it here.
    t.factors = computeFactors(n).properFactors;
    t.factors.forEach((f) => {
      t.factorSum += f;
    });

    // A number is abundant if the sum of its factors is greater than the number
    if (t.factorSum > n) {
      abundantNumbers.push(n);
    }
  }
  // Compute the Sums of all abundant numbers
  let abundantSums = [];
  abundantNumbers.forEach((an1) => {
    abundantNumbers.forEach((an2) => {
      if (an1 >= an2) {
        abundantSums.push(an1 + an2);
      }
    });
  });

  // Sum the numbers up to the limit that are NOT in the abundant sums list
  for (let n = 1; n <= limit; n++) {
    if (abundantSums.indexOf(n) == -1) {
      answer += n;
    }
  }

  return answer;
}

export function run() {
  let keyAnswer = 4179871;
  let answer = problem23();
  let message = "Answer 23: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
