/**
 * Given an array of unsorted numbers and a target number,
 * find all unique quadruplets in it,
 * whose sum is equal to the target number.
 *
 * Example 1:
 * Input: [4, 1, 2, -1, 1, -3], target=1
 * Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
 * Explanation: Both the quadruplets add up to the target.
 *
 * Example 2:
 * Input: [2, 0, -1, 1, -2, 2], target=2
 * Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
 * Explanation: Both the quadruplets add up to the target.
 *
 */

const search_quadruplets = function (input: number[], target: number) {
  let quadruplets: any = [];
  const sortedInput = input.sort((a, b) => a - b);
  let leftIndex1 = 0;
  let leftIndex2 = 1;
  let rightIndex1 = sortedInput.length - 2;
  let rightIndex2 = sortedInput.length - 1;

  while (leftIndex2 < rightIndex1) {
    const sum = sortedInput[leftIndex1] + sortedInput[leftIndex2] + sortedInput[rightIndex1] + sortedInput[rightIndex2];
    if (sum == target) {
      quadruplets.push([sortedInput[leftIndex1], sortedInput[leftIndex2], sortedInput[rightIndex1], sortedInput[rightIndex2]]);
      if (rightIndex1 < rightIndex2 - 1) {
        rightIndex2 -= 1;
      } else {
        rightIndex1 -= 1;
      }
    } else if (sum > target) {
      if (rightIndex1 < rightIndex2 - 1) {
        rightIndex2 -= 1;
      } else {
        rightIndex1 -= 1;
      }
    } else {
      if (leftIndex2 - leftIndex1 >= 2) {
        leftIndex1 += 1;
      } else {
        leftIndex2 += 1;
      }
    }
  }
  return quadruplets;
};

// console.log("[-3, -1, 1, 4], [-3, 1, 1, 2]", search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log("[-2, 0, 2, 2], [-1, 0, 1, 2]", search_quadruplets([2, 0, -1, 1, -2, 2], 2));
