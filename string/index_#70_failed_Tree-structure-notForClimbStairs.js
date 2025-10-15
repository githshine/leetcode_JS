// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// This solution can get the right answer, but it requires create a whole binary tree
//   which can be way big for an array to store, since when n = 40, the length of the tree will be 2^40 -1,
//      way out of the range of allowable length of Array in JavaScript.
class BinaryNode {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  // parameter n : level number
  // return root node
  function createFullBinaryTree(n) {
    if (n <= 0) return null;

    const dummyRoot = new BinaryNode(0);
    // create all notes at first, one's value is 1, another's is 2
    const totalNodes = Math.pow(2, n + 1) - 1; // includes dummyNode
    const nodeArr = new Array(totalNodes);
    nodeArr[0] = dummyRoot;

    for (let index = 1; index < totalNodes; index += 2) {
      const node1 = new BinaryNode(1);
      const node2 = new BinaryNode(2);

      nodeArr[index] = node1;
      nodeArr[index + 1] = node2;
    }

    // link all those nodes in order
    for (let idx = 0; idx < nodeArr.length; idx++) {
      const node = nodeArr[idx];
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;

      if (leftIdx < nodeArr.length && rightIdx < nodeArr.length) {
        node.left = nodeArr[leftIdx];
        node.right = nodeArr[rightIdx];
      }
    }

    return dummyRoot;
  }

  // Iterate all nodes, calculate whether it's a solid solution for the question
  // 遍历方式	访问顺序	输出结果
  // 前序 Pre-order	  根 → 左 → 右	A, B, D, E, C
  // 中序 In-order	  左 → 根 → 右	D, B, E, A, C
  // 后序 Post-order	左 → 右 → 根	D, E, B, C, A
  // parameters:
  // root : root node of the tree;
  // steps: how steps the stairs is
  // count: how many solutions to climb
  function preOrderRecursive(root, steps, rstArr) {
    if (!root) return;

    // console.log(root.value);
    steps += root.value;

    if (steps === n) {
      rstArr.push(true);
      return;
    } else if (steps > n) {
      return;
    } else {
      preOrderRecursive(root.left, steps, rstArr);
      preOrderRecursive(root.right, steps, rstArr);
    }
  }

  const root = createFullBinaryTree(n);
  const solutionsArr = [];
  preOrderRecursive(root, 0, solutionsArr);
  return solutionsArr.length;
}

console.log('Climb Stairs');

console.log('2 steps:');

console.log('solutions for 2 steps:', climbStairs(2));

console.log('3 steps:');
console.log('solutions for 3 steps:', climbStairs(3));

console.log('4 steps:');
console.log('solutions for 4 steps:', climbStairs(4));
