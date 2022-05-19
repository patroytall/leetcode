/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = left + Math.floor((right - left) / 2)
        const num = nums[mid];
        if (num === target) {
            return mid;
        }
        if (num < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums[left] >= target ? left : left + 1;
};

[
    { nums: [1, 3, 5, 6], target: 5, output: 2 },
    { nums: [1, 3, 5, 6], target: 2, output: 1 },
    { nums: [1, 3, 5, 6], target: 7, output: 4 },
    { nums: [1, 3, 5, 6], target: 0, output: 0 },
].forEach(e => {
    const output = searchInsert(e.nums, e.target);
    if (output !== e.output) {
        throw Error(`nums: ${e.nums} - target: ${e.target} - actual output: ${output} - expected output: ${e.output}`);
    }
})
console.log("success")