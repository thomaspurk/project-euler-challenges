/**
 * @file A helper utility containing functions relevant to finding prime numbers
 * @author Thomas J. Purk
 *
 */

/**
 * @function isPrime Determins if the input number is a prime number
 * @export
 * @param {number} n The number that should be tested for prime
 * @return {boolen}
 */
export function isPrime(n) {
  let factors = [];
  // even numbers are never primes except 2 && 1 is not prime
  if (n == 2 || (n % 2 != 0 && n > 1)) {
    for (let test = 1; test <= n; test++) {
      // Is test a factor of n?
      if (n % test == 0) {
        factors.push(test);
        if (test != n && test != 1) {
          // we already know that n cannot be prime, no need to keep looking for other factors
          break;
        }
      }
    }
  }
  // Test if the factors of n are itself and 1.
  return JSON.stringify(factors.sort()) == JSON.stringify([1, n]);
}
