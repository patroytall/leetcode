/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
Constraints:

1 <= n <= 45 */

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
    var first = 1
    var second = 2;
    for (var i = 1; i < n - 1; i++) {
        var currentSecond = second;
        second += first;
        first = currentSecond;
    }
    return second;
}

[
    { input: 1, output: 1 },
    { input: 2, output: 2 },
    { input: 3, output: 3 },
    { input: 4, output: 5 },
].forEach(e => {
    const output = climbStairs(e.input);
    if (output !== e.output) {
        throw Error(`input: ${e.input} - actual output: ${output} - expected output: ${e.output}`);
    }
})
console.log("success")