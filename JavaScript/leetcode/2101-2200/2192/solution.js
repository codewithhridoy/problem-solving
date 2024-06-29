/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
function getAncestors(n, edges) {
  // Create an adjacency list to represent the graph
  const adjList = Array.from({ length: n }, () => []);
  const inDegree = Array(n).fill(0);

  for (const [from, to] of edges) {
    adjList[from].push(to);
    inDegree[to]++;
  }

  // Initialize a list to store ancestors for each node
  const ancestors = Array.from({ length: n }, () => new Set());

  // Topological sort using Kahn's algorithm
  const queue = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of adjList[node]) {
      ancestors[neighbor].add(node);
      for (const anc of ancestors[node]) {
        ancestors[neighbor].add(anc);
      }
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Convert sets to sorted arrays
  return ancestors.map(ancestorSet => Array.from(ancestorSet).sort((a, b) => a - b));
}