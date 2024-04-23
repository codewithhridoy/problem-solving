/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hash = {};

    return nums.reduce((result, num, index) => {
        const complement = target - num;

        if (complement in hash) {
            result.push(hash[complement], index);
        }

        hash[num] = index;

        return result;
    }, []);
};