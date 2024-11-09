/**
 * @file Contains a function that answer Project Euler Problem 1
 * @author Thomas J. Purk
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/**
 * @function problem1 Computes the answer to Project Euler Problem #1 based on the input.
 * @export
 * @param {number} n The input to problem 1.
 * @return {number} The answer to problem 1.
 */
//   problem22: function () {
//     // Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over
//     // five-thousand first names, begin by sorting it into alphabetical order. Then working out the
//     // alphabetical value for each name, multiply this value by its alphabetical position in the list
//     // to obtain a name score.
//     //
//     // For example, when the list is sorted into alphabetical order, COLIN,
//     // which is worth 3+15+12+9+14=53, is the 938th name in the list. So, COLIN would obtain a score of 938×53=49714.
//     //
//     // What is the total of all the name scores in the file?
//     let answer = 0;
//     let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     let names = fs
//       .readFileSync("0022_names.txt")
//       .toString()
//       .replace(/\"/g, "")
//       .split(",");

//     names.sort((a, b) => {
//       if (a.toUpperCase() < b.toUpperCase()) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });

//     let count = 0;
//     names.forEach((name) => {
//       count++;
//       let alphaValue = 0;
//       name.split("").forEach((l) => {
//         alphaValue += alphabet.indexOf(l.toUpperCase()) + 1;
//       });
//       answer += alphaValue * count;
//     });

//     console.log("Problem: 22: " + answer);
//     debugger;
//   },
