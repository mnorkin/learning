function mergeSort(list: number[]): number[] {
  if (list.length === 1) {
    return list;
  }
  const middle = Math.floor(list.length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  console.log("input", left, right);
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  const totalResult = result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));

  console.log("total result", totalResult);

  return totalResult;
}

console.log("Merge sort");
console.log("from", [4, 3, 2, 1], "to", mergeSort([4, 3, 2, 1]));

/**
 * Each partitioning takes O(n) operations
 * Each partitioning splits the array O(log(n))
 * Resulting in O(nlog(n))
 *
 * Space 3 varaibles for each element in the array
 */
