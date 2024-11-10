const problems = [
  "./problems/problem1.js",
  "./problems/problem2.js",
  "./problems/problem3.js",
  "./problems/problem4.js",
  "./problems/problem5.js",
  "./problems/problem6.js",
  "./problems/problem7.js",
  "./problems/problem8.js",
  "./problems/problem9.js",
  "./problems/problem10.js",
  "./problems/problem11.js",
  "./problems/problem12.js",
  "./problems/problem13.js",
  "./problems/problem14.js",
  "./problems/problem15.js",
  "./problems/problem16.js",
  "./problems/problem17.js",
  "./problems/problem18.js",
  "./problems/problem19.js",
  "./problems/problem20.js",
  "./problems/problem21.js",
  "./problems/problem22.js",
];

import { answerKey } from "./data/answers-data.js";

problems.forEach((problem) => {
  import(problem).then((module) => {
    module.run(0);
  });
});

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
