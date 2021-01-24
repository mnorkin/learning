/**
 * Given an array of characters where each character represents a fuite tree,
 * you are given two baskets, and your goal is to put maximum number of fruits in each basket.
 * The only restriction is that each basket can have only one type of fruite.
 *
 * You can start with any tree, but you can't skip a tree once you have started.
 * You will pick one fruit from each tree until you cannot, i.e. you will stop when you have to pick from a third tree type.
 *
 * Write a function to return the maximum number of fruits in both the baskets.
 *
 * Example 1:
 * Input: Fruit=['A', 'B', 'C', 'A', 'C']
 * Output: 3
 * Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
 *
 * Example 2:
 * Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
 * Output: 5
 * Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
 * This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
 */

const fruits_into_baskets = function (fruits: string[]) {
  let windowStart = 0;
  let numberOfFruits = 0;
  let basket: Record<string, number> = {};
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const fruit = fruits[windowEnd];
    basket[fruit] = (basket[fruit] ?? 0) + 1;
    while (Object.keys(basket).length > 2) {
      let leftFruit = fruits[windowStart];
      basket[leftFruit] -= 1;
      if (basket[leftFruit] === 0) {
        delete basket[leftFruit];
      }
      // shrink the window
      windowStart += 1;
    }
    // Count the fruits in the basket
    numberOfFruits = Math.max(numberOfFruits, windowEnd - windowStart + 1);
  }

  return numberOfFruits;
};

console.log(
  "Fuits into baskets 1",
  fruits_into_baskets(["A", "B", "C", "A", "C"])
);

console.log(
  "Fuits into baskets 2",
  fruits_into_baskets(["A", "B", "C", "B", "B", "C"])
);

/**
 * Time complexity O(N)
 *
 * Space complexity O(1), because maximum only 3 types of fruits can be stored in the basket
 */
