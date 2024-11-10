/**
 * @file Unit tests for problem22.js
 * @author Thomas J. Purk
 *
 * Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over
 * five-thousand first names, begin by sorting it into alphabetical order. Then working out the
 * alphabetical value for each name, multiply this value by its alphabetical position in the list
 * to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN,
 * which is worth 3+15+12+9+14=53, is the 938th name in the list. So, COLIN would obtain a score of 938×53=49714.
 *
 * What is the total of all the name scores in the file?
 */

import { it, expect, describe } from "vitest";
import { problem22 } from "../problems/problem22.js";

describe("problem22()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 1;
    const expectedResult = 49;
    // Act
    const result = problem22(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
