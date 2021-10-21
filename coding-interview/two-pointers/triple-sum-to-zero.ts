/**
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 *
 * Example 1:
 * Input: [-3, 0, 1, 2, -1, 1, -2]
 * Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
 * Explanation: There are four unique triplets whose sum is equal to zero.
 *
 * Example  2:
 * Input: [-5, 2, -1, -2, 3]
 * Output: [[-5, 2, 3], [-2, -1, 3]]
 * Explanation: There are two unique triplets whose sum is equal to zero.
 */

const search_triplets = function (input: number[]) {
  const triplets: any[] = [];

  // First, we need to sort the array
  const sortedInput = input.sort((a, b) => a - b);
  console.log(sortedInput);

  // then iterate through it taking one number at a time
  // Lets say during our iteration we are at number 'X'
  // so we need to find Y and Z, such that
  // X + Y + Z = 0
  // this translates into finding a pair whose sum is equal to -X

  for (let index = 0; index < sortedInput.length; index++) {
    let leftIndex = index + 1;
    let rightIndex = sortedInput.length - 1;

    while (leftIndex < rightIndex) {
      console.log("X=", sortedInput[index], "Y=", sortedInput[leftIndex], "Z=", sortedInput[rightIndex]);
      let sum = sortedInput[leftIndex] + sortedInput[rightIndex];
      let targetSum = -sortedInput[index];
      console.log("Y + Z =", sum);
      if (sum === targetSum) {
        console.log("TRIPLETS", sortedInput[index], sortedInput[leftIndex], sortedInput[rightIndex]);
        triplets.push([sortedInput[index], sortedInput[leftIndex], sortedInput[rightIndex]]);
        leftIndex += 1;
        rightIndex -= 1;
        console.log(sortedInput);
        // Skip duplicates
        while (leftIndex < rightIndex && sortedInput[leftIndex] == sortedInput[leftIndex - 1]) {
          leftIndex += 1;
        }
        while (leftIndex < rightIndex && sortedInput[rightIndex] == sortedInput[rightIndex + 1]) {
          rightIndex -= 1;
        }
      } else if (sum < targetSum) {
        console.log("sum", sum, ">", targetSum);
        console.log("leftIndex", leftIndex, "to", leftIndex + 1);
        leftIndex += 1;
      } else {
        console.log("sum", sum, "<", targetSum);
        console.log("rightIndex", rightIndex, "to", rightIndex - 1);
        rightIndex -= 1;
      }
      console.log("");
    }
  }

  return triplets;
};

console.log("[[-5, 2, 3], [-2, -1, 3]]", search_triplets([-5, 2, -1, -2, 3]));
console.log("[[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]", search_triplets([-3, 0, 1, 2, -1, 1, -2]));

/**
 * Sorting - O(N*logN), searching for triplets will take O(N) For every number in the input array we're
 * sarching triplets, this means whole thing will take O(N*logN+N^2), which is equivalent to O(N^2)
 *
 * Space complexity O(N)
 */
