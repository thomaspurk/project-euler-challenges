/**
 * @file Contains a function that answer Project Euler Problem 1
 * @author Thomas J. Purk
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/**
 * @function problem1 Computes the answer to Project Euler Problem #1 based on the input.
 * @export
 * @param {number} n The input to problem 1.
 * @return {number} The answer to problem 1.
 */
export function problem1(n) {
  let answer = 0;
  for (let naturalNumber = 1; naturalNumber < n; naturalNumber++) {
    if (naturalNumber % 3 == 0 || naturalNumber % 5 == 0) {
      answer += naturalNumber;
    }
  }
  return answer;
}

export function run() {
  let keyAnswer = 233168;
  let answer = problem1(1000);
  let message = "Answer 1: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
