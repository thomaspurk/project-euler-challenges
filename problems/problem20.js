/**
 * @file Contains a function that answer Project Euler Problem 1
 * @author Thomas J. Purk
 *
 * n! means n×(n−1)×⋯×3×2×1.\
 * For example, 10!=10×9×⋯×3×2×1=3628800,and the sum of the digits in the
 * number 10! is 3+6+2+8+8+0+0=27.
 *
 * Find the sum of the digits in the number 100!.
 *
 */

import cp from "child_process";

/**
 * @function problem20
 *
 * @export
 * @param {number} n The starting number for the algorithm
 * @return {number}
 */
export function problem20(n) {
  let answer = n;
  let productExpression = "";
  while (n > 1) {
    n--;
    productExpression += n;
    if (n != 1) productExpression += " * ";
  }
  // Javscript's math functions return scientic exponent results for large numbers
  // which will not contain all the digits.

  // The following line is developed for NodeJS on Mac to get around the issues above.
  // It leverages the power of the bc command and language in the zsh shell on a Mac
  let sumExpression = cp
    .execSync("bc --expression='" + productExpression + "'")
    .toString();
  sumExpression = sumExpression.replace(/\n|\\/g, "").split("").join(" + ");
  answer = cp
    .execSync("bc --expression='" + sumExpression + "'")
    .toString()
    .replace(/\n|\\/g, "");
  return parseFloat(answer);
}
