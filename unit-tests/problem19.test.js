/**
 * @file Unit tests for problem19.js
 * @author Thomas J. Purk
 *
 * You are given the following information, but you may prefer to do some research for yourself.
 * 1 Jan 1900 was a Monday.
 * Thirty days has September,
 * April, June and November.
 * All the rest have thirty-one,
 * Saving February alone,
 * Which has twenty-eight, rain or shine.
 * And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

import { it, expect, describe } from "vitest";
import { problem19 } from "../problems/problem19.js";

describe("problem19()", () => {
  it("sould return the correct answer to the sample problem", () => {
    // Arrange
    const input = 19020101;
    const expectedResult = 2;
    // Act
    const result = problem19(input);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
