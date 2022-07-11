/* Given a large array of numbers, find the 2nd smallest and 2nd largest numbers. 

You have limited memory available, but you can fit 10 more numbers.

Example 1:

Input: nums = [1,-1,5,-6]
Output: [-1, 1]

Example 2:

Input: nums = [1,-1,-6,5,7,-6,7]
Output: [-1, 5]

Constraints:

1 <= items.length <= 2^10 */

function secondSmallestAndLargest(nums) {
    const num0 = nums[0];
    if (nums.length === 1) {
        return [num0, num0];
    }
    let smallest1 = Number.MAX_SAFE_INTEGER;
    let smallest2 = Number.MAX_SAFE_INTEGER;
    let largest1 = Number.MIN_SAFE_INTEGER;
    let largest2 = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n < smallest1) {
            smallest2 = smallest1
            smallest1 = n;
        } else if (n < smallest2 && n !== smallest1) {
            smallest2 = n;
        }
        if (n > largest1) {
            largest2 = largest1;
            largest1 = n;
        } else if (n > largest2 && n !== largest1) {
            largest2 = n;
        }
    }
    return [smallest2, largest2];
}

[
    { nums: [1], output: [1, 1] },
    { nums: [-1, 0, 1], output: [0, 0] },
    { nums: [-1, 1], output: [1, -1] },
    { nums: [1, -1, 5, -6], output: [-1, 1] },
    { nums: [1, -1, -6, 5, 7, -6, 7], output: [-1, 5] },
    { nums: [11, -6,  -9, -9,  -1, -10, -9, -8, 8, 11, -2, -10,  4, -4,  11, 8, 6], output: [-9, 8] }
].forEach(e => {
    const output = secondSmallestAndLargest(e.nums);
    if (output[0] !== e.output[0] || output[1] !== e.output[1]) {
        throw Error(`nums: ${e.nums} - actual output: ${output} - expected output: ${e.output}`);
    }
})
console.log("success")
