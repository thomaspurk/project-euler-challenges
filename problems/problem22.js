/**
 * @file Contains a function that answer Project Euler Problem 22
 * @author Thomas J. Purk
 *
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over
 * five-thousand first names, begin by sorting it into alphabetical order. Then working out the
 * alphabetical value for each name, multiply this value by its alphabetical position in the list
 * to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN,
 * which is worth 3+15+12+9+14=53, is the 938th name in the list. So, COLIN would obtain a score of 938×53=49714.
 *
 * What is the total of all the name scores in the file?
 */

import { names } from "../data/problem22-data.js";

/**
 * @function problem22 Computes the answer to Project Euler Problem #2 based on the input.
 * @export
 * @param {number} n The input to problem 22.
 * @return {number} The answer to problem 22.
 */
export function problem22(limit = undefined) {
  let answer = 0;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  names.sort((a, b) => {
    if (a.toUpperCase() < b.toUpperCase()) {
      return -1;
    } else if (a.toUpperCase() < b.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  });

  if (limit == undefined) {
    limit = names.length;
  }
  for (let i = 0; i < limit; i++) {
    const name = names[i];
    let alphaValue = 0;
    name.split("").forEach((l) => {
      alphaValue += alphabet.indexOf(l.toUpperCase()) + 1;
    });
    answer += alphaValue * (i + 1);
  }

  return answer;
}

export function run() {
  let keyAnswer = 871198282;
  let answer = problem22();
  let message = "Answer 22: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
