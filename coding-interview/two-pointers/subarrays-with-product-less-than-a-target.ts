/**
 * Given an array with positive numbers and a target number,
 * find all of its contiguous subarrays whose product is less
 * than the target number.
 *
 * Example 1:
 * Input: [2, 5, 3, 10], target=30
 * Output: [2], [5], [2, 5], [3], [5, 3], [10]
 * Explanation: There are six contiguous subarrays whose product is less than the target.
 *
 * Example 2:
 * Input: [8, 2, 6, 5], target=50
 * Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
 * Explanation: There are seven contiguous subarrays whose product is less than the target.
 */

const find_subarrays = function (input: number[], target: number) {
  const result: any = [];

  for (let currentIndex = 0; currentIndex < input.length; currentIndex++) {
    let rightIndex = Math.min(currentIndex + 1, input.length);
    // check if current number of less than target
    if (input[currentIndex] < target) {
      result.push([input[currentIndex]]);
    }
    let rightProduct = input[currentIndex] * input[rightIndex];
    if (rightProduct < target) {
      result.push([input[currentIndex], input[rightIndex]]);
    }
  }

  return result;
};

// console.log("[ [ 2 ], [ 5 ], [ 2, 5 ], [ 3 ], [ 5, 3 ], [ 10 ] ]", find_subarrays([2, 5, 3, 10], 30));
console.log("[ [ 8 ], [ 2 ], [ 8, 2 ], [ 6 ], [ 2, 6 ], [ 5 ], [ 6, 5 ] ]", find_subarrays([8, 2, 6, 5], 50));
