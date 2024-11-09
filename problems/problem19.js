/**
 * @file Contains a function that answer Project Euler Problem 19
 * @author Thomas J. Purk
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

/**
 * @function problem19
 *
 * @export
 * @param {number} [end=20001231] The end of the time span to test
 * @param {number} [start=19010101] The start of the time span to test
 */
export function problem19(end = 20001231, start = 19010101) {
  let answer = 0;
  let currentDate = new Date(
    start.toString().substring(0, 4),
    start.toString().substring(4, 6) - 1,
    start.toString().substring(6)
  );
  let endDate = new Date(
    end.toString().substring(0, 4),
    end.toString().substring(4, 6) - 1,
    end.toString().substring(6)
  );
  // Test for leap year
  while (currentDate <= endDate) {
    if (currentDate.getDate() == 1 && currentDate.getDay() == 0) {
      answer++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return answer;
}
