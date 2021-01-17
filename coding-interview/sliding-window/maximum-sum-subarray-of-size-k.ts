/**
 * Given an array of positive number and a positive number 'k', find the maximum sum
 * of any contiguous subarray of size 'k'
 *
 * Example 1:
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 *
 * Example 2:
 * Input: [2, 3, 4, 1, 5], k=2
 * Output: 7
 * Explanation: Subarray with maximum sum is [3, 4].
 */

function max_sub_array_of_size_k(k: number, arr: number[]) {
  let windowSumMax = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      // Better: windowSumMax = Math.max(windowSumMax, windowSum)
      if (windowSum > windowSumMax) {
        windowSumMax = windowSum;
      }
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return windowSumMax;
}

console.log("Example 1", max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
console.log("Example 2", max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));

/**
 * Time complexity O(N) - as we're not looping over the K over and over again
 * Space complexity O(1) - algorithm runs in a constant space
 */
