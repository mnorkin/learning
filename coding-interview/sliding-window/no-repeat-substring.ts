/**
 * Given a string, find the length of the longest substring, which has no repeating characters
 *
 * Example 1:
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring without any repeating characters is "abc".
 *
 * Example 2:
 * Input: String="abbbb"
 * Output: 2
 * Explanation: The longest substring without any repeating characters is "ab".
 *
 * Example 3:
 * Input: String="abccde"
 * Output: 3
 * Explanation: Longest substrings without any repeating characters are "abc" & "cde".
 */

const non_repeat_substring = function (input: string) {
  let windowStart = 0;
  let biggestLength = 0;
  let bucket: Record<string, number> = {};
  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    const char = input[windowEnd];
    if (char in bucket) {
      // My solution:
      // while (windowStart < bucket[char] + 1) {
      //   delete bucket[input[windowStart]];
      //   windowStart += 1;
      // }

      // More efficient solution :mindblown:
      windowStart = Math.max(windowStart, bucket[char] + 1);
    }
    bucket[char] = windowEnd;
    biggestLength = Math.max(biggestLength, windowEnd - windowStart + 1);
  }
  return biggestLength;
};

console.log("aabccbb", non_repeat_substring("aabccbb"));
console.log("abbbb", non_repeat_substring("abbbb"));
console.log("abccde", non_repeat_substring("abccde"));

/**
 * Time complexity O(N)
 *
 * Space complexity O(K), where K is the number of distinct characters in the input string.
 * Finite number of chars, so O(1) :)
 */
