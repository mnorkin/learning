function insertSort(list: number[]) {
  for (let index = 0; index < list.length; index++) {
    const currentValue = list[index];
    // take the n-1 index
    let olderIndex = index - 1;
    // while last element of the list is bigger than current value
    while (olderIndex >= 0 && list[olderIndex] > currentValue) {
      // push the element to the right to have a place for the insertion value
      list[olderIndex + 1] = list[olderIndex];
      olderIndex--;
    }
    // put the current value into the "correct" place
    list[olderIndex + 1] = currentValue;
  }
  // return the list
  return list;
}

console.log("Insert sort");
console.log("from", [4, 3, 2, 1], "to", insertSort([4, 3, 2, 1]));

/**
 * Best - O(n)
 * Worst - O(n^2)
 *
 * Space - O(n)
 */
