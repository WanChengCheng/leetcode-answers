/*
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 */

// 这个median是「中位数」，我搜了一下定义，指的是数组最中间的那个数（如果有两个数，那么则取他们的平均值）
// 这题在leetcode上的难度是「hard」，不过我怎么感觉……
// 有一个简单办法，就是类似于做一个归并，然后轮流pick元素，pick到指定的位数，就能得到这个中位数了不是吗？
// 先写一版试试
const findMedianSortedArrays = (nums1, nums2) => {
  const target = [];
  const total = nums1.length + nums2.length;

  // so the median positon should be
  const medianEnd = Math.floor(total / 2);

  let i = 0;
  let j = 0;
  let current = 0;
  while (current <= medianEnd) {
    const one = nums1[i];
    const another = nums2[j];
    if (one < another) {
      target.push(one);
      i += 1;
    } else if (another <= one) {
      target.push(another);
      j += 1;
    } else if (typeof one !== 'undefined') {
      target.push(one);
      i += 1;
    } else {
      target.push(another);
      j += 1;
    }
    current += 1;
  }
  if (total < 2) {
    return target[0];
  }
  if (total % 2 === 0) {
    return (target[medianEnd] + target[medianEnd - 1]) / 2;
  }
  return (target[medianEnd]);
};

// 感觉应该OK？ 试试。哦，有些意外情况得处理一下。

console.info(findMedianSortedArrays([1, 3, 5], [2, 4, 6]));
console.info(findMedianSortedArrays([1, 3], [2]));
console.info(findMedianSortedArrays([], [2, 3]));

// 恩，尝试了几次以后AC了，不过得分只有可怜的9.9%……等等，我把log去掉再提交一次。
// 恩，立马就98.7%了。那这道题目看起来还是蛮简单的嘛哈哈。回去还能再写一题呢。
// 等会儿看看别人是怎么写的。
