# [1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets)

---

title: "Minimum Number of Days to Make m Bouquets"
summary: "This post explains how to determine the minimum number of days required to make a given number of bouquets using a binary search approach."
date: "2024-06-19"
modifiedDate: "2024-06-19"
tags: ["algorithm", "binary search", "JavaScript"]
slug: "minimum-number-of-days-bouquets"

---

![image.png](https://assets.leetcode.com/users/images/1b8473bf-9508-41c5-aaac-168d6f74ccab_1718768220.4949567.png)

# Minimum Number of Days to Make m Bouquets

This post explains how to determine the minimum number of days required to make a given number of bouquets using a binary search approach.

## Intuition

To solve this problem, the key is to realize that we can use a binary search to find the minimum number of days required. By defining a helper function that checks if we can make the required number of bouquets within a given number of days, we can iteratively narrow down our search range until we find the optimal solution.

## Approach

1. **Helper Function**: Create a function `canMakeBouquets` to determine if we can make the required number of bouquets within a given number of days.
2. **Edge Case Handling**: If the total number of flowers is less than required, return `-1`.
3. **Binary Search**: Use binary search to find the minimum number of days:
   - Initialize the search bounds (`low` and `high`) based on the minimum and maximum values in the `bloomDay` array.
   - Adjust the bounds based on whether the current midpoint allows making the required bouquets.
   - Continue the search until the optimal number of days is found.

## Complexity

- **Time Complexity**: $$O(n \log D)$$ where \(n\) is the number of flowers and \(D\) is the range of days between the minimum and maximum bloom days.
- **Space Complexity**: $$O(1)$$ since we are using a constant amount of extra space.

## Code

```javascript
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function minDays(bloomDay, m, k) {
  // Helper function to check if we can make m bouquets in given days
  const canMakeBouquets = (days) => {
    let bouquets = 0,
      flowers = 0;
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= days) {
        flowers++;
        if (flowers === k) {
          bouquets++;
          flowers = 0; // reset flowers count for the next bouquet
        }
      } else {
        flowers = 0; // reset flowers count if the current flower hasn't bloomed
      }
    }
    return bouquets >= m;
  };

  // Edge case: if total flowers are less than required flowers for m bouquets
  if (bloomDay.length < m * k) {
    return -1;
  }

  // Initialize binary search bounds
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  let result = -1;

  // Perform binary search
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canMakeBouquets(mid)) {
      result = mid;
      high = mid - 1; // try for a smaller number of days
    } else {
      low = mid + 1; // try for a larger number of days
    }
  }

  return result;
}
```
