/**
 * Permutation in a string (hard)
 *
 * Given a string and a pattern, find out if the string contains any permutation of the pattern
 *
 * Permutation is defined as the re-arranging of the characters of the string.
 * For example "abc" has the following fix permutations:
 *
 * 1. abc
 * 2. acb
 * 3. bac
 * 4. bca
 * 5. cab
 * 6. cba
 *
 * If the string has 'n' distinct characters, it will have n! permutations.
 *
 * Example 1:
 * Input: String="oidbcaf", Pattern="abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 *
 * Example 2:
 * Input: String="odicf", Pattern="dc"
 * Output: false
 * Explanation: No permutation of the pattern is present in the given string as a substring.
 *
 * Example 3:
 * Input: String="bcdxabcdy", Pattern="bcdyabcdx"
 * Output: true
 * Explanation: Both the string and the pattern are a permutation of each other.
 *
 * Example 4:
 * Input: String="aaacb", Pattern="abc"
 * Output: true
 * Explanation: The string contains "acb" which is a permutation of the given pattern.
 */

const find_permutation = function (input: string, pattern: string) {
  // My solution
  // let k = pattern.length;
  // const bucket: string[] = [];
  // for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
  //   bucket.push(input[windowEnd]);
  //   if (bucket.length == k) {
  //     let copyOfPattern: string[] = pattern.split("");
  //     for (let index = 0; index < k; index++) {
  //       const element = bucket[index];
  //       if (copyOfPattern.includes(element)) {
  //         copyOfPattern = copyOfPattern.filter((item) => item !== element);
  //       }
  //     }
  //     if (copyOfPattern.length == 0) {
  //       return true;
  //     }
  //     bucket.shift();
  //   }
  // }
  // return false;

  // More efficient solution

  let windowStart = 0;
  let matched = 0;
  let bucket: Record<string, number> = {};

  for (let index = 0; index < pattern.length; index++) {
    bucket[pattern[index]] = (bucket[pattern[index]] ?? 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    const element = input[windowEnd];
    if (element in bucket) {
      bucket[element] -= 1;
    }
    if (bucket[element] == 0) {
      matched += 1;
    }

    if (matched == Object.keys(bucket).length) {
      return true;
    }

    // shrinking the window
    if (windowEnd >= pattern.length - 1) {
      let leftChar = input[windowStart];
      windowStart += 1;
      if (leftChar in bucket) {
        if (bucket[leftChar] == 0) {
          matched -= 1;
        }
        bucket[leftChar] += 1;
      }
    }
  }

  return false;
};

console.log("true", find_permutation("oidbcaf", "abc"));
console.log("false", find_permutation("odicf", "dc"));
console.log("true", find_permutation("bcdxabcdy", "bcdyabcdx"));
console.log("true", find_permutation("aaacb", "abc"));
