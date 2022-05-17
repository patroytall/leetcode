/* Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 104 */

/**
 * @param {number} n
 * @return {string[]}
 */
 function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString())
        }
    }
    return result;
};

[
    { input: 3, output: ["1","2","Fizz"] },
    { input: 5, output: ["1","2","Fizz","4","Buzz"] },
    { input: 15, output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] },
].forEach(e => {
    const output = fizzBuzz(e.input);
    if ((output.length !== e.output.length || output.some((value, index) => value !== e.output[index]))) {
        throw Error(`input: ${e.input} - actual output: ${output} - expected output: ${e.output}`);
    }
})
console.log("success")