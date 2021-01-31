/**
 * Given a string and a pattern, find the smallest substring in the given string which has all the
 * characters of the given pattern.
 *
 * Example 1:
 * Input: String="aabdec", Pattern="abc"
 * Output: "abdec"
 * Explanation: The smallest substring having all characters of the pattern is "abdec"
 *
 * Example 2:
 * Input: String="abdbca", Pattern="abc"
 * Output: "bca"
 * Explanation: The smallest substring having all characters of the pattern is "bca".
 *
 * Example 3:
 * Input: String="adcad", Pattern="abc"
 * Output: ""
 * Explanation: No substring in the given string has all characters of the pattern.
 */

const find_substring = function (input: string, pattern: string) {
  let smallestSubstring = "";
  let windowStart = 0;
  const patternBucket: Record<string, number> = {};
  const matchedBucket: Record<string, number> = {};
  const stringBucket = [];

  for (let index = 0; index < pattern.length; index++) {
    const element = pattern[index];
    patternBucket[element] = 1;
  }

  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    const element = input[windowEnd];
    stringBucket.push(element);

    if (element in patternBucket) {
      patternBucket[element] = Math.max(0, patternBucket[element] - 1);
    }
    if (patternBucket[element] === 0) {
      matchedBucket[element] = (matchedBucket[element] ?? 0) + 1;
    }

    // shrinking the window if we have all the chars matching
    while (Object.keys(matchedBucket).length === Object.keys(patternBucket).length) {
      // remove the first string
      let leftChar = input[windowStart];
      windowStart += 1;

      if (stringBucket.length < smallestSubstring.length || smallestSubstring.length === 0) {
        smallestSubstring = stringBucket.join("");
      }

      if (leftChar in patternBucket) {
        matchedBucket[leftChar] -= 1;
        if (matchedBucket[leftChar] === 0) {
          delete matchedBucket[leftChar];
        }
        patternBucket[leftChar] += 1;
      }
      // remove the first string
      stringBucket.shift();
    }
  }

  return smallestSubstring;
};

console.log("abdec", find_substring("aabdec", "abc"));
console.log("bca", find_substring("abdbca", "abc"));
console.log("", find_substring("adcad", "abc"));
