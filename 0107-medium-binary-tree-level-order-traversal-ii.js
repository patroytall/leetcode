/* Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

    3
   / \
  9   20
     /  \
    15   7

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]

Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 
Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
    const result = [];
    if (!root) {
        return result;
    }
    const queue = [root];
    while (queue.length > 0) {
        const level = [];
        const queueLength = queue.length;
        for (var i = 0; i < queueLength; ++i) {
            const n = queue.shift();
            level.push(n.val);
            if (n.left) {
                queue.push(n.left);
            }
            if (n.right) {
                queue.push(n.right);
            }
        }
        result.push(level);
    }
    return result.reverse();
};


[
    {
        root: {
            val: 3,
            left: {
                val: 9
            },
            right: {
                val: 20,
                left: {
                    val: 15
                },
                right: {
                    val: 7
                }
            }
        }, output: [[15, 7], [9, 20], [3]]
    },
    {
        root: {
            val: 1
        }, output: [[1]]
    },
    {
        root: null, output: []
    }
].forEach(e => {
    const output = levelOrderBottom(e.root);
    if ((output.length !== e.output.length || output.some((value, index) => JSON.stringify(value) !== JSON.stringify(e.output[index])))) {
        throw Error(`input: ${JSON.stringify(e.root)} - actual output: ${JSON.stringify(output)} - expected output: ${JSON.stringify(e.output)}`);
    }
})
console.log("success")