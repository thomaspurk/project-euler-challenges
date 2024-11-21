/**
 * @file Contains a function that answer Project Euler Problem 25
 * @author Thomas J. Purk
 * A unit fraction contains $1$ in the numerator. 
 * The decimal representation of the unit fractions with denominators 2 to 10 are given:
 *      
 *      1/2 = 0.5
 *      1/3 = 0.(3)
 *      1/4 =0.25
 *      1/5 = 0.2
 *      1/6 = 0.1(6)
 *      1/7 = 0.(142857)
 *      1/8 = 0.125
 *      1/9 = 0.(1)
 *      1/10 = 0.1
 *      
 * Where 0.1(6) means $0.166666..., and has a 1-digit recurring cycle. 
 * It can be seen that 1/7 has a 6-digit recurring cycle.
 * 
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.</p>

 */


/**
 * @function problem26 Computes the answer to Project Euler Problem #26 based on the input.
 * @export
 * @param {number} n The input to problem 26.
 * @return {number} The answer to problem 26.
 */
export function problem26(limit) {

    let d_longest = 0;
    let longest = 0
    // Loop all ds below the limit and store the results of the longest recurring cycle
    for(let d = 1; d < limit; d++){
        
    }
}

export function run() {
  let keyAnswer = undefined;
  let answer = problem26(1000);
  let message = "Answer 26: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}