
/*
 * Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
 *
 * Example:
 * For num = 5 you should return [0,1,1,2,1,2].
 *
 * Follow up:
 *
 * It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
 * Space complexity should be O(n).
 * Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 * Credits:
 * Special thanks to @ syedee for adding this problem and creating all test cases.
 */

/*
 * 直观上来讲，并不是一个很复杂的任务，核心问题就是：对一个数，求其二进制表示法中1的个数。
 * 判断方式就是不断的向右位移，然后判断末位是否为1，是则加1，否则不计数，直到整个数为0。
 */
var countBits = function(num) {
  // iteration from 0 ~ num
  var result = [];
  for (var i = 0; i <= num; i++) {
    // count bits
    var count = 0, judge = i;
    while (judge !== 0) {
      if (judge & 1 == 1) {
        count += 1;
      }
      judge >>= 1;
    }
    result.push(count);
  }
  return result;
};

/*
 * 写完后AC了，然而这正是那种O(n *sizeof(integer))的解法。本质上是非常直接的对所有数的所有位数，做了一个判断。
 * 题目中也提示了有更高性能的解法，是线性的O(n)。
 * 如果要更高的效率，可以考虑用一部分空间来保存一些中间结果，毕竟cb(4) === cb(2)，右移不改变1的个数对吧。
 */
var contBits2 = function(num) {
  var result = [];
  var cache = {};
  var count = function(i) {
    if (i < 2) {
      return i;
    }
    if (cache[i]) {
      return cache[i];
    }
    if (i & 1 === 1) {
      cache[i] = count(i >> 1) + 1;
      return cache[i];
    }
    cache[i] = count(i >> 1);
    return cache[i];
  }
  for (var j = 0; j <= num; j++) {
    result.push(count(j));
  }
  return result;
};


/*
 * 提交以后也Ac了，然而排名反而下降了也是有点尴尬。
 * 不过看了一下排第一的那个java 三行搞定的解答，思路是一样的，不过代码更加的精简。
 * 依样画葫芦
 */
var countBitsFinal = function(num) {
  var cache = [0];
  for (var i = 1; i <= num; i++) {
    cache[i] = cache[i >> 1] + (i & 1);
  }
  return cache;
};

/*
 * 好吧，还是199毫秒，跟之前第一个解释一样的，这个leetcode的runtime distribution也是非常的迷
 */
