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

// Test cases
// console.log(compareVersion("1.01", "1.001"));  // Output: 0
// console.log(compareVersion("1.0", "1.0.0"));   // Output: 0
// console.log(compareVersion("0.1", "1.1"));     // Output: -1
