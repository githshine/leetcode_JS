// 257. Binary Tree Paths
// Given the root of a binary tree, return all root-to-leaf paths in any order.

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
 * @return {string[]}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var binaryTreePaths_01 = function (root) {
  const rstArr = [root];
  const nodesArr = [];

  while (!rstArr.shift() && rstArr.shift() !== null) {
    let node = rstArr.shift(); // get the first element
    let str = node.val;
    if (node.left !== null && node.right !== null) {
      nodesArr.push(node.left);
      nodesArr.push(node.right);
      rstArr.push(`${str}->${node.left.val}`);
      rstArr.push(`${str}->${node.right.val}`);
    } else if (node.left !== null) {
      nodesArr.push(node.left);
      rstArr.push(`${str}->${node.left.val}`);
    } else if (node.right !== null) {
      nodesArr.push(node.right);
      rstArr.push(`${str}->${node.right.val}`);
    } else {
      // no child nodes exist
    }
  }
};

var binaryTreePaths = function (root) {
  const res = [];
  if (!root) return [];

  function nodeRecucive(node, pathSoFar) {
    if (!node) return;
    let newPathSoFar = pathSoFar ? `${pathSoFar}->${node.val}` : `${node.val}`;
    if (!node.left && !node.right) {
      res.push(newPathSoFar);
      return;
    }

    if (node.left) nodeRecucive(node.left, newPathSoFar);
    if (node.right) nodeRecucive(node.right, newPathSoFar);
  }

  nodeRecucive(root, '');
  return res;
};

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(5), new TreeNode(6)),
  new TreeNode(3, null, new TreeNode(4))
);
console.log(binaryTreePaths(root));
