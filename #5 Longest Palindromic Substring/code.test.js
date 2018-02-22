const test = require('ava');
const { isPalindromic, longestPalindrome: calc } = require('./code');

test('test isPalindromic', (t) => {
  t.is(isPalindromic('a', 0, 0), true, 'a is valid');
  t.is(isPalindromic('ab', 0, 1), false, 'ab is not');
  t.is(isPalindromic('aba', 0, 2), true, 'aba is valid');
  t.is(isPalindromic('aaa', 0, 2), true, 'aaa is valid');
  t.is(isPalindromic('aacaa', 0, 4), true, 'aacaa is valid');
});

test('test longgesgt palindromic substring result', (t) => {
  t.is(calc('a'), 'a');
  t.is(calc('aba'), 'aba');
  t.is(calc('cbbd'), 'bb');
  t.is(calc('babad'), 'bab');
  t.is(calc('abcda'), 'a');
  t.is(calc('laskdjflasdfkljasdlfabcdefgxxgfedcba;kjqw;ekr'), 'abcdefgxxgfedcba');
});
