/*
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * 把两个链表的节点对齐相加，然后有个需要注意的地方是需要处理进位。
 * 初始也想到用递归来做，尝试了几次以后调试出如下结果：
 */
var addTwoNumbers = function(l1, l2) {
  const add = function(a, b, bCarry) {
    var carryOver = false;
    a.val = a.val + (b ? b.val : 0) + (bCarry ? 1 : 0);
    if (a.val > 9) {
      carryOver = true;
      a.val -= 10;
    }
    if (a.next) {
      return add(a.next, b ? b.next : null, carryOver);
    }
    if (!a.next && b && b.next) {
      a.next = b.next;
      return add(a.next, null, carryOver);
    }
    if (!a.next && carryOver) {
      a.next = {
        val: 1,
        next: null
      };
    }
  };
  add(l1, l2);
  return l1;
};

/*
 * 提交以后成绩是60%，咳咳。想想看有没有可以优化的点。
 */
