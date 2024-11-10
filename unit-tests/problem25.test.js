/**
 * @file Unit tests for problem25.js
 * @author Thomas J. Purk
 *
 * The Fibonacci sequence is defined by the recurrence relation:
 * Fn = F{n - 1} + F{n - 2}, where F1 = 1 and F2 = 1.
 *
 * Hence the first 12 terms will be:
 *
 * F1 = 1
 * F2 = 1
 * F3 = 2
 * F4 = 3
 * F5 = 5
 * F6 = 8
 * F7 = 13
 * F8 = 21
 * F9 = 34
 * F10 = 55
 * F11 = 89
 * F12 = 144
 *
 * The 12th term, F12, is the first term to contain three digits.
 * What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */

import { it, expect, describe } from "vitest";
import { problem25 } from "../problems/problem25.js";

describe("problem25()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 3;
    const expectedResult = 12;
    // Act
    const result = problem25(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
