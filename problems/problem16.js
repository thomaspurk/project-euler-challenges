/**
 * @file Contains a function that answer Project Euler Problem 16
 * @author Thomas J. Purk
 * @requires childProcess
 * 2^15 = 32768 and the sum of its digits is 3+2+7+6+8 = 26.
 *
 * What is the sum of the digits of the number 2^1000?
 */

import cp from "child_process";

/**
 * @function problem16 Computes the answer to Project Euler Problem #16 based on the input.
 * @export
 * @param {number} n The input to problem 16.
 * @return {number} The answer to problem 16.
 */
export function problem16(a, b) {
  let answer = 0;

  // JavaScript Limitation
  // let arrValues = Math.pow(a, b).toString().split("");
  // the above line only works in Javascript upto the MAX SAFE INTEGER of
  // 9,007,199,254,740,991 or nine quadrillion. Larger results will trigger
  // the Math.pow function to return scientific notation, 1.234567e+200
  // Note: .toPrecision maxes out at 100, which is not large enough

  // let arrValues = (a ** b).toString().split("");
  // the above line using ** has the same problem.

  // The following line is developed for NodeJS on Mac to get around the issues above.
  // It leverages the power of the bc command and language in teh zsh shell

  let arrValues = cp
    .execSync("bc --expression=" + a + "^" + b)
    .toString()
    .split("");
  arrValues.forEach((x) => {
    if (Number.isInteger(parseInt(x))) answer += parseInt(x);
  });

  return answer;
}
