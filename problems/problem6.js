/**
 * @file Contains a function that answer Project Euler Problem 6
 * @author Thomas J. Purk
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385.
 * The square of the sum of the first ten natural numbers is,
 * ( 1 + 2 + ... + 10 )^2 = 55^2 = 3025.
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers
 * and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers
 * and the square of the sum.
 */

/**
 * @function problem6 Computes the answer to Project Euler Problem #6 based on the input.
 * @export
 * @param {number} n The input to problem 6.
 * @return {number} The answer to problem 6.
 */

export function problem6(n) {
  let sumOfSquares = 0;
  let sumOfNaturalNumbers = 0;
  for (let nn = 1; nn <= n; nn++) {
    sumOfNaturalNumbers += nn;
    sumOfSquares += Math.pow(nn, 2);
  }
  return Math.pow(sumOfNaturalNumbers, 2) - sumOfSquares;
}
