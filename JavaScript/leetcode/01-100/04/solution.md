# [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)

# Intuition

The problem asks for finding the median of two sorted arrays. One simple approach is to merge the two arrays into a single sorted array and then find the median. This can be achieved by merging the arrays and then determining the median based on whether the combined length is odd or even.

# Approach

1. Merge the two input arrays into a single sorted array.
2. Determine the length of the combined array.
3. If the combined length is odd, return the middle element.
4. If the combined length is even, return the average of the two middle elements.

# Complexity

- Time complexity: O((m+n)log(m+n)), where m and n are the lengths of the input arrays. This is due to the sorting operation.

- Space complexity: O(m+n), where m and n are the lengths of the input arrays. This is due to the space required to store the merged array.

# Code

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = sortedArray.length;

  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return parseFloat((sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2).toFixed(5);
  } else {
    return parseFloat(sortedArray[middleIndex]).toFixed(5);
  }

  // const oddRule = (length + 1) / 2;
  // const evenRule = ((length / 2) + (length + 1) / 2) / 2;

  // const oddIndex = oddRule - 1;
  // const evenIndex = Math.floor(evenRule);

  // if (length % 2 === 0) {
  //   return parseFloat((sortedArray[evenIndex] + sortedArray[evenIndex - 1]) / 2).toFixed(5);
  // } else {
  //   return parseFloat(sortedArray[oddIndex]).toFixed(5);
  // }
};
```

# Alternative Solution of time complexity O(log(m + n))

# Code

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the smaller array
    }

    const nums1Length = nums1.length;
    const nums2Length = nums2.length;
    const totalLength = nums1Length + nums2Length;

    let low = 0;
    let high = nums1Length;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((totalLength + 1) / 2) - partitionX;

        const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

        const minX = partitionX === nums1Length ? Number.POSITIVE_INFINITY : nums1[partitionX];
        const minY = partitionY === nums2Length ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if (totalLength % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
};
};
```
