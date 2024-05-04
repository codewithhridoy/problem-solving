# [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/description/)

# Intuition

To solve this problem, we want to efficiently distribute the people onto boats while ensuring that the weight limit of each boat is not exceeded. Sorting the people array allows us to pair the lightest person with the heaviest person iteratively, maximizing the number of boats used.

# Approach

1. Sort the people array in ascending order.
2. Initialize two pointers, left and right, pointing to the lightest and heaviest persons respectively.
3. Initialize a variable boats to count the number of boats used.
4. While left is less than or equal to right:
   - If the sum of the weights of the persons pointed by left and right is within the limit, increment left to move to the next lightest person.
   - Decrement right to move to the next heaviest person.
   - Increment boats to count the boat used for this iteration.
5. Return the total number of boats used.

# Complexity

- Time complexity: Sorting the people array takes O(n log n) time, where n is the number of people. The while loop runs in O(n) time as it iterates through the array once. So, the overall time complexity is O(n log n).

- Space complexity: The space complexity is O(1) because we only use a constant amount of extra space for variables regardless of the input size.

# Code

```
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
    // Sort the people array in ascending order
    people.sort((a, b) => a - b);

    let left = 0; // Pointer for the lightest person
    let right = people.length - 1; // Pointer for the heaviest person
    let boats = 0; // Counter for the number of boats

    while (left <= right) {
        // If the sum of the lightest and heaviest person is within the limit, both can go on the same boat
        if (people[left] + people[right] <= limit) {
            left++; // Move to the next lightest person
        }
        right--; // Move to the next heaviest person
        boats++; // Increment boat count for each iteration, as at least one person is on the boat
    }

    return boats;
};
```
