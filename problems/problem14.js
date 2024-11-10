/**
 * @file Contains a function that answer Project Euler Problem 14
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

/**
 * @function problem14 Computes the answer to Project Euler Problem #14 based on the input.
 * @export
 * @param {number} startingNumber The input to problem 14.
 * @return {object} Data about the answer to problem 14.
 */
export function problem14(startingNumber) {
  let trackResults = { longestStartingNumber: 0, longestSequenceLength: 0 };
  // Investigate Starting Numbers
  // Step downward
  for (let sn = startingNumber; sn > 0; sn--) {
    let sequenceNumber = sn;
    let sequence = [sequenceNumber];
    while (sequenceNumber > 1) {
      if (sequenceNumber % 2 == 0) {
        sequenceNumber = sequenceNumber / 2;
      } else {
        sequenceNumber = 3 * sequenceNumber + 1;
      }
      sequence.push(sequenceNumber);
    }
    // Record the sequence for this starting number
    trackResults[sn] = sequence;
    if (trackResults.longestSequenceLength < sequence.length) {
      trackResults.longestSequenceLength = sequence.length;
      trackResults.longestStartingNumber = sn;
    }
  }

  return trackResults;
}

export function run() {
  let keyAnswer = 837799;
  let answer = problem14(1000000).longestStartingNumber;
  let message = "Answer 14: " + answer;
  if (keyAnswer) {
    message += keyAnswer == answer ? " Correct" : " Incorrect";
  }
  console.log(message);
}
