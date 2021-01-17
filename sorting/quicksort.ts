/**
 * Shit is not working
 */

function quickSort(list: number[], left = 0, right = list.length) {
  const pivot = partitionHoare(list, left, right);

  if (left < pivot - 1) {
    quickSort(list, left, pivot - 1);
  }
  if (right > pivot) {
    quickSort(list, pivot, right);
  }

  return list;
}

function partitionHoare(list: number[], left = 0, right = list.length) {
  // Choose random pivot
  const pivot = Math.floor(Math.random() * (right - left + 1) + left);

  // we need to check whether the left and right values are in the correct position
  // if the left is bigger or equal to right, they need to swap
  while (left <= right) {
    // until the left side of the list is less than the pivot
    while (list[left] < list[pivot]) {
      // push left to the right side
      left++;
    }
    // until the right side is bigger than the pivot
    while (list[right] > list[pivot]) {
      // push ride to the left side
      right--;
    }
    // ir left is less or equal to the right
    if (left <= right) {
      // Don't understand what is done here
      // Why do we need this???
      [list[left], list[right]] = [list[right], list[left]];
    }
  }
  return left;
}

console.log("Quick sort");
console.log("from", [4, 3, 2, 1], "to", quickSort([4, 3, 2, 1]));
