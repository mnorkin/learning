Since the given array is sorted, a brute-force solution could be to iterate though the array, taking one number at a time and searching for the second number though binary search.
The time complexity of this algorithm will be O(N \* logN). Can we do better than this?

We can follow the two pointers approach.
We will start with one pointer pointing to the beginning of the array and another pointing at the end.
At every step, we will see if the numbers pointed by the two pointers add up to the target sum.
If they do, we have found our pair.
Otherwise, we will do one of two things:

1. If the sum > target_sum -> decrement the end-pointer
2. If the sum < target_sum -> increment the start-pointer
