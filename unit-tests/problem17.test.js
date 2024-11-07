/**
 * @file Unit tests for problem17.js
 * @author Thomas J. Purk
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3+3+5+4+4=19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
 * how many letters would be used? NOTE: Do not count spaces or hyphens. For example,
 * 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen)
 * contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 */

import { it, expect, describe } from "vitest";
import { problem17 } from "../problems/problem17.js";

describe("problem17()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 5;
    const expectedResult = 19;
    // Act
    const result = problem17(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
