# [Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers)

# Intuition

To compare two version numbers, we split them into their individual revisions and compare each revision from left to right. We ignore leading zeros and treat missing revisions as 0.

# Approach

1. Split the input version strings by '.' into arrays of revisions.
2. Determine the maximum length of these arrays to ensure we iterate over all revisions.
3. Iterate through the revisions and compare them from left to right.
4. If a revision in version1 is less than the corresponding revision in version2, return -1.
5. If version1's revision is greater, return 1.
6. If all revisions are equal, return 0.

# Complexity

- Time complexity: O(n), where n is the maximum length of the two version arrays. We iterate through the revisions once.

- Space complexity: Space complexity: O(n), where n is the maximum length of the two version arrays. We create arrays to store the revisions.

# Code

```
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

const compareVersion = (version1, version2) => {
  const v1 = version1.split('.');
  const v2 = version2.split('.');

  const maxLength = Math.max(v1.length, v2.length);

  for (let i = 0; i < maxLength; i++) {
    const rev1 = i < v1.length ? parseInt(v1[i]) : 0;
    const rev2 = i < v2.length ? parseInt(v2[i]) : 0;

    if (rev1 < rev2) {
      return -1;
    } else if (rev1 > rev2) {
      return 1;
    }
  }

  return 0;
};

```
