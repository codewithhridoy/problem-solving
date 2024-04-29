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

console.log(findMedianSortedArrays([20, 100], [200, 300]));
