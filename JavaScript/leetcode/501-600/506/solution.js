// O (n log n)
/**
 * @param {number[]} score
 * @return {string[]}
 */


const findRelativeRanks = function (scores) {
  // Create an array of objects containing the score and its original index
  const indexedScores = scores.map((score, index) => ({ score, index }));

  // Sort the array of objects based on the score in descending order
  indexedScores.sort((a, b) => b.score - a.score);

  // Define medal ranks
  const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  // Create an array to store the ranks
  const result = [];

  // Iterate over the sorted array and assign ranks
  indexedScores.forEach((indexedScore, rank) => {
    if (rank < 3) {
      result[indexedScore.index] = medals[rank]; // Assign medal ranks
    } else {
      result[indexedScore.index] = (rank + 1).toString(); // Assign numeric ranks starting from 4th place
    }
  });

  return result;
};



// O(n^2)

/**
 * @param {number[]} score
 * @return {string[]}
 */

const mapMedals = {
  0: 'Gold Medal',
  1: 'Silver Medal',
  2: 'Bronze Medal'
}

const findRelativeRanks2 = function (scores) {
  const sortedArray = [...scores].sort((a, b) => b - a);

  return scores.map((score) => {
    const placeInSortedArray = sortedArray.indexOf(score)

    return mapMedals[placeInSortedArray] ?? String(placeInSortedArray + 1)
  })
};