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

/**
 * @function computeFactors Determines the factors of a number.
 * @export
 * @param {number} n The input number for which to calculate the factors
 * @return {object} An object with a factors propery storing the and array of factors, and a primeFactors propery containing an array of primary factors
 */
export function computeFactors(n) {
  // Collect factors as discovered
  let returnObject = {
    factors: [1, n],
    primeFactors: [],
  };

  // Find numbers, starting at two, that divide the input number with 0 remainder
  for (let test = 2; test < n; test++) {
    if (n % test == 0) {
      let result = n / test;
      // "test" is a factor of n so add it to the collection
      returnObject.factors.push(test);
      // the result of the factor test is also a factor of n, add it.
      returnObject.factors.push(result);

      // Determine what are the factors of our new factors,
      // these will aloo be factors of n
      // But to avoid endless loop do not retest input n
      if (n != test) {
        let testResults = computeFactors(test); // recursive call
        // Merge the data into the return object
        returnObject.factors = returnObject.factors.concat(testResults.factors);
        returnObject.primeFactors = returnObject.primeFactors.concat(
          testResults.primeFactors
        );
      }
      if (n != result) {
        let resultResults = computeFactors(result); // recursive call
        // Merge the data into the return object
        returnObject.factors = returnObject.factors.concat(
          resultResults.factors
        );
        returnObject.primeFactors = returnObject.primeFactors.concat(
          resultResults.primeFactors
        );
      }

      // No need to continue the loop, other factors will be discovered
      // by the nested "factors" calls
      break;
    }
  }

  // Is n prime?
  // Need 2 true conditions
  if (
    returnObject.factors.length == 2 &&
    returnObject.factors.includes(n) &&
    returnObject.factors.includes(1)
  ) {
    returnObject.primeFactors.push(n);
  }
  // Test for hidden factors
  returnObject.factors.forEach((f) => {
    if (n % f == 0 && !returnObject.factors.includes(n / f)) {
      returnObject.factors.push(n / f);
    }
  });
  // De-duplicate Factors && List Proper Factors
  let ddFactors = [];
  let properFactors = [];
  returnObject.factors.forEach((f) => {
    if (!ddFactors.includes(f)) {
      ddFactors.push(f);
      if (f != n) {
        properFactors.push(f);
      }
    }
  });
  returnObject.properFactors = properFactors;
  returnObject.factors = ddFactors;
  // De-duplicate Prime Factors
  let ddPrimeFactors = [];
  returnObject.primeFactors.forEach((f) => {
    if (!ddPrimeFactors.includes(f)) ddPrimeFactors.push(f);
  });
  returnObject.primeFactors = ddPrimeFactors;
  // Send the Object back
  // console.log(JSON.stringify(returnObject));
  return returnObject;
}
