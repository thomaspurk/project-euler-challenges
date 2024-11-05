/**
 * @file Contains a function that answer Project Euler Problem 5
 * @author Thomas J. Purk
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

/**
 * @function problem5 Computes the answer to Project Euler Problem #5 based on the input.
 * @export
 * @param {number} arrNumbers The input to problem 5.
 * @return {number} The answer to problem 5.
 */
export function problem5(arrNumbers) {
  // Track the ultimate answer
  let answer = 0;
  // A number to test. Check to see if it can be divided without remainder by all numbers in arrNumbers
  let test = 1;

  while (answer == 0) {
    // Instead of testing each remainded seperately, sum them all.
    // If the sum is 0, then the test number was divisible without remainder by all number in arrNumbers
    let sumRemainders = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
      sumRemainders += test % arrNumbers[i]; // = 0 id n is a factor of test
    }
    // The first number where all remainders sum to zero is the smallest number
    if (sumRemainders == 0) {
      answer = test;
    }
    test++;
  }
  return answer;
}
