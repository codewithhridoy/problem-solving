/**
 * @param {number[]} nums
 * @return {number}
 */
function minIncrementForUnique(nums) {
    nums.sort((a, b) => a - b);

    let moves = 0;

    // Iterate through the sorted array
    for (let i = 1; i < nums.length; i++) {
        // If the current element is not greater than the previous one
        if (nums[i] <= nums[i - 1]) {
            // Calculate the number of moves needed to make it greater
            let increment = nums[i - 1] - nums[i] + 1;
            // Increment the current element
            nums[i] += increment;
            // Add the moves to the total count
            moves += increment;
        }
    }

    return moves;
}