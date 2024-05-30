# [Count Triplets with XOR](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description)

---

title: "Count Triplets with XOR"
summary: "A detailed approach to solving the problem of counting triplets in an array that satisfy a specific XOR condition."
date: "2024-05-30"
modifiedDate: "2024-05-30"
tags: ["algorithms", "javascript", "XOR", "prefix sums"]
slug: "count-triplets-xor"

---

# Intuition

To solve the problem of counting triplets in an array where the XOR of elements between the triplet indices is zero, we can leverage prefix XOR. This approach simplifies the problem by converting it into a problem of finding indices with the same prefix XOR.

# Approach

We start by computing the prefix XOR for the array. The prefix XOR up to index `i` is the XOR of all elements from the start of the array to `i`. With this, the XOR of any subarray can be computed using the prefix XOR values.

Next, we use a hash map to store the indices where each prefix XOR value occurs. For each prefix XOR value, if it has occurred before at indices `i1, i2, ..., im`, then for a current index `k`, each triplet `(i, j, k)` where `i` is one of the previous indices and `j` ranges between `i` and `k`, will satisfy the condition.

# Complexity

- **Time complexity:** $$O(n)$$
  - We traverse the array twice: once to compute the prefix XOR and once to count the triplets.
- **Space complexity:** $$O(n)$$
  - We use a hash map to store the prefix XOR values and their corresponding indices.

# Code

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
function countTriplets(arr) {
  const n = arr.length;
  const prefixXor = new Array(n + 1).fill(0);

  // Compute prefix XOR
  for (let i = 0; i < n; i++) {
    prefixXor[i + 1] = prefixXor[i] ^ arr[i];
  }

  const xorIndexMap = new Map();
  let count = 0;

  // Iterate over prefix XORs
  for (let k = 0; k <= n; k++) {
    const currentXor = prefixXor[k];
    if (xorIndexMap.has(currentXor)) {
      const indices = xorIndexMap.get(currentXor);
      for (const i of indices) {
        count += k - i - 1;
      }
      indices.push(k);
    } else {
      xorIndexMap.set(currentXor, [k]);
    }
  }

  return count;
}
```
