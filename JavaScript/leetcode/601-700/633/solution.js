/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    let sumOfSquares = left * left + right * right;
    if (sumOfSquares === c) {
      return true;
    } else if (sumOfSquares < c) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
