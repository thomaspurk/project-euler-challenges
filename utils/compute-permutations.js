/**
 * @file A helper utility containing functions relevant to finding the permutations of a population
 * @author Thomas J. Purk
 *
 */

export function computePermutations(population) {
  let returnArray = [];
  // Last recursion, no need to permutate again.
  if (population.length == 1) {
    return population;
  }

  // Iterate on each digit in the collection
  for (let i = 0; i < population.length; i++) {
    // Set asside current digit at index i and get an array of other digits
    let curDigit = population[i];
    let preDigits = population.slice(0, i);
    let postDigits = population.slice(i + 1);
    let otherDigits = preDigits.concat(postDigits);

    // get the permutations of other digits
    let otherDigitsPerm = computePermutations(otherDigits, false);
    // Iterate over each permutation of the remaining digits
    for (let ii = 0; ii < otherDigitsPerm.length; ii++) {
      let curPerm = [curDigit].concat(otherDigitsPerm[ii]);
      returnArray.push(curPerm.join(""));
    }
  }

  return returnArray;
}
