/**
 * Given an array containing 0s, 1s and 2s, sort the array in-place.
 * You should treat numbers of the array as objects, hence,
 * we can’t count 0s, 1s, and 2s to recreate the array.
 *
 * The flag of the Netherlands consists of three colors: red, white and blue;
 * and since our input array also consists of three different numbers
 * that is why it is called Dutch National Flag problem.
 *
 * Example 1:
 * Input: [1, 0, 2, 1, 0]
 * Output: [0 0 1 1 2]
 *
 * Example 2:
 * Input: [2, 2, 0, 1, 2, 0]
 * Output: [0 0 1 2 2 2]
 */

const dutch_flag_sort = function (input: number[]) {
  let low = 0;
  let high = input.length - 1;
  let i = 0;
  while (i <= high) {
    // if input is zero?
    if (input[i] === 0) {
      // swap
      [input[i], input[low]] = [input[low], input[i]];
      // move to next element
      i += 1;
      low += 1;
    } else if (input[i] === 1) {
      i += 1;
    } else {
      [input[i], input[high]] = [input[high], input[i]];
      high -= 1;
    }
  }

  return input;
};

console.log("[0 0 1 1 2]", dutch_flag_sort([1, 0, 2, 1, 0]));
console.log("[0 0 1 2 2 2]", dutch_flag_sort([2, 2, 0, 1, 2, 0]));
