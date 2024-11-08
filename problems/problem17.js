/**
 * @file Contains a function that answer Project Euler Problem 1
 * @author Thomas J. Purk
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3+3+5+4+4=19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
 * how many letters would be used? NOTE: Do not count spaces or hyphens. For example,
 * 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen)
 * contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 */

/**
 * @function problem17 Computes the answer to Project Euler Problem #17 based on the input.
 * @export
 * @param {number} n The input to problem 17.
 * @return {number} The answer to problem 17.
 */
export function problem17(n) {
  let answer = 0;
  let map = {
    1: "one",
    2: "two",
    3: "there",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eigthy",
    90: "ninety",
  };

  let allNumbersString = "";

  // Iterate 1 to n (upto 9999)
  for (let index = 1; index <= n; index++) {
    let numString = index.toString();

    // map
    // Check for direct mapping
    if (map[numString]) {
      allNumbersString += " " + map[numString];
      // console.log(map[numString]);
    } else {
      // parsing is required
      let parsedString = "";
      // Thousands upto 9999
      // Example: 100 tho = undefined; hun = "one"; ten = undefined; one = undefined
      // Example: 999 tho = undefined; hun = "nine"; ten = ninety; one = nine
      let tho = map[numString.split("").reverse()[3]];
      let hun = map[numString.split("").reverse()[2]];
      // ten slot has special cases 10-20, 30, 40 ...
      let tenRaw = numString.split("").reverse()[1];
      let oneRaw = numString.split("").reverse()[0];
      let ten = undefined;
      let one = undefined;
      if (map[tenRaw + oneRaw]) {
        ten = map[tenRaw + oneRaw];
      } else {
        ten = map[tenRaw + "0"];
        one = map[oneRaw];
      }

      if (tho) parsedString += tho + " thousand ";
      if (hun) parsedString += hun + " hundred ";
      if (hun && (ten || one)) parsedString += "and ";
      if (ten) parsedString += ten + " ";
      if (one) parsedString += one;
      allNumbersString += " " + parsedString;
      // console.log(parsedString);
    }
  }

  return allNumbersString.replace(/\s/g, "").length;
}
