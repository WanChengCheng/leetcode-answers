// 5. Longest Palindromic Substring
// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.
// Example:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example:
// Input: "cbbd"
// Output: "bb"

// 这个题感觉挺老了，最长「回环子串」.想起了很多年前去网易有道面试的时候，面试官也问过
// 一个类似的题目，只不过当时问的是「回环数」，其实就是同样的一题

// 还是先从一个简单的思路开始，找出最长回环子串，那么我们可以设计一个搜索策略，然后在搜索的过程中对搜索结果
// 不断的进行验证，同时维护一个符合要求的最长结果，搜索结束，结果也就出来了。

// 给定一个字符串，子串会有很多，肯定是要根据「回环」这个特性来快速的缩减解空间，否则求解效率一定特别低。
// 想到一个简单策略就是从字符串的第一个字符开始，做出如下判断
//    包含这个字符的「最长回环子串」是多少？
//    是否比当前的结果要长？如果更长，那么更新当前结果，否则该字符明显不再最终解当中，应该继续从下一个字符
//      开始继续搜索。
// 基于这个思路，可以先写一版试试。

// 判断一个字符串是不是「回环字符串」
const isPalindromic = (str, head, tail) => {
  if (head < tail) {
    if (str[head] === str[tail]) {
      return isPalindromic(str, head + 1, tail - 1);
    }
    return false;
  }
  return true;
};

const longestPalindrome = (str) => {
  const last = str.length - 1;
  let best = last > 0 ? '' : str;
  const search = (from) => {
    let tail = last;
    while (tail > from) {
      const isValid = isPalindromic(str, from, tail);
      if (isValid && tail - from > best.length - 1) {
        best = str.substring(from, tail + 1);
        break;
      } else {
        tail -= 1;
      }
    }
    if (!best.length) {
      best = str[from];
    }
    // search from next character
    if (last - from > best.length - 1) {
      return search(from + 1);
    }
    return best;
  };
  return search(0);
};
// 好了，先提交一版试一试
// 好吧有点小问题，单个字符的判断不对，稍微改了下，然后就AC了……
// 可惜性能太差，好像都排到图表外去了

module.exports = {
  longestPalindrome,
  isPalindromic,
};
