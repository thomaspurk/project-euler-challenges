/**
 * @file Contains a function that answer Project Euler Problem 11
 * @author Thomas J. Purk
 * In the 20×20 grid below, four numbers along a diagonal line have been marked in red.
 *
 * The product of these numbers is 26 × 63 × 78 × 14 = 1788696.
 *
 * What is the greatest product of four adjacent numbers in the same direction
 * (up, down, left, right, or diagonally) in the 20×20 grid?
 */

import { grid20x20 } from "../data/problem11-data.js";

/**
 * @function problem11 Computes the answer to Project Euler Problem #11 based on the input.
 * @export
 * @param {number} n The input to problem 11.
 * @return {number} The answer to problem 11.
 */
export function problem11() {
  let answer = 0;
  let candidates = [];

  // table off-sets relative to current position
  // Defines a direction mode
  // [rowStart, colStart, rowEnd, colEnd]
  let modes = {
    vert: [0, 0, 3, 0],
    horz: [0, 0, 0, 3],
    diagA: [0, 0, 3, 3],
    diagB: [0, 3, 3, 0],
  };

  // Examine each mode
  for (const modeName in modes) {
    const mode = modes[modeName];
    const rowStart = mode[0];
    const colStart = mode[1];
    const rowEnd = mode[2];
    const colEnd = mode[3];

    // Index Adders
    // Starting at the current row/column index position
    // These adders move the "retreive cursor" index by the number listed
    // Starting at the top, the rowAdder moves the cursor down
    let rowAdder = [0, 0, 0, 0];
    // Starting at the current column the columnAdder moves the cursor left or right.
    let columnAdder = [0, 0, 0, 0];
    // Update the adder based on the direction mode.
    if (modeName == "vert") {
      rowAdder = [0, 1, 2, 3];
    } else if (modeName == "horz") {
      columnAdder = [0, 1, 2, 3];
    } else if (modeName == "diagA") {
      rowAdder = [0, 1, 2, 3];
      columnAdder = [0, 1, 2, 3];
    } else if (modeName == "diagB") {
      rowAdder = [0, 1, 2, 3];
      columnAdder = [0, -1, -2, -3];
    }

    // Scan ahead given the direction mode
    // Iterate over the data rows
    for (let iRow = rowStart; iRow < grid20x20.length - rowEnd; iRow++) {
      // The current data row as an array of numbers
      let arrRowColumns = grid20x20[iRow];
      // Iterate over each column position in the data row
      for (let iCol = colStart; iCol < arrRowColumns.length - colEnd; iCol++) {
        let candidate =
          grid20x20[iRow + rowAdder[0]][iCol + columnAdder[0]] *
          grid20x20[iRow + rowAdder[1]][iCol + columnAdder[1]] *
          grid20x20[iRow + rowAdder[2]][iCol + columnAdder[2]] *
          grid20x20[iRow + rowAdder[3]][iCol + columnAdder[3]];

        if (answer < candidate) {
          answer = candidate;
        }
      }
    }
  }

  return answer;
}

export function run() {
  let keyAnswer = 70600674;
  let answer = problem11();
  let message = "Answer 11: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
