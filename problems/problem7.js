/**
 * @file Contains a function that answer Project Euler Problem 7
 * @author Thomas J. Purk
 * By listing the first six prime numbers: 2,3,5,7,11, and 13,
 * we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 */

/**
 * @function problem1 Computes the answer to Project Euler Problem #7 based on the input.
 * @export
 * @param {number} nthPrime The input to problem 7.
 * @return {number} The answer to problem 7.
 */
export function problem7(nthPrime) {
  let answer = 0;
  let primes = [];
  let test = 2; // We know 0 and 1 are not prime numbers.
  // 10001st item in primes array is index 10000
  while (!primes[nthPrime - 1]) {
    if (this.isPrime(test)) primes.push(test);
    test++;
  }
  console.log("Problem 7: " + primes[10000]);
}
