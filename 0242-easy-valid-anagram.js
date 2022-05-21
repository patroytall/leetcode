/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const m = new Map();
    for (let i = 0; i < s.length; i++) {
        const cs = s.charAt(i);
        const ct = t.charAt(i);
        if (m.get(cs) === undefined) {
            m.set(cs, 1);
        } else {
            m.set(cs, m.get(cs) + 1);
        }
        if (m.get(ct) === undefined) {
            m.set(ct, -1);
        } else {
            m.set(ct, m.get(ct) - 1);
        }
    }
    return Array.from(m.values()).every(v => v === 0);
};

[
    { s: "anagram", t: "nagaram", output: true },
    { s: "rat", t: "car", output: false },
].forEach(e => {
    const output = isAnagram(e.s, e.t);
    if (output !== e.output) {
        throw Error(`s: ${e.s} - t" ${e.t} - actual output: ${output} - expected output: ${e.output}`);
    }
})
console.log("success")