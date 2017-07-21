/*
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 *
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 *
 * Given "bbbbb", the answer is "b", with the length of 1.
 *
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(str) {
  /*
   * 最长非重复子串，嗯……
   * 感觉核心就是，如何快速的判断一个字符是不是在字串中出现过？
   * 另外如果出现过，那么可以把原问题的解空间削减多少？
   * 发现leetcode的js环境是node 6.6版本，一些es6的feature还是可以用的
   */
  const len = str.length;
  let longest = '';
  const search = function(cache, start, end) {
    let i = end;
    let character;
    while (i < len) {
      character = str[i];
      const position = cache[character];
      if (typeof position !== 'undefined') {
        // hit
        const sub = str.substring(start, i);
        const next = position + 1;
        const nextCache = {};
        for (let j = next; j < i; j += 1) {
          nextCache[str[j]] = j;
        }
        if (sub.length > longest.length) {
          longest = sub;
        }
        return search(nextCache, next, i);
      }
      cache[character] = i;
      i += 1;
    }
    const sub = str.substring(start, i);
    if (sub.length > longest.length) {
      longest = sub;
    }
  };
  search({}, 0, 0);
  return longest.length;
};

/*
 * 栈溢出了……好他妈尴尬啊……
 */
const lengthOfLongestSubstringIter = function(str) {
  const len = str.length;
  let longest = '';
  let start = 0;
  let end = 0;
  let cache = {};
  while (end < len) {
    let current = str[end];
    if (cache[current] > -1) {
      const sub = str.substring(start, end);
      if (sub.length > longest.length) {
        longest = sub;
      }
      start = cache[current] + 1;
      cache = {};
      for (let j = start; j <= end; j += 1) {
        cache[str[j]] = j;
      }
    } else {
      cache[current] = end;
    }
    end += 1;
  }
  const sub = str.substring(start, end);
  if (sub.length > longest.length) {
    longest = sub;
  }
  console.info('result:', longest);
  return longest.length;
};

/*
 * 不知道对没对，这个栈不溢出了，不过仍然超时了……
 * 本地跑是OK的，看来还是算法效率不行。再想想。
 * 想了想还是先优化一下写法吧。。。
 */
const lengthOfLongestSubstringIterV3 = function(str) {
  const len = str.length;
  let longest = 0;
  let start = 0;
  let end = 0;
  let cache = {};
  while (end < len) {
    let current = str[end];
    if (cache[current] >= start) {
      const sub = end - start;
      if (sub > longest) {
        longest = sub;
      }
      start = cache[current] + 1;
    }
    cache[current] = end;
    end += 1;
  }
  const sub = end - start;
  if (sub > longest) {
    longest = sub;
  }
  return longest;
};


/// 好吧终于AC了……看看得分：37.47%啊哈哈哈，惨不忍睹啊
// 看了一下solution，和我第三版的思路是一模一样的……不明白为什么我写个js版的得分这么低
// solution里面提到一个词 sliding window (optimized)我觉得还挺形象的哈哈
