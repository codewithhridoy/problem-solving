# [1791. Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph)

---

title: "Intuition and Approach to Solving the Find Center Problem"
summary: "An explanation of the intuition, approach, and complexities involved in solving the find center problem in graph theory, along with the implementation in JavaScript."
date: "2024-06-27"
modifiedDate: "2024-06-27"
tags: ["Graph Theory", "Algorithm", "JavaScript"]
slug: "intuition-and-approach-to-solving-the-find-center-problem"

---

# Intuition

The problem involves finding the center of a star graph. A star graph has one central node connected to all other nodes. The intuition is that in a star graph, the central node will appear in every edge.

# Approach

To solve this problem, consider the first two edges of the given list. The center of the star graph must be one of the nodes in the first edge and must also appear in the second edge. By comparing the nodes in the first and second edges, we can identify the center node.

# Complexity

## Time complexity:

The solution only checks the first two edges and performs a constant number of operations, resulting in a time complexity of $$O(1)$$.

## Space complexity:

The solution uses a constant amount of extra space, resulting in a space complexity of $$O(1)$$.

# Code

```javascript
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
```
