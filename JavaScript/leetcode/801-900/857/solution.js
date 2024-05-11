/**
 * Calculates the minimum cost to hire K workers based on their quality and wage.
 * @param {number[]} quality - Array of integers representing the quality of each worker.
 * @param {number[]} wage - Array of integers representing the wage demands of each worker.
 * @param {number} K - The number of workers to hire.
 * @returns {number} The minimum cost to hire K workers satisfying the condition.
 */
const minCostToHireWorkers = function (quality, wage, K) {
  // Calculate the wage-to-quality ratio for each worker and sort them in descending order.
  const workers = wage
    .map((w, i) => ({ ratio: w / quality[i], quality: quality[i] }))
    .sort((a, b) => b.ratio - a.ratio);

  // Initialize a min-heap to store the quality of workers.
  const pq = new Heap((a, b) => a.quality < b.quality);

  let qualitySum = 0; // Track the sum of qualities of the selected workers.
  let result = Number.POSITIVE_INFINITY; // Initialize the result to positive infinity.

  // Iterate through each worker.
  while (workers.length) {
    const worker = workers.pop(); // Get the next worker from the sorted array.
    qualitySum += worker.quality; // Add the quality of the current worker to the sum.
    pq.insert(worker); // Insert the worker into the heap.

    // If the number of workers exceeds K, remove the worker with the highest quality.
    if (pq.getLength() > K) {
      qualitySum -= pq.pop().quality; // Update the quality sum after removing the highest quality worker.
    }

    // If the number of workers equals K, calculate the cost and update the result.
    if (pq.getLength() === K) {
      result = Math.min(result, worker.ratio * qualitySum); // Calculate the cost and update the result.
    }
  }

  return result; // Return the minimum cost to hire K workers.
};


/**
* Represents a binary heap data structure.
*/
class Heap {
  /**
   * Initialize the binary heap with a custom comparator function.
   * @param {function} comparator - A function to compare elements in the heap.
   */
  constructor(comparator) {
    this.arr = []; // Array to store elements of the heap.
    this.comparator = comparator; // Comparator function for comparing elements.
  }

  /**
   * Perform the sift-down operation to maintain the heap property.
   * @param {number} i - Index of the element to sift down from.
   */
  siftDown(i) {
    const { arr } = this;
    const left = 2 * i + 1; // Index of the left child.
    const right = 2 * i + 2; // Index of the right child.

    // If the left child is out of bounds, return.
    if (left >= arr.length) return;

    // If only the left child exists, compare and swap if necessary.
    if (right >= arr.length) {
      if (this.comparator(arr[i], arr[left])) this.swap(i, left);
      return;
    }

    // If both children exist, compare with both and swap with the appropriate child.
    if (
      this.comparator(arr[left], arr[i]) &&
      this.comparator(arr[right], arr[i])
    ) {
      return; // No need to swap if both children are smaller than the parent.
    }

    if (this.comparator(arr[right], arr[left])) {
      this.swap(i, left);
      this.siftDown(left);
      return;
    }

    this.swap(i, right);
    this.siftDown(right);
  }

  /**
   * Perform the bubble-up operation to maintain the heap property.
   * @param {number} i - Index of the element to bubble up from.
   */
  bubbleUp(i) {
    const parent = Math.floor((i - 1) / 2); // Index of the parent node.
    // If parent exists and needs swapping, swap and continue bubbling up.
    if (parent !== -1 && this.comparator(this.arr[parent], this.arr[i])) {
      this.swap(i, parent);
      this.bubbleUp(parent);
    }
  }

  /**
   * Insert a new element into the heap.
   * @param {any} value - The value to insert into the heap.
   */
  insert(value) {
    this.arr.push(value); // Add the value to the end of the array.
    this.bubbleUp(this.arr.length - 1); // Bubble up from the last position.
  }

  /**
   * Remove and return the root (minimum or maximum) element of the heap.
   * @returns {any} The root element of the heap.
   */
  pop() {
    const { arr } = this;
    if (arr.length === 0) return -1; // Return -1 if the heap is empty.

    const popValue = arr[0]; // Store the root value to be returned.
    arr[0] = arr[arr.length - 1]; // Replace the root with the last element.
    arr.pop(); // Remove the last element.
    this.siftDown(0); // Restore heap property by sifting down from the root.
    return popValue; // Return the original root value.
  }

  /**
   * Get the length (number of elements) of the heap.
   * @returns {number} The number of elements in the heap.
   */
  getLength() {
    return this.arr.length;
  }

  /**
   * Swap two elements in the heap.
   * @param {number} a - Index of the first element.
   * @param {number} b - Index of the second element.
   */
  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]]; // Swap elements using destructuring assignment.
  }

  /**
   * Check if the heap is empty.
   * @returns {boolean} True if the heap is empty, otherwise false.
   */
  empty() {
    return this.arr.length === 0;
  }
}
