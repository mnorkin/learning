/**
 * Given a string, find the length of the longest substring in it with no more than K distinct characters
 *
 * Example 1:
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 *
 * Example 2:
 * Input: String="araaci", K=1
 * Output: 2
 * Explanation: The longest substring with no more than '1' distinct characters is "aa".
 *
 * Example 3:
 * Input: String="cbbebi", K=3
 * Output: 5
 * Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 */

function longest_substring_with_k_distinct(str: string, k: number) {
  let windowStart = 0;
  let longestWindow = 0;
  const hashmap: Record<string, number> = {};
  const arr = str.split("");
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    hashmap[arr[windowEnd]] = (hashmap[arr[windowEnd]] ?? 0) + 1;
    if (Object.keys(hashmap).length >= k - 1) {
      windowStart += 1; // slide the window ahead
      longestWindow = Math.min(longestWindow, windowEnd - windowStart + 1);
      while (Object.keys(hashmap).length >= k - 1)
    }
  }
}

/**
 * Solution
 *
 * This problem follows the sliding window pattern, and we can use a similar dynamic sliding window strategy
 * as discussed in smallest subarray with a given sum. We can use a hashmap to remember the frequency of each character
 * we have processed.
 *
 * 1. First, we will insert characters from the beginning of the string until we have 'K' distinct characters in the hashmap
 * 2. These characters will constitute our sliding window. We are asked to find the longest such window having no more than
 * 'K' distinct characters. We will remember the length of this windows as the longest window so far.
 * 3. After this, we will keep adding one character in the sliding window in a stepwise fashion
 * 4. In each step, we will try to shrink the window from the beginning if the count of distinct characters in the hashmap
 * is larger than 'K'. We will shrink the window from the beginning if the count of distinct ()
 */
