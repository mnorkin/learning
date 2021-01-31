/**
 * Given a string and a list of words, find all the starting indices
 * of substrings in the given string that are a concatenation of
 * all the given words exactly once without any overlapping of words.
 *
 * It is given that all words are of the same length.
 *
 * Example 1:
 * Input: String="catfoxcat", Words=["cat", "fox"]
 * Output: [0, 3]
 * Explanation: The two substring containing both the words are "catfox" & "foxcat".
 *
 * Example 2:
 * Input: String="catcatfoxfox", Words=["cat", "fox"]
 * Output: [3]
 * Explanation: The only substring containing both the words is "catfox".
 */

const find_word_concatenation = function (input: string, words: string[]) {
  const result_indices: number[] = [];
  const wordFrequency: Record<string, number> = {};
  words.forEach((word) => {
    // build up the word frequency
    wordFrequency[word] = (wordFrequency[word] ?? 0) + 1;
  });

  let wordsSeen: Record<string, number> = {};
  const wordsCount = words.length;
  const wordLength = words[0].length;

  /**
   * Given the input = "catfoxcat", words = ["cat", "fox"]
   * -> input.length = 9
   * -> wordsCount = 2
   * -> wordLength = 3
   * -> k = 9 - 2 * 3 + 1 = 9 - 6 + 1 = 3 + 1 = 4 what this value represents?
   * looks like this variable represents the maximum number of words we can match
   */
  const k = input.length - wordsCount * wordLength + 1;
  for (let i = 0; i < k; i++) {
    // reset words seen
    wordsSeen = {};

    // wordsCount = 2
    for (let j = 0; j < wordsCount; j++) {
      /**
       * i = 0, j = 0, wordLength = 3
       * -> nextWordIndex = 0
       * i = 0, j = 1, wordLength = 3
       * -> nextWordIndex = 3
       * i = 0, j = 2, wordLength = 3
       * -> nextWordIndex = 6
       */
      let nextWordIndex = i + j * wordLength;
      // get the next word from the string
      /**
       * nextWordIndex = 0, nextWordIndex + wordLength = 3
       * -> word = cat
       * nextWordIndex = 3, nextWordIndex + wordLength = 6
       * -> word = fox
       * nextWordIndex = 6, nextWordIndex + wordLength = 9
       * -> word = cat
       */
      let word = input.substring(nextWordIndex, nextWordIndex + wordLength);
      /**
       * If the extracted word is not present in the word frequency map - no need to process it
       */
      if (!(word in wordFrequency)) {
        break;
      }

      // add the word to the 'wordsSeen' map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;

      // no need to process futher if the word had higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) {
        // store the index if we have found all the words
        result_indices.push(i);
      }
    }
  }

  return result_indices;
};

console.log("[0, 3]", find_word_concatenation("catfoxcat", ["cat", "fox"]));
console.log("[3]", find_word_concatenation("catcatfoxfox", ["cat", "fox"]));
