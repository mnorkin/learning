/**
 * Given an array, find the length of the smallest subarray in it which
 * when sorted will sort the whole array.
 *
 * Example 1:
 * Input: [1, 2, 5, 3, 7, 10, 9, 12]
 * Output: 5
 * Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
 *
 * Example 2:
 * Input: [1, 3, 2, 0, -1, 7, 10]
 * Output: 5
 * Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
 *
 * Example 3:
 * Input: [1, 2, 3]
 * Output: 0
 * Explanation: The array is already sorted
 *
 * Example 4:
 * Input: [3, 2, 1]
 * Output: 3
 * Explanation: The whole array needs to be sorted.
 */

const shortest_window_sort = function (input: number[]) {
  let leftIndex = 0;
  let rightIndex = input.length - 1;
  // Find the first number out of sorting order from the beginning
  while (leftIndex < input.length - 1 && input[leftIndex] <= input[leftIndex + 1]) {
    leftIndex += 1;
  }

  if (leftIndex === input.length - 1) {
    return 0;
  }

  // Find the first number out of sorting order from the end
  while (rightIndex > 0 && input[rightIndex] > input[rightIndex - 1]) {
    rightIndex -= 1;
  }

  // Find the maximum and minimum of found subarray
  let subarrayMax = -Infinity;
  let subarrayMin = Infinity;
  for (let j = leftIndex; j < rightIndex; j++) {
    subarrayMax = Math.max(subarrayMax, input[j]);
    subarrayMin = Math.min(subarrayMin, input[j]);
  }

  // Extend the subarray to include any number which is bigger than the minimum of the subarray
  while (leftIndex > 0 && input[leftIndex - 1] > subarrayMin) {
    leftIndex -= 1;
  }
  while (rightIndex < input.length - 1 && input[rightIndex + 1] < subarrayMax) {
    rightIndex += 1;
  }
  return rightIndex - leftIndex + 1;
};

console.log("5", shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log("5", shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log("3", shortest_window_sort([3, 2, 1]));
console.log("0", shortest_window_sort([1, 2, 3]));
