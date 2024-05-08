# [Relative Ranks](https://leetcode.com/problems/relative-ranks/description)

# Intuition

We start by associating each score with its original index in the input array. Then, we sort the scores in descending order while keeping track of their original indices. This allows us to easily assign ranks to each athlete. We assign the first three ranks as "Gold Medal", "Silver Medal", and "Bronze Medal", respectively. For the rest of the athletes, we assign numeric ranks starting from 4th place.

# Approach

1. Create an array of objects containing the score and its original index.
2. Sort the array of objects based on the score in descending order.
3. Define medal ranks as an array.
4. Iterate over the sorted array of objects and assign ranks based on the index in the sorted array.
5. Handle special cases for the first three ranks and assign numeric ranks for the rest of the athletes.

# Complexity

- Time complexity: O(n log n) due to the sorting operation.

- Space complexity: O(n) where n is the number of elements in the input array, as we create additional arrays to store the indexed scores and the ranks.

# Code

```
/**
 * @param {number[]} score
 * @return {string[]}
 */


const findRelativeRanks = function (scores) {
    // Create an array of objects containing the score and its original index
    const indexedScores = scores.map((score, index) => ({ score, index }));

    // Sort the array of objects based on the score in descending order
    indexedScores.sort((a, b) => b.score - a.score);

    // Define medal ranks
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    // Create an array to store the ranks
    const result = [];

    // Iterate over the sorted array and assign ranks
    indexedScores.forEach((indexedScore, rank) => {
        if (rank < 3) {
            result[indexedScore.index] = medals[rank]; // Assign medal ranks
        } else {
            result[indexedScore.index] = (rank + 1).toString(); // Assign numeric ranks starting from 4th place
        }
    });

    return result;
};
```
