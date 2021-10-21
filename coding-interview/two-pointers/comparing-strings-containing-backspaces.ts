/**
 * Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.
 *
 * Example 1:
 * Input: str1="xy#z", str2="xzz#"
 * Output: true
 * Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
 *
 * Example 2:
 * Input: str1="xy#z", str2="xyz#"
 * Output: false
 * Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
 *
 * Example 3:
 * Input: str1="xp#", str2="xyz##"
 * Output: true
 * Explanation: After applying backspaces the strings become "x" and "x" respectively.
 * In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
 *
 * Example 4:
 * Input: str1="xywrrmp", str2="xywrrmu#p"
 * Output: true
 * Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
 */

const backspace_compare = function (input1: string, input2: string) {
  let index1 = input1.length - 1;
  let index2 = input2.length - 1;

  while (index1 > 0 && index2 > 0) {
    let backSpaceCount1 = 0;
    let backSpaceCount2 = 0;
    // Check if the next char is #, as this means that the current char should be skipped
    while (input1[index1] == "#") {
      backSpaceCount1 += 1;
      index1 -= 1;
    }
    while (input2[index2] == "#") {
      backSpaceCount2 += 1;
      index2 -= 1;
    }
    index2 -= backSpaceCount2;
    index1 -= backSpaceCount1;

    if (input1[index1] != input2[index2]) {
      return false;
    }

    // this means chars are equal and we can continue to the next char
    index1 -= 1;
    index2 -= 1;
  }
  return true;
};

console.log("true", backspace_compare("xy#z", "xzz#"));
console.log("false", backspace_compare("xy#z", "xyz#"));
console.log("true", backspace_compare("xp#", "xyz##"));
console.log("true", backspace_compare("xywrrmp", "xywrrmu#p"));
