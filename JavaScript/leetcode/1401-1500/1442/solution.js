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
        count += (k - i - 1);
      }
      indices.push(k);
    } else {
      xorIndexMap.set(currentXor, [k]);
    }
  }

  return count;
}