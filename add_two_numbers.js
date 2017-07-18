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
 * 想了一下，好像也没什么好改的，如果不用递归的话，变成循环效率应该能高点
 * 看看别人怎么做的吧。
 * 看了下，思路和我这个也差不多，这道题好像也没什么特别的。不过我这个实现写的不太好看，把传入的参数都给修改了，
 * 虽然能Accept但是看起来还是不太好。主要是为了省事儿，少用一个参数，下面写个非递归的版本吧。
 */
var addTwoNumbersFinal = function(l1, l2) {
  var result = new ListNode();
  var l = l1, r = l2;
  var c = result;
  var carry = 0;
  while (l || r) {
    c.val = (l ? l.val || 0 : 0) + (r ? r.val || 0 : 0) + carry;
    if (c.val > 9) {
      carry = 1;
      c.val -= 10;
    } else {
      carry = 0;
    }
    l = l && l.next ? l.next : null;
    r = r && r.next ? r.next : null;
    if (l || r) {
      c.next = new ListNode();
      c = c.next;
    }
  }
  if (carry) {
    c.next = new ListNode();
    c.next.val = carry;
  }
  return result;
};

/*
 * 恩，该写完以后提交，成绩96%了，不错不错。就这样吧~
 */
