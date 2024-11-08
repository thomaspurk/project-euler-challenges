/**
 * @file Contains a function that answer Project Euler Problem 18
 * @author Thomas J. Purk
 *
 *  By starting at the top of the triangle below and moving to adjacent numbers on the row
 *  below, the maximum total from top to bottom is 23.
 *
 *     3
 *    7 4
 *   2 4 6
 *  8 5 9 3
 *
 *  That is, 3 + 7 + 4 + 9 = 23.
 *
 *  Find the maximum total from top to bottom of the triangle below:
 *
 *                         75
 *                        95 64
 *                      17 47 82
 *                    18 35 87 10
 *                   20 04 82 47 65
 *                 19 01 23 75 03 34
 *               88 02 77 73 07 63 67
 *             99 65 04 28 06 16 70 92
 *           41 41 26 56 83 40 80 70 33
 *          41 48 72 33 47 32 37 16 94 29
 *        53 71 44 65 25 43 91 52 97 51 14
 *      70 11 33 28 77 73 17 78 39 68 17 57
 *     91 71 52 38 17 14 91 43 58 50 27 29 48
 *   63 66 04 68 89 53 67 30 73 16 69 87 40 31
 *  04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 *
 *  NOTE: As there are only 16384 routes, it is possible to solve this problem
 *  by trying every route. However, Problem 67, is the same challenge with a
 *  triangle containing one-hundred rows; it cannot be solved by brute force, and
 *  requires a clever method! ;o)
 */

import { pyramid1, pyramid2, pyramid3 } from "../data/problem18_67-data.js";

/**
 * @function problem18_67 Computes the answer to Project Euler Problem #18 or #67 based on the input.
 * @export
 * @param {number} n The input to problem 18 & 67.
 * @return {number} The answer to problem 18 & 67.
 */

export function problem18_67(problemNumber) {
  let answer = 0;
  let pyramid = pyramid1;
  if (problemNumber == 18) {
    pyramid = pyramid2;
  }
  if (problemNumber == 67) {
    pyramid = pyramid3;
  }

  // Starting at the bottom, scan up the rows and replace
  // each value with the sum of the max path from that point.
  // the last value at the top will be the answer
  for (let ri = pyramid.length - 1; ri >= 0; ri--) {
    let row = pyramid[ri];

    // Examine each column in the row
    for (let ci = 0; ci < row.length; ci++) {
      if (row[ci] != 0) {
        // Track the adjacent values to the current position
        // One of these will be the next step in the max path
        let adjacentValues = [0];
        //Look in the previous row for adjacent cells
        // If they exist sum their max path values.
        if (pyramid[ri + 1] && pyramid[ri + 1][ci]) {
          adjacentValues.push(pyramid[ri + 1][ci]);
        }
        if (pyramid[ri + 1] && pyramid[ri + 1][ci + 1]) {
          adjacentValues.push(pyramid[ri + 1][ci + 1]);
        }
        // Record the data accumulated above into the model.
        row[ci] += Math.max(...adjacentValues);

        // The last iteration of this loop will contain
        answer = row[ci];
      }
    }
  }

  return answer;
}
