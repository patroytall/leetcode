/* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 
Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique. */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    if (nums.length === 1) {
        return [nums];
    }
    return dfs(nums);
};


function dfs(nums) {
    const first = nums[0];
    const rest = nums.slice(1);
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const subs = rest.length > 1 ? dfs(rest) : [rest];
        for (var sub of subs) {
            const clone = sub.slice();
            clone.splice(i, 0, first);
            result.push(clone);
        }
    }
    return result;
}

[
    { input: [1, 2, 3], output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] },
    { input: [0, 1], output: [[0, 1], [1, 0]] },
    { input: [1], output: [[1]] },
].forEach(e => {
    const output = permute(e.input);
    if (output.length === e.output.length) {
        console.log(`manual validation => input: ${e.input} - actual output: ${JSON.stringify(output)} - expected output: ${JSON.stringify(e.output)}`);
    } else {
        throw Error("output array length not equal")
    }
})
