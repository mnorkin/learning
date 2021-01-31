/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than 'k' 0s with 1s,
 * find the longest contiguous subarray having all 1s.
 *
 * Example 1:
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 * Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 *
 * Example 2:
 * Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
 * Output: 9
 * Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
 */

const length_of_longest_subarray = function (input: number[], k: number) {
  let longestSubarray = 0;
  let windowStart = 0;
  let windowSize = 0;
  let maxRepeatNumberCount = 0;
  let leftNumber = 0;
  const bucket: Record<number, number> = {};
  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    const number = input[windowEnd];
    bucket[number] = (bucket[number] ?? 0) + 1;
    maxRepeatNumberCount = Math.max(maxRepeatNumberCount, bucket[number]);

    windowSize = windowEnd - windowStart + 1;
    if (windowSize - maxRepeatNumberCount > k) {
      leftNumber = input[windowStart];
      bucket[leftNumber] -= 1;
      windowStart += 1;
    }

    longestSubarray = Math.max(longestSubarray, windowEnd - windowStart + 1);
  }

  return longestSubarray;
};

console.log(
  "6",
  length_of_longest_subarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
);
console.log(
  "9",
  length_of_longest_subarray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);
