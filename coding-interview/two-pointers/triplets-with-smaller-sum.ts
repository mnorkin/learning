/**
 * Given an array arr of unsorted numbers and a target sum,
 * count all triplets in it such that
 *
 * arr[i] + arr[j] + arr[k] < target
 *
 * where i, j, and k are three different indices.
 *
 * Write a function to return the count of such triplets.
 *
 * Example 1:
 * Input: [-1, 0, 2, 3], target=3
 * Output: 2
 * Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
 *
 * Example 2:
 * Input: [-1, 4, 2, 1, 3], target=5
 * Output: 4
 * Explanation: There are four triplets whose sum is less than the target:
 *  [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
 */

const triplet_with_smaller_sum = function (input: number[], target: number) {
  const sortedInput = input.sort();
  let count = 0;

  console.log(sortedInput);

  for (let currentIndex = 0; currentIndex < sortedInput.length; currentIndex++) {
    let leftIndex = currentIndex + 1;
    let rightIndex = sortedInput.length - 1;

    while (leftIndex < rightIndex) {
      let sum = sortedInput[currentIndex] + sortedInput[leftIndex] + sortedInput[rightIndex];
      console.log("TRIPLET [", sortedInput[currentIndex], sortedInput[leftIndex], sortedInput[rightIndex], "]");

      if (target > sum) {
        // since sortedInput[rightIndex] >= sortedInput[leftIndex], therefore we can replace
        // sortedInput[rightIndex] by any number between rightIndex and leftIndex
        // to get a sum less than the target sum

        /**
         * Given: [ -1, 1, 2, 3, 4 ]
         *
         * Triplet is [ -1 1 4 ] < 5
         * Sum with less than 5 will also be numbers, smaller than rightIndex:
         * 1. [ -1 1 3 ]
         * 2. [ -1 1 2 ]
         *
         * This is why with one match we can find 3 matches in one go
         *
         * AMAZING
         */
        count += rightIndex - leftIndex;
        console.log("RIGHTINDEX", rightIndex, "LEFTINDEX", leftIndex, "COUNT", count);
        leftIndex += 1;
      } else {
        // need a pair with smaller sum
        rightIndex -= 1;
      }
    }
  }
  console.log("");

  return count;
};

// console.log("2", triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log("4", triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
