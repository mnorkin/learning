/**
 * Brute force algorithm will calculate the sum of every 5-element contiguous subarray
 * of the given array and divide the sum by '5' to find the average
 */

/**
 * Brute force version
 *
 * Time complexity: since for every element of the input array, we are calculating
 * the sum of its next 'K' elements, the time complexity will be O(N*K).
 */
function find_averages_of_subarrays_brute_force(K: number, arr: number[]) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K);
  }
  return result;
}

/**
 * The efficient way to solve this problem would be to visualize each contiguous subarray
 * as a sliding window of '5' elements. This means that we will slide the windows by
 * one element when we move on to the next sybarray.
 * To reuse the 'sum' from the previous subarray, we will subtract the element going out
 * of the window and add the element now being included in the sliding window.
 * This will save us from going through the whole subarray to find the 'sum' and,
 * as a result, the algorithm complexity will reduce to O(N)
 */

function find_averages_of_subarrays(K: number, arr: number[]) {
  const result = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    // slide the window
    // we don't need to slide if we've not hit the required window size of 'K'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // sub the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}
