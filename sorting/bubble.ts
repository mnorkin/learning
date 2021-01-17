/**
 * Best - O(n), array is already sorted
 * Worst - O(n^2), for every item in the arary, we have to loop over the entire array
 *
 * Worst space complexity would be O(n)
 */

function bubbleSort(list: number[]) {
  let temp = 0;
  let needToRepeat = true;
  while (needToRepeat) {
    needToRepeat = false;
    for (let index = 0; index < list.length; index++) {
      // If current element is bigger than the next element
      if (list[index] > list[index + 1]) {
        // swap them
        temp = list[index];
        list[index] = list[index + 1];
        list[index + 1] = temp;
        needToRepeat = true;
      }
    }
  }

  return list;
}

console.log("Bubble sort");
console.log("from", [4, 3, 2, 1], "to", bubbleSort([4, 3, 2, 1]));
