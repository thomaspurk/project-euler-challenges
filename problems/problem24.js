/**
 * @file Contains a function that answer Project Euler Problem 24
 * @author Thomas J. Purk
 * 
 * A permutation is an ordered arrangement of objects. For example, 3124 is one
 * possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
 * are listed numerically or alphabetically, we call it lexicographic order.
 * The lexicographic permutations of 0, 1 and 2 are:
 * 
 *     012   021   102   120   201   210
 * 
 * What is the millionth lexicographic permutation of the
 * digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

 * Permutations formula
 * P(n,r) = n! / (n-r)!
 * 0! = 1
 * n = 10
 * r = 10
 * P(n,r) = n!
 * P(n,r) = 3,628,800

 * @see https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff
 */

import { computePermutations } from "../utils/compute-permutations.js";

/**
 * @function problem24
 * @export
 * @param {string[]} [population=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]]
 * @param {number} [position=1000000]
 * @return {array}
 */
export function problem24(
  population = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  position = 1000000
) {
  let permutations = computePermutations(population, true);
  let answer = permutations[position - 1];

  return answer;
}

export function run() {
  let keyAnswer = "2783915460";
  let answer = problem24();
  let message = "Answer 24: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
