// 21. Merge Two Sorted Lists

class Node {
  constructor(v) {
    this.val = v;
    this.next = null;
  }
}

// list1, list2 are both linked list ( Node )
function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let dummyNode = (tmpNode = new Node(0));

  let p = list1;
  let q = list2;
  let num1, num2;

  while (p.next && q.next) {
    //compare two numbers
    if (p.val <= q.val) {
      tmpNode.next = p;
      p = p.next;
    } else {
      tmpNode.next = q;
      q = q.next;
    }
  }

  if (p.next !== null) tmpNode.next = p;
  if (q.next !== null) tmpNode.next = q;

  return dummyNode.next;

  // 以下为 输入是数组的写法
  // while (idx1 < list1.length || idx2 < list2.length) {
  //   // get the numbers from both lists
  //   if (idx1 < list1.length) num1 = list1[idx1];
  //   else num1 = 1000;

  //   if (idx2 < list2.length) num2 = list2[idx2];
  //   else num2 = 1000;

  //   // compare both numbers
  //   if (num1 < num2) {
  //     tmpNode.next = new Node(num1);
  //     tmpNode = tmpNode.next;
  //     idx1++;
  //   } else if (num1 > num2) {
  //     tmpNode.next = new Node(num2);
  //     tmpNode = tmpNode.next;
  //     idx2++;
  //   } else {
  //     tmpNode.next = new Node(num1);
  //     tmpNode = tmpNode.next;
  //     tmpNode.next = new Node(num2);
  //     tmpNode = tmpNode.next;
  //     idx1++;
  //     idx2++;
  //   }
  // }

  // return firstNode;
}

// this version doesn't use Node data structure, which is not accepted
function mergeTwoLists_01(list1, list2) {
  // Input: list1 = [1,2,4], list2 = [1,3,4]
  // Output: [1,1,2,3,4,4]
  let idx1 = (idx2 = 0);
  let num1 = (num2 = -100); // set as the minimum number

  // const list1 = [];
  const rstList = [];

  while (idx1 < list1.length || idx2 < list2.length) {
    // get the numbers from both lists
    if (idx1 < list1.length) num1 = list1[idx1];
    else num1 = 1000;

    if (idx2 < list2.length) num2 = list2[idx2];
    else num2 = 1000;

    // compare both numbers
    if (num1 < num2) {
      rstList.push(num1);
      idx1++;
    } else if (num1 > num2) {
      rstList.push(num2);
      idx2++;
    } else {
      rstList.push(num1);
      rstList.push(num2);
      idx1++;
      idx2++;
    }
  }

  return rstList;
}

console.log('Merge two sorted lists');

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
console.log(mergeTwoLists([0], [0]));
console.log(mergeTwoLists([0], [1]));
console.log(mergeTwoLists([-2, 0, 4, 6, 9], [1, 2, 3, 6, 8, 10]));
