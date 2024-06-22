# [1052. Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner)

---

title: "Maximize Satisfied Customers Using Grumpy Bookstore Owner Algorithm"
summary: "A detailed explanation and implementation of the algorithm to maximize satisfied customers given grumpy periods in a bookstore."
date: "2024-06-21"
modified_date: "2024-06-21"
tags: ["algorithm", "sliding window", "JavaScript"]
slug: "maximize-satisfied-customers-grumpy-bookstore"

---

![image.png](https://assets.leetcode.com/users/images/53e81608-a212-4c8e-b945-a8a055f53935_1718960976.6266136.png)

## Intuition

The initial idea is to identify how we can maximize the number of satisfied customers by considering both the always satisfied customers and those who can be satisfied during grumpy periods with an intervention.

## Approach

We use a sliding window approach to calculate the maximum number of customers that can be satisfied by making the bookstore owner not grumpy for a continuous period of given minutes. The solution involves two main parts:

1. Calculating the number of customers always satisfied when the owner is not grumpy.
2. Using a sliding window to find the maximum number of extra customers that can be satisfied during grumpy periods within the allowed minutes.

## Complexity

- **Time complexity:**
  $$O(n)$$ where \( n \) is the length of the `customers` array. The sliding window traverses the array once.

- **Space complexity:**
  $$O(1)$$ as we use a constant amount of extra space for the variables.

## Code

```javascript
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
function maxSatisfied(customers, grumpy, minutes) {
  let alwaysSatisfied = 0;
  let windowStart = 0;
  let extraSatisfied = 0;
  let maxExtraSatisfied = 0;

  for (let windowEnd = 0; windowEnd < grumpy.length; windowEnd++) {
    // Add customers to alwaysSatisfied if the owner is not grumpy
    if (grumpy[windowEnd] === 0) {
      alwaysSatisfied += customers[windowEnd];
    }

    // Calculate the number of extra satisfied customers within the current window
    if (grumpy[windowEnd] === 1) {
      extraSatisfied += customers[windowEnd];
    }

    // Once the window exceeds the given minutes, slide the window
    if (windowEnd >= minutes) {
      if (grumpy[windowStart] === 1) {
        extraSatisfied -= customers[windowStart];
      }
      windowStart++;
    }

    // Update the maximum extra satisfied customers
    maxExtraSatisfied = Math.max(maxExtraSatisfied, extraSatisfied);
  }

  // The result is the always satisfied customers plus the maximum extra satisfied customers
  return alwaysSatisfied + maxExtraSatisfied;
}

// Example usage
console.log(
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
); // Output: 16
console.log(maxSatisfied([1], [0], 1)); // Output: 1
```
