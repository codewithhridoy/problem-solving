# [2192. All Ancestors of a Node in a Directed Acyclic Graph](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph)

---

title: "Finding Ancestors in a Directed Acyclic Graph"
summary: "A solution to find all ancestors of each node in a directed acyclic graph using topological sorting."
date: "2024-06-29"
modifiedDate: "2024-06-29"
tags: ["graph theory", "topological sort", "algorithms"]
slug: "finding-ancestors-in-dag"

---

# Intuition

The problem requires us to find all ancestors for each node in a directed acyclic graph (DAG). An ancestor of a node `u` is any node `v` such that there is a path from `v` to `u`. To solve this problem, we need to track all such paths and determine which nodes lead to each other.

# Approach

1. **Graph Representation**: Represent the graph using an adjacency list.
2. **Topological Sorting**: Use Kahn's algorithm to perform topological sorting. This helps in processing nodes in a linear order such that every directed edge `u -> v`, `u` comes before `v`.
3. **Tracking Ancestors**: For each node processed, update the ancestors of its neighbors by adding the current node and all its ancestors.

## Steps:

- Create an adjacency list and an in-degree array.
- Perform topological sorting using Kahn's algorithm.
- As each node is processed, update the ancestors of its neighbors.

# Complexity

- Time complexity: $$O(n + e)$$ where `n` is the number of nodes and `e` is the number of edges, due to the graph traversal and ancestor updates.

- Space complexity: $$O(n^2)$$ in the worst case for storing the ancestors for each node.

# Code

```javascript
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
  return ancestors.map((ancestorSet) =>
    Array.from(ancestorSet).sort((a, b) => a - b)
  );
}
```
