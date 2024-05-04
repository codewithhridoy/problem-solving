/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
  // Sort the people array in ascending order
  people.sort((a, b) => a - b);

  let left = 0; // Pointer for the lightest person
  let right = people.length - 1; // Pointer for the heaviest person
  let boats = 0; // Counter for the number of boats

  while (left <= right) {
    // If the sum of the lightest and heaviest person is within the limit, both can go on the same boat
    if (people[left] + people[right] <= limit) {
      left++; // Move to the next lightest person
    }
    right--; // Move to the next heaviest person
    boats++; // Increment boat count for each iteration, as at least one person is on the boat
  }

  return boats;
};