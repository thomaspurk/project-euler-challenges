/**
 * @file A helper utility containing functions relevant to finding the factors of a number
 * @author Thomas J. Purk
 *
 * Factors for 28
 * 28 / [1] = [28] --> [1,28] (given)
 * 28 / [2] = [14] --> [1,28,2,14]
 * 14 / [2] =  [7] --> [1,28,2,14,2,7]
 *  7 / [1] =  [7] --> [1,28,2,14,2,7,1,7]
 *  7 is prime, no more values
 * De-duped -> [1,28,2,14,7]
 * Although this method performs fast because it iteratively halves the
 * numerator, it misses values, in this case 4. But the missing value can
 * be detected by investigating the factors for repeated numbers.
 * 1 repeats 1 + 1 = 2 ->> 2 is already in the factors array
 * 2 repeats 2 + 2 = 4 ->> 4 is missing need to add it
 * 7 repeats 7 + 7 = 14 ->> 14 is already in the factors array
 */
import { isPrime } from "../utils/is-prime.js";

/**
 * @function computeFactors Determines the factors of a number.
 * @export
 * @param {number} n The input number for which to calculate the factors
 * @return {object} An object with a factors propery storing the and array of factors, and a primeFactors propery containing an array of primary factors
 */
export function computeFactors(n) {
  // Collect factors as discovered
  let returnObject = {
    factors: [],
    primeFactors: [],
  };

  // Find numbers, starting at two, that divide the input number with 0 remainder
  for (let i = 1; i < Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      returnObject.factors.push(i);
      if (isPrime(i)) {
        returnObject.primeFactors.push(i);
      }
      const n_i = n / i;
      if (n_i != i) {
        returnObject.factors.push(n_i);
        if (isPrime(n_i)) {
          returnObject.primeFactors.push(n_i);
        }
      }
    }
  }

  // List Proper Factors
  let properFactors = [];
  returnObject.factors.forEach((f) => {
    if (f != n && f != 1) {
      properFactors.push(f);
    }
  });
  returnObject.properFactors = properFactors;

  // Send the Object back
  // console.log(JSON.stringify(returnObject));
  return returnObject;
}
