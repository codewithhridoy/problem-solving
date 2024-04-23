# [Two Sum](https://leetcode.com/problems/two-sum/)

### Intuition

The problem requires finding two numbers in an array that sum up to a given target. A common approach to this problem is to use a hash table to store the indices of numbers as we iterate through the array. This way, we can quickly look up whether the complement of the current number exists in the hash table.
### Approach

We'll iterate through the array once. For each number, we'll calculate its complement (the difference between the target and the current number). If the complement exists in the hash table, we've found the pair that sums up to the target. If not, we'll store the current number's index in the hash table.
### Complexity
**Time complexity:** O(n), where n is the number of elements in the input array. We iterate through the array once.

**Space complexity:** O(n), where n is the number of elements in the input array. We use a hash table to store indices, which can have up to n entries in the worst case.

