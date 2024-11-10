import { problem1 } from "./problems/problem1.js";
import { problem2 } from "./problems/problem2.js";
import { problem3 } from "./problems/problem3.js";
import { problem4 } from "./problems/problem4.js";
import { problem5 } from "./problems/problem5.js";
import { problem6 } from "./problems/problem6.js";
import { problem7 } from "./problems/problem7.js";
import { problem8 } from "./problems/problem8.js";
import { problem9 } from "./problems/problem9.js";
import { problem10 } from "./problems/problem10.js";
import { problem11 } from "./problems/problem11.js";
import { problem12 } from "./problems/problem12.js";
import { problem13 } from "./problems/problem13.js";
import { problem14 } from "./problems/problem14.js";
import { problem15 } from "./problems/problem15.js";
import { problem16 } from "./problems/problem16.js";
import { problem17 } from "./problems/problem17.js";
import { problem18 } from "./problems/problem18.js";
import { problem19 } from "./problems/problem19.js";
import { problem20 } from "./problems/problem20.js";
import { problem21 } from "./problems/problem21.js";
import { problem22 } from "./problems/problem22.js";
import { answerKey } from "./data/answers-data.js";

// let answer1 = problem1(1000);
// console.log(
//   "Answer 1: " +
//     answer1 +
//     " " +
//     (answerKey.problem1 == answer1 ? "Correct" : "Incorrect")
// );

// let answer2 = problem2(4000000);
// console.log(
//   "Answer 2: " +
//     answer2 +
//     " " +
//     (answerKey.problem2 == answer2 ? "Correct" : "Incorrect")
// );

// let answer3 = problem3(600851475143);
// console.log(
//   "Answer 3: " +
//     answer3 +
//     " " +
//     (answerKey.problem3 == answer3 ? "Correct" : "Incorrect")
// );

// let answer4 = problem4(3);
// console.log(
//   "Answer 4: " +
//     answer4 +
//     " " +
//     (answerKey.problem4 == answer4 ? "Correct" : "Incorrect")
// );

// let answer5 = problem5([
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ]);
// console.log(
//   "Answer 5: " +
//     answer5 +
//     " " +
//     (answerKey.problem5 == answer5 ? "Correct" : "Incorrect")
// );

// let answer6 = problem6(100);
// console.log(
//   "Answer 6: " +
//     answer6 +
//     " " +
//     (answerKey.problem6 == answer6 ? "Correct" : "Incorrect")
// );

// let answer7 = problem7(10001);
// console.log(
//   "Answer 7: " +
//     answer7 +
//     " " +
//     (answerKey.problem7 == answer7 ? "Correct" : "Incorrect")
// );

// let answer8 = problem8(13);
// console.log(
//   "Answer 8: " +
//     answer8 +
//     " " +
//     (answerKey.problem8 == answer8 ? "Correct" : "Incorrect")
// );

// let answer9 = problem9(1000);
// console.log(
//   "Answer 9: " +
//     answer9 +
//     " " +
//     (answerKey.problem9 == answer9 ? "Correct" : "Incorrect")
// );

// let answer10 = problem10(2000000);
// console.log(
//   "Answer 10: " +
//     answer10 +
//     " " +
//     (answerKey.problem10 == answer10 ? "Correct" : "Incorrect")
// );

// let answer11 = problem11();
// console.log(
//   "Answer 11: " +
//     answer11 +
//     " " +
//     (answerKey.problem11 == answer11 ? "Correct" : "Incorrect")
// );

// let answer12 = problem12(500);
// console.log(
//   "Answer 12: " +
//     answer12 +
//     " " +
//     (answerKey.problem12 == answer12 ? "Correct" : "Incorrect")
// );

// let answer13 = problem13(10, 100);
// console.log(
//   "Answer 13: " +
//     answer13 +
//     " " +
//     (answerKey.problem13 == answer13 ? "Correct" : "Incorrect")
// );

// let answer14 = problem14(1000000).longestStartingNumber;
// console.log(
//   "Answer 14: " +
//     answer14 +
//     " " +
//     (answerKey.problem14 == answer14 ? "Correct" : "Incorrect")
// );

// let answer15 = problem15(20);
// console.log(
//   "Answer 15: " +
//     answer15 +
//     " " +
//     (answerKey.problem15 == answer15 ? "Correct" : "Incorrect")
// );

// let answer16 = problem16(2, 1000);
// console.log(
//   "Answer 16: " +
//     answer16 +
//     " " +
//     (answerKey.problem16 == answer16 ? "Correct" : "Incorrect")
// );

