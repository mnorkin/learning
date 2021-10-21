/**
 * Given an array of unsorted numbers and a target number,
 * find a triplet in the array whose sum is as close to the target number as possible,
 * return the sum of the triplet.
 *
 * If there are more than one such triplet, return the sum of the triplet with the smallest sum.
 *
 * Example 1:
 * Input: [-2, 0, 1, 2], target=2
 * Output: 1
 * Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
 *
 * Example 2:
 * Input: [-3, -1, 1, 2], target=1
 * Output: 0
 * Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
 *
 * Example 3:
 * Input: [1, 0, 1, 1], target=100
 * Output: 3
 * Explanation: The triplet [1, 1, 1] has the closest sum to the target.
 */

const triplet_sum_close_to_target = function (input: number[], target: number) {
  // TODO: Write your code here

  let smallestSum = -Infinity;
  let smallestDiff = Infinity;
  const sortedInput = input.sort((a, b) => a - b);
  console.log(sortedInput, target);

  for (let currentIndex = 0; currentIndex < sortedInput.length; currentIndex++) {
    let leftIndex = currentIndex + 1;
    let rightIndex = sortedInput.length - 1;

    while (leftIndex < rightIndex) {
      let sum = sortedInput[currentIndex] + sortedInput[leftIndex] + sortedInput[rightIndex];
      let diff = Math.abs(target - sum);
      console.log("SUM", sum);
      // closestSum < sum < target
      if (diff < smallestDiff && smallestSum < sum) {
        console.log("DIFF", diff, "SMALLESTDIFF", smallestDiff, "SMALLESTSUM", smallestSum);
        // Point to the sum
        smallestSum = sum;
        smallestDiff = diff;
      }

      if (sum > target) {
        rightIndex -= 1;
      } else {
        leftIndex += 1;
      }
    }
  }
  console.log("");
  return smallestSum;
};

console.log("1", triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log("0", triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log("3", triplet_sum_close_to_target([1, 0, 1, 1], 100));
