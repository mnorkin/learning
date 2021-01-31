/**
 * String anagrams (hard)
 *
 * Given a string and a pattern, find all the anagrams of the pattern in the given stirng.
 *
 * Anagram is actually a permutation of a string.
 *
 * Write a function to return a list of starting indices of the anagrams of the pattern in the given string
 *
 * Example 1:
 * Input: String="ppqp", Pattern="pq"
 * Output: [1, 2]
 * Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
 *
 * Example 2:
 * Input: String="abbcabc", Pattern="abc"
 * Output: [2, 3, 4]
 * Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
 *
 */

const find_string_anagrams = function (input: string, pattern: string) {
  const result_indexes: number[] = [];
  let matched = 0;
  let windowStart = 0;
  const patternFrequencyBucket: Record<string, number> = {};

  for (let index = 0; index < pattern.length; index++) {
    const element = pattern[index];
    patternFrequencyBucket[element] =
      (patternFrequencyBucket[element] ?? 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    const element = input[windowEnd];
    if (element in patternFrequencyBucket) {
      patternFrequencyBucket[element] -= 1;
    }
    if (patternFrequencyBucket[element] === 0) {
      matched += 1;
    }

    if (matched === Object.keys(patternFrequencyBucket).length) {
      result_indexes.push(windowStart);
    }

    if (windowEnd >= pattern.length - 1) {
      let leftChar = input[windowStart];
      windowStart += 1;
      if (leftChar in patternFrequencyBucket) {
        if (patternFrequencyBucket[leftChar] == 0) {
          matched -= 1;
        }
      }
      patternFrequencyBucket[leftChar] += 1;
    }
  }

  return result_indexes;
};

console.log("[1, 2]", find_string_anagrams("ppqp", "pq"));
console.log("[2, 3, 4]", find_string_anagrams("abbcabc", "abc"));
