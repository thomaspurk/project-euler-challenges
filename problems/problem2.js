/**
 * @file Contains a function that answer Project Euler Problem 2
 * @author Thomas J. Purk
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2 , the first 10 terms will be:
 *       1, 2, 3, 5, 8, 13, 21, 34, 55, 89  (231)
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed
 * four million, find the sum of the even-valued terms.
 */

/**
 * @function problem2 Computes the answer to Problem 2 given the input value.
 * @exports
 * @param {number} n The input to Problem 2.
 * @return {number} The answer to Problem 2.
 */
export function problem2(n) {
  let count = 2;
  let fibonacciTerms = [1, 2];
  let newTerm = fibonacciTerms.slice(-1)[0] + fibonacciTerms.slice(-2)[0];
  while (count < n) {
    fibonacciTerms.push(newTerm);
    count++;

    newTerm = fibonacciTerms.slice(-1)[0] + fibonacciTerms.slice(-2)[0];
  }
  return fibonacciTerms.reduce((p, c) => p + c);
}