// let answer17 = problem17(1000);
// console.log(
//   "Answer 17: " +
//     answer17 +
//     " " +
//     (answerKey.problem17 == answer17 ? "Correct" : "Incorrect")
// );

let answer18 = problem18();
console.log(
  "Answer 18: " +
    answer18 +
    " " +
    (answerKey.problem18 == answer18 ? "Correct" : "Incorrect")
);

let answer19 = problem19();
console.log(
  "Answer 19: " +
    answer19 +
    " " +
    (answerKey.problem19 == answer19 ? "Correct" : "Incorrect")
);

let answer20 = problem20(100);
console.log(
  "Answer 20: " +
    answer20 +
    " " +
    (answerKey.problem20 == answer20 ? "Correct" : "Incorrect")
);

let answer21 = problem21(10000);
console.log(
  "Answer 21: " +
    answer21 +
    " " +
    (answerKey.problem21 == answer21 ? "Correct" : "Incorrect")
);

let answer22 = problem22();
console.log(
  "Answer 22: " +
    answer22 +
    " " +
    (answerKey.problem22 == answer22 ? "Correct" : "Incorrect")
);

// const problems = {
// ,

//   permutate: function (digits, isBase) {
//     let returnArray = [];
//     // Last recursion, no need to permutate again.
//     if (digits.length == 1) {
//       return digits;
//     }

//     // Iterate on each digit in the collection
//     for (let i = 0; i < digits.length; i++) {
//       // Set asside current digit at index i and get an array of other digits
//       let curDigit = digits[i];
//       let preDigits = digits.slice(0, i);
//       let postDigits = digits.slice(i + 1);
//       let otherDigits = preDigits.concat(postDigits);

//       // get the permutations of other digits
//       let otherDigitsPerm = this.permutate(otherDigits, false);
//       // Iterate over each permutation of the remaining digits
//       for (let ii = 0; ii < otherDigitsPerm.length; ii++) {
//         let curPerm = [curDigit].concat(otherDigitsPerm[ii]);
//         returnArray.push(curPerm);
//         // This is a base run if it is the top level interation
//         // which contains the full list of array members
//         if (isBase) {
//           // Is milionth?
//           if (returnArray.length == 1000000) {
//             // only send back the millionth
//             return curPerm;
//           }
//         }
//       }
//     }

//     return returnArray;
//   },
//   problem24: function () {
//     // A permutation is an ordered arrangement of objects. For example, 3124 is one
//     // possible permutation of the digits 1, 2, 3 and 4. If all of the permutations
//     // are listed numerically or alphabetically, we call it lexicographic order.
//     //The lexicographic permutations of 0, 1 and 2 are:
//     //
//     //    012   021   102   120   201   210
//     //
//     // What is the millionth lexicographic permutation of the
//     // digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

//     // Permutations formula
//     // P(n,r) = n! / (n-r)!
//     // 0! = 1
//     // n = 10
//     // r = 10
//     // P(n,r) = n!
//     // P(n,r) = 3,628,800

//     // Reference
//     // https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff

//     let test_population = ["0", "1", "2"];
//     let population = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     let permutations = [];
//     let answer = this.permutate(population, true);

//     console.log("Problem: 24 " + JSON.stringify(answer));
//     debugger;
//   },
//   problem25: function () {
//     //  The Fibonacci sequence is defined by the recurrence relation:</p>
//     // $F_n = F_{n - 1} + F_{n - 2}$, where $F_1 = 1$ and $F_2 = 1$.</blockquote>
//     // <p>Hence the first $12$ terms will be:</p>
//     //
//     // F_1 &amp;= 1\\
//     // F_2 &amp;= 1\\
//     // F_3 &amp;= 2\\
//     // F_4 &amp;= 3\\
//     // F_5 &amp;= 5\\
//     // F_6 &amp;= 8\\
//     // F_7 &amp;= 13\\
//     // F_8 &amp;= 21\\
//     // F_9 &amp;= 34\\
//     // F_{10} &amp;= 55\\
//     // F_{11} &amp;= 89\\
//     // F_{12} &amp;= 144
//     //
//     // The $12$th term, $F_{12}$, is the first term to contain three digits.</p>
//     // <What is the index of the first term in the Fibonacci sequence to contain $1000$ digits?</p>

//     let answer = "";

//     let arrFib = [1, 1];

//     // Loop until a 4 digit "F" is found
//     while (arrFib.slice(arrFib.length - 1)[0].toString().length < 1000) {
//       arrFib.push(
//         arrFib.slice(arrFib.length - 1)[0] + arrFib.slice(arrFib.length - 2)[0]
//       );
//     }

//     console.log("Problem: 25 " + arrFib.length);
//     debugger;
//   },
// };
