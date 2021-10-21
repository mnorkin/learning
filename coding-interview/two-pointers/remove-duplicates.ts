/**
 * Given an array of sorted numbers, remove all duplicates from it.
 * You should not use any extra space;
 * after removing the duplicates in-place return the length of the subarray that
 * has no duplicate in it.
 *
 * Example 1:
 * Input: [2, 3, 3, 3, 6, 9, 9]
 * Output: 4
 * Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
 *
 * Example 2:
 * Input: [2, 2, 2, 11]
 * Output: 2
 * Explanation: The first two elements after removing the duplicates will be [2, 11].
 */

const remove_duplicates = function (input: number[]) {
  let left = 0;
  let right = 1;
  let length = 1; // put first number to the bucket

  while (right < input.length) {
    if (input[left] != input[right]) {
      length += 1;
      left = right;
      right += 1;
    } else {
      right += 1;
    }
  }
  return length;
};

console.log("4", remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log("2", remove_duplicates([2, 2, 2, 11]));

/**
 * Time complexity O(N)
 *
 * Space complexity O(1)
 */
