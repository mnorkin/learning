/**
 * Given a string with lowercase letters only, if you are allowed to replace no more than 'k' letters
 * with any letter, find the length of the longest substring having the same letters after replacement
 *
 * Example 1:
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
 *
 * Example 2:
 * Input: String="abbcb", k=1
 * Output: 4
 * Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
 *
 * Example 3:
 * Input: String="abccde", k=1
 * Output: 3
 * Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
 */

const length_of_longest_substring = function (input: string, k: number) {
  let windowStart = 0;
  let longestSubstring = 0;
  let maxRepeatLetterCount = 0;
  let windowSize = 0;
  let leftChar = "";
  const bucket: Record<string, number> = {};
  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    const char = input[windowEnd];
    bucket[char] = (bucket[char] ?? 0) + 1;
    // finding the letter which has the maximum number letters
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, bucket[char]);

    // Current window size is from windowStart to windowEnd, overall we have a letter
    // which is repeating 'maxRepeatLetterCount' times, this means we can have a window which
    // has one letter repeating 'maxRepeatLetterCount' times and the remaining letters
    // we should replace.
    // if the remaining letters are more than 'k', it is the time to sthrink the window as we
    // are not allowed to replace more than 'k' letters
    windowSize = windowEnd - windowStart + 1;
    if (windowSize - maxRepeatLetterCount > k) {
      leftChar = input[windowStart];
      bucket[leftChar] -= 1;
      windowStart += 1;
    }

    longestSubstring = Math.max(longestSubstring, windowSize);
  }

  return longestSubstring;
};

console.log("aabccbb, k=2", length_of_longest_substring("aabccbb", 2));
console.log("abbcb, k=1", length_of_longest_substring("abbcb", 1));
console.log("abccde, k=1", length_of_longest_substring("abccde", 1));

/**
 * Time complexity O(N)
 *
 * Space complexity O(1), finite number of letters in hashmap
 */
