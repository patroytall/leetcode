/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character. */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        const temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
};

[
    { input: ["h","e","l","l","o"], output: ["o","l","l","e","h"] },
    { input: ["H","a","n","n","a","h"], output: ["h","a","n","n","a","H"] },
].forEach(e => {
    const output = reverseString(e.input);
    if ((output.length !== e.output.length || output.some((value, index) => value !== e.output[index]))) {
        throw Error(`input: ${e.input} - actual output: ${output} - expected output: ${e.output}`);
    }
})
console.log("success")