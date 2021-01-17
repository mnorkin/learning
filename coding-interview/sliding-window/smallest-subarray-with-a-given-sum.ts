/**
 * Given an array of posivitive numbers and positive number 'S', find the length of
 * the smallest contiguous subarray whose sum is greater than or equal to S.
 * Return 0 if no such subarray exists.
 *
 * Example 1:
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
 *
 * Example 2:
 * Input: [2, 1, 5, 2, 8], S=7
 * Output: 1
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
 *
 * Example 3:
 * Input: [3, 4, 1, 1, 6], S=8
 * Output: 3
 * Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
 */

function smallest_subarray_with_given_sum(s: number, arr: number[]) {
  let result = Infinity;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    // shrink the window as small as possible until the windowSum is smaller than s
    while (windowSum >= s) {
      result = Math.min(result, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (result === Infinity) {
    return 0;
  }

  return result;
}

console.log(
  "Example 1, should be 2",
  smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])
);

console.log(
  "Example 2, should be 1",
  smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])
);

console.log(
  "Example 3, should be 3",
  smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])
);

/**
 * 1. First, we will add-up elements from the beginning of the array until
 * their sum becomes greater than or equal to 'S'.
 * 2. These elements will constitute our sliding window. We are asked to find the smallest such
 * window having a sum greater than or equal to 'S'. We will remember the length of this windows
 * as the smallest window so far.
 * 3. After this, we will keep adding one element in the sliding window in stepwise fashion.
 * 4. In each step, we will also try to shrink the window from the beginning.
 * We will shrink the window until the window's sum is smaller than 'S' again. This is needed as
 * we intend to find the smallest window. This shrinking will also happen in multiple steps;
 * in each step, we will do two things:
 *  - Check if the current window length is smallest so far, and if so, remember its length
 *  - Subtract the first element of the window from the running sum to shrink the sliding window.
 */

/**
 * Time complexity of the algorithm will be O(N).
 * The outer `for` loop runs for all elements, and the inner `while` loop processes each element only once;
 * the time complexity of the algorithm will be O(N+N), while equivalent to O(N)
 *
 * Space complexity O(1) - the algorithm runs in constant space
 */
