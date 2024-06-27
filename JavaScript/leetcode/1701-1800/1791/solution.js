/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  // Destructure the first edge to get the two nodes
  const [a, b] = edges[0];

  // Destructure the second edge to get the two nodes
  const [c, d] = edges[1];

  // Check which node from the first edge matches either node in the second edge
  if (a === c || a === d) {
    return a;
  }
  return b;
}