/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
function maxDistance(position, m) {
  position.sort((a, b) => a - b);

  const isValid = (minDist) => {
    let count = 1; // Place the first ball in the first basket
    let lastPos = position[0];

    for (let i = 1; i < position.length; i++) {
      if (position[i] - lastPos >= minDist) {
        count++;
        lastPos = position[i];
      }
      if (count >= m) {
        return true;
      }
    }
    return false;
  };

  let left = 1;
  let right = position[position.length - 1] - position[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isValid(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}