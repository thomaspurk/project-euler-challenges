/**
 * @file Contains a function that answer Project Euler Problem 10
 * @author Thomas J. Purk
 * The sum of the primes below 10 is 2+3+5+7=17.
 *
 * Find the sum of all the primes below two million.
 */

import { isPrime } from "../utils/is-prime.js";

/**
 * @function problem10 Computes the answer to Project Euler Problem #10 based on the input.
 * @export
 * @param {number} n The input to problem 10.
 * @return {number} The answer to problem 10.
 */
export function problem10(n) {
  let answer = 0;
  // starting with an odd number
  if (n % 2 == 0) n--;
  // subtracting 1 leads to even number which we know is not prime (except 2)
  // subtracting 2 leads to only odds which may be prime.
  for (let index = n; index > 1; index -= 2) {
    if (isPrime(index)) {
      answer += index;
    }
  }
  // the above loop will miss 2, the only even prime
  // so add it now
  answer += 2;

  return answer;
}

export function run() {
  let keyAnswer = 142913828922;
  let answer = problem10(2000000);
  let message = "Answer 10: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
