# [1122. Relative Sort Array](https://leetcode.com/problems/relative-sort-array/description)

---

title: "Solution to Relative Sort Array Problem"
summary: "This article discusses the intuition, approach, complexity, and provides the code for solving the Relative Sort Array problem."
date: "2024-06-11"
modifiedDate: "2024-06-11"
tags: ["algorithm", "javascript", "sorting"]
slug: "solution-to-relative-sort-array-problem"

---

![image.png](https://assets.leetcode.com/users/images/af782133-2fb1-415c-96c1-20a8de4928de_1718114064.8717408.png)

# Intuition

The goal is to sort `arr1` such that the relative ordering of items in `arr1` are the same as `arr2`. Elements that don't appear in `arr2` should be sorted in ascending order at the end of `arr1`.

# Approach

1. **Frequency Map**: First, build a frequency map of the elements in `arr1`.
2. **Sorted List**: Use `arr2` to build a sorted list based on the frequency map.
3. **Remaining Elements**: Collect the remaining elements from `arr1` that are not in `arr2`, sort them, and append them to the sorted list.

# Complexity

- Time complexity: $$O(n \log n)$$, where $$n$$ is the length of `arr1`. Building the frequency map and populating the sorted list based on `arr2` are both $$O(n)$$ operations. Sorting the remaining elements is $$O(n \log n)$$.

- Space complexity:$$O(n)$$. We use a frequency map to store counts of elements in `arr1` and additional space for the sorted list and remaining elements.

# Code

```javascript
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
  const frequencyMap = new Map();
  const remainingElements = [];

  // Build the frequency map for arr1
  for (const num of arr1) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }

  // Build the sorted list based on arr2
  const sortedList = [];
  for (const num of arr2) {
    if (frequencyMap.has(num)) {
      const count = frequencyMap.get(num);
      for (let i = 0; i < count; i++) {
        sortedList.push(num);
      }
      frequencyMap.delete(num);
    }
  }

  // Collect remaining elements and sort them
  for (const [num, count] of frequencyMap) {
    for (let i = 0; i < count; i++) {
      remainingElements.push(num);
    }
  }
  remainingElements.sort((a, b) => a - b);

  return [...sortedList, ...remainingElements];
};
```
