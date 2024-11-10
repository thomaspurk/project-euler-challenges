/**
 * @file Contains a function that answer Project Euler Problem 25
 * @author Thomas J. Purk
 *
 * The Fibonacci sequence is defined by the recurrence relation:
 * Fn = F{n - 1} + F{n - 2}, where F1 = 1 and F2 = 1.
 *
 * Hence the first 12 terms will be:
 *
 * F1 = 1
 * F2 = 1
 * F3 = 2
 * F4 = 3
 * F5 = 5
 * F6 = 8
 * F7 = 13
 * F8 = 21
 * F9 = 34
 * F10 = 55
 * F11 = 89
 * F12 = 144
 *
 * The 12th term, F12, is the first term to contain three digits.
 * What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */

import cp from "child_process";

/**
 * @function problem1 Computes the answer to Project Euler Problem #25 based on the input.
 * @export
 * @param {number} n The input to problem 25.
 * @return {number} The answer to problem 25.
 */
export function problem25(digits) {
  let answer = "";

  let fibonacciData = { a: "1", b: "1", bi: 2 };

  // Loop until a 4 digit "F" is found
  while (fibonacciData.b.length < digits) {
    // To get to 1000 digits in a fibonnci sequence, the numbers are too large for javascript
    // Therefore using the bc CLI application from zsh on Mac.
    let newB = cp
      .execSync(`bc --expression='${fibonacciData.a} + ${fibonacciData.b}'`)
      .toString()
      .replace(/\n|\\/g, "");
    fibonacciData.bi++;
    fibonacciData.a = fibonacciData.b;
    fibonacciData.b = newB;
  }

  return fibonacciData.bi;
}

export function run() {
  let keyAnswer = 4782;
  let answer = problem25(1000);
  let message = "Answer 25: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
