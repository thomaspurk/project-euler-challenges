/**
 * @file Contains a function that answer Project Euler Problem 9
 * @author Thomas J. Purk
 *
 * A Pythagorean triplet is a set of three natural numbers, a<b<c,
 * for which,a^2 + b^2 = c^2.
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.'
 */

/**
 * @function problem9 Computes the answer to Project Euler Problem #9 based on the input.
 * @export
 * @param {number} n The input to problem 9.
 * @return {number} The answer to problem 9.
 */
export function problem9(n) {
  let answer = 0;
  // c is less than n, walk c down from n
  for (let c = n; c >= 0; c--) {
    // b is less than c, walk down b
    for (let b = c; b >= 0; b--) {
      // a is less than b, walk down a
      for (let a = b; a >= 0; a--) {
        // Test Pythagorean triplet relationship
        if (c > b && b > a) {
          // Test addition condition
          if (c + b + a == n) {
            // Test Pythagorean Theorem condition
            if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
              answer = a * b * c;
            }
          }
        }
      }
    }
  }

  return answer;
}

export function run() {
  let keyAnswer = 31875000;
  let answer = problem9(1000);
  let message = "Answer 9: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
