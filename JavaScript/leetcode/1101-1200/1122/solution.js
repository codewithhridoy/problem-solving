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