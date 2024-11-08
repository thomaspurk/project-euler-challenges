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
import { problem18_67 } from "./problems/problem18_67.js";
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

let answer11 = problem11();
console.log(
  "Answer 11: " +
    answer11 +
    " " +
    (answerKey.problem11 == answer11 ? "Correct" : "Incorrect")
);

let answer12 = problem12(500);
console.log(
  "Answer 12: " +
    answer12 +
    " " +
    (answerKey.problem12 == answer12 ? "Correct" : "Incorrect")
);

let answer13 = problem13(10, 100);
console.log(
  "Answer 13: " +
    answer13 +
    " " +
    (answerKey.problem13 == answer13 ? "Correct" : "Incorrect")
);

// const problems = {
// ,
//   problem19: function () {
//     // You are given the following information, but you may prefer to do some research for yourself.
//     // 1 Jan 1900 was a Monday.
//     // Thirty days has September,
//     // April, June and November.
//     // All the rest have thirty-one,
//     // Saving February alone,
//     // Which has twenty-eight, rain or shine.
//     // And on leap years, twenty-nine.
//     // A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
//     // How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

//     let daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let monthName = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     let year = 1900;
//     let dayOfMonth = 1;
//     let monthIndex = 0; // January
//     let dayOfWeekIndex = 1; // Monday
//     let endYearMonthDay = 20001131;

//     let answer = 0;
//     while (year * 10000 + monthIndex * 100 + dayOfMonth <= endYearMonthDay) {
//       // Is today a Sunday and the 1st of the month?
//       if (year >= 1901 && dayOfMonth == 1 && dayOfWeekIndex == 0) {
//         console.log(
//           dayName[dayOfWeekIndex] +
//             ", " +
//             monthName[monthIndex] +
//             " " +
//             dayOfMonth +
//             " " +
//             year
//         );
//         answer++;
//       }

//       // What is tomorrow's date?
//       // 1 - How many days in the currnet month?
//       let mDays = daysPerMonth[monthIndex];
//       // Test for leap year
//       if (
//         (year % 100 == 0 && year % 400 == 0 && monthIndex == 1) || // Centry year?
//         (year % 100 != 0 && year % 4 == 0 && monthIndex == 1)
//       ) {
//         mDays++;
//       }
//       // Ready for next month?
//       if (dayOfMonth == mDays) {
//         dayOfMonth = 1;
//         // Ready for a new year?
//         if (monthIndex == 11) {
//           monthIndex = 0;
//           year++;
//         } else {
//           monthIndex++;
//         }
//       } else {
//         dayOfMonth++;
//       }
//       // Ready for new week?
//       if (dayOfWeekIndex == 6) {
//         dayOfWeekIndex = 0;
//       } else {
//         dayOfWeekIndex++;
//       }
//     }

//     console.log("Problem 19: " + answer);
//   },
//   problem20: function (n) {
//     // n! means n×(n−1)×⋯×3×2×1.\
//     // For example, 10!=10×9×⋯×3×2×1=3628800,and the sum of the digits in the
//     // number 10! is 3+6+2+8+8+0+0=27.
//     //
//     // Find the sum of the digits in the number 100!.
//     let answer = n;
//     let productExpresion = "";
//     while (n > 1) {
//       n--;
//       productExpresion += n;
//       if (n != 1) productExpresion += " * ";
//     }
//     // Javscript's math functions return scientic exponent results for large numbers
//     // which will not contain all the digits.
//     let sumExpression = cp
//       .execSync("bc --expression='" + productExpresion + "'")
//       .toString();
//     sumExpression = sumExpression.replace(/\n|\\/g, "").split("").join(" + ");
//     answer = cp.execSync("bc --expression='" + sumExpression + "'").toString();
//     console.log("Problem 19: " + answer);
//   },
//   problem21: function () {
//     // Let d(n) be defined as the sum of proper divisors of n (numbers less than n which
//     // divide evenly into n).If d(a)=b and d(b)=a, where a≠b, then a and b are an
//     // amicable pair and each of a and b are called amicable numbers.
//     //
//     // For example, the proper divisors of 220 are 1,2,4,5,10,11,20,22,44,55 and 110;
//     // therefore d(220)=284. The proper divisors of 284 are 1,2,4,71 and 142;
//     // so d(284)=220.Evaluate the sum of all the amicable numbers under 10000.
//     let answer = 0;
//     let register = {};
//     let amicablePairs = [];
//     for (let n = 1; n < 10000; n++) {
//       let sum = 0;
//       let factors = this.factors(n).factors;
//       factors.forEach((f) => {
//         if (f != n) sum += f;
//       });
//       register[n] = sum;
//       if (register[sum] && sum != n && register[sum] == n) {
//         amicablePairs.push({ a: sum, b: n });
//       }
//     }
//     amicablePairs.forEach((ap) => {
//       answer += ap.a + ap.b;
//     });
//     console.log("Problem 21: " + answer);
//   },

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
//   problem23: function () {
//     //A perfect number is a number for which the sum of its proper divisors is
//     // exactly equal to the number. For example, the sum of the proper divisors
//     // of 28 would be 1+2+4+7+14=28, which means that 28 is a perfect number.
//     //
//     // A number n is called deficient if the sum of its proper divisors is less
//     // than n and it is called abundant if this sum exceeds n.
//     //
//     // As 12 is the smallest abundant number, 1+2+3+4+6=16, the smallest number
//     // that can be written as the sum of two abundant numbers is 24. By mathematical
//     // analysis, it can be shown that all integers greater than 28123 can be
//     // written as the sum of two abundant numbers. However, this upper limit cannot
//     // be reduced any further by analysis even though it is known that the greatest
//     // number that cannot be expressed as the sum of two abundant numbers is less
//     // than this limit.
//     //
//     // Find the sum of all the positive integers which cannot be written as the
//     // sum of two abundant numbers.

//     let answer = 0;
//     let abundantNumbers = [];
//     for (let n = 1; n <= 28123; n++) {
//       let t = { factorSum: 0 };
//       t.factors = this.factors(n).properFactors;
//       t.factors.forEach((f) => {
//         t.factorSum += f;
//       });

//       if (t.factorSum > n) {
//         abundantNumbers.push(n);
//       }
//     }
//     //(48,511,225)
//     let abundantSums = [];
//     abundantNumbers.forEach((an1) => {
//       abundantNumbers.forEach((an2) => {
//         if (an1 >= an2) {
//           abundantSums.push(an1 + an2);
//         }
//       });
//     });

//     // final loop
//     for (let n = 1; n <= 28123; n++) {
//       if (abundantSums.indexOf(n) == -1) {
//         answer += n;
//       }
//     }

//     console.log("Problem: 23 " + answer);
//     debugger;
//   },
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
