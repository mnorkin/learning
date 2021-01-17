In many problems, dealing with an array, we are asked to find or calculate something among all the contiguous subarrays of a given size. For example

> Given an array, find the average of all contiguous subarrays of size 'K' in it.

Real input:

```
Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
```

Here, we are asked to find the average of all contiguous subarrays of size '5' in the given array.

Let's solve this:

1. For the first 5 numbers (from index 0-4), the average is: (1 + 3 + 2 + 6 -1)/5 => 2.2
2. Next 5 numbers (from index 1-5), the average is (3 + 2 + 6 + -1 + 4)/5 => 2.8
3. From index 2-6, the average is (2 + 6 + -1 + 4 + 1)/5 => 2.4
4. ...

The final output containing the averages of all contiguous subarrays of size 5:

```
Output: [2.2, 2.8, 2.4, 3.6, 2.8]
```
