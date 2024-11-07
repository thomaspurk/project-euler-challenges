/**
 * @file Unit tests for problem14.js
 * @author Thomas J. Purk
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n→n/2 (n is even)
 * n→3n+1 (n is odd)
 * Using the rule above and starting with 13, we generate the following sequence:
 * 13→40→20→10→5→16→8→4→2→1.
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * * Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * Which starting number, under one million, produces the longest chain?
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

import { it, expect, describe } from "vitest";
import { problem14 } from "../problems/problem14.js";

describe("problem14()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 13;
    const expectedResult = [13, 40, 20, 10, 5, 16, 8, 4, 2, 1];
    // Act
    const result = problem14(input);
    // Assert
    expect(result[13]).toEqual(expect.arrayContaining(expectedResult));
  });
});
