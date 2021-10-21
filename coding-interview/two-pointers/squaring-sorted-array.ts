/**
 * Given a sorted array, create a new array containing squares of all the
 * numbers of the input array in the sorted order.
 *
 * Example 1:
 *
 * Input: [-2, -1, 0, 2, 3]
 * Output: [0, 1, 4, 4, 9]
 *
 * Example 2:
 * Input: [-3, -1, 0, 1, 2]
 * Output: [0, 1, 1, 4, 9]
 */

const make_squares = function (input: number[]) {
  let squares: number[] = [];
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    let leftNumber = input[left] * input[left];
    let rightNumber = input[right] * input[right];

    if (leftNumber > rightNumber) {
      squares = [leftNumber, ...squares];
      left += 1;
    } else {
      squares = [rightNumber, ...squares];
      right -= 1;
    }
  }

  return squares;
};

console.log("[0, 1, 4, 4, 9]", make_squares([-2, -1, 0, 2, 3]));
console.log("[0, 1, 1, 4, 9]", make_squares([-3, -1, 0, 1, 2]));

/**
 * Time - O(N)
 * Space - O(N), output array
 */
