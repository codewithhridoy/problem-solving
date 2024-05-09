# [Maximize Happiness of Selected Children](https://leetcode.com/problems/maximize-happiness-of-selected-children/description/)

# Intuition

To maximize the sum of happiness, we aim to select the elements with the highest happiness values. By sorting the array in descending order, we can easily identify the top happiness values to select.

# Approach

1. Sort the happiness array in descending order.
2. Use the slice method to extract the first k elements, representing the top k happiness values.
3. Utilize the reduce method to calculate the total happiness sum while considering the indices of the selected elements.
4. Within the reducer function, compute the difference between the current happiness value and its index. Add this difference to the total happiness if positive; otherwise, add 0.
5. Return the total happiness sum as the result.

# Complexity

- Time complexity: Sorting the array takes O(nlogn) time, where n is the number of elements in the happiness array. The extraction of the first k elements takes O(k) time. The reduce operation performs the calculation in linear time relative to the number of selected elements, which is k. Therefore, the overall time complexity is O(nlogn+k).

- Space complexity: The space complexity is O(k) due to the slicing operation, which creates a new array containing the first k elements of the sorted array. The reduce operation does not increase the space complexity significantly. Thus, the overall space complexity is O(k).

# Code

```
/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */

const maximumHappinessSum = function (happiness, k) {
    // Sort the happiness array in descending order
    happiness.sort((a, b) => b - a);

    // Use reduce to calculate the total happiness sum
    return happiness.slice(0, k).reduce((totalHappiness, currentHappiness, index) => {
        // Calculate the difference between current happiness and index
        // Add the difference to the total happiness if positive, else add 0
        return totalHappiness + Math.max(currentHappiness - index, 0);
    }, 0);
};
```

// Alternate

# Intuition

To maximize the sum of happiness, we want to select the elements with the highest happiness values. Sorting the array in descending order allows us to easily select the first k elements with the highest happiness values.

# Approach

1. Sort the happiness array in descending order.
2. Initialize a counter for selected happiness elements (happinessCount) and an accumulator for the total happiness sum (totalHappiness).
3. Iterate through the first k elements of the sorted array.
4. For each element, calculate the difference between its happiness value and the counter.
5. If the difference is positive, add it to the total happiness; otherwise, add 0.
6. Increment the counter for selected elements.
7. Return the total happiness sum.

# Complexity

- Time complexity: Sorting the array takes O(nlogn) time, where n is the number of elements in the happiness array. The iteration through the first k elements takes O(k) time. Therefore, the overall time complexity is O(nlogn+k).

- Space complexity: The space complexity is O(1) since we are not using any additional data structures that scale with the input size.

# Code

```
/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */

const maximumHappinessSum = function (happiness, k) {
    // Sort the happiness array in descending order
    happiness.sort((a, b) => b - a);

    let happinessCount = 0; // Counter for selected happiness elements
    let totalHappiness = 0; // Accumulator for the total happiness sum

    // Iterate through the first k elements to select
    for (let i = 0; i < k; i++) {
        // Calculate the difference between current happiness and counter
        // Add the difference to the total happiness if positive, else add 0
        totalHappiness += happiness[i] - happinessCount > 0 ? happiness[i] - happinessCount : 0;
        happinessCount++; // Increment the counter for selected elements
    }

    return totalHappiness; // Return the maximum sum of happiness
};
```
