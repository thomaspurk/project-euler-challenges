/**
 * @file Contains a function that answer Project Euler Problem 67
 * @author Thomas J. Purk
 *
 *  By starting at the top of the triangle below and moving to adjacent numbers on the row
 *  below, the maximum total from top to bottom is 23.
 *
 *     3
 *    7 4
 *   2 4 6
 *  8 5 9 3
 *
 *  That is, 3 + 7 + 4 + 9 = 23.
 *
 *  Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'),
 *  a 15K text file containing a triangle with one-hundred rows.
 *
 * NOTE: This is a much more difficult version of Problem 18. It is not possible to try
 * every route to solve this problem, as there are 299 altogether! If you could check one
 * trillion (1012) routes every second it would take over twenty billion years to check
 * them all. There is an efficient algorithm to solve it. ;o)
 */

import { problem18_67 } from "../problems/problem18_67.js";

/**
 * @function compute Computes the answer to Project Euler Problem #67.
 * @export
 * @param {number} n The input to problem 18 & 67.
 * @return {number} The answer to problem 18 & 67.
 */

export function problem67(problemNumber = 67) {
  return problem18_67(problemNumber);
}

export function run() {
  let keyAnswer = 7273;
  let answer = problem67();
  let message = "Answer 67: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
