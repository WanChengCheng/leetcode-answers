
const test = require('ava');
const {
  findMedianSortedArraysLog: calc,
} = require('./code.js');

test.skip('[], []', (t) => {
  t.is(calc([], []), null);
});

test.skip('[], [1,2]', (t) => {
  t.is(calc([], [1, 2]), 1.5);
});

test.skip('[1, 2], []', (t) => {
  t.is(calc([1, 2], []), 1.5);
});

test.skip('[1, 3], [2, 4]', (t) => {
  t.is(calc([1, 3], [2, 4]), 2.5);
  t.is(calc([2, 4], [1, 3]), 2.5);
});

test.skip('[1, 3], [2]', (t) => {
  t.is(calc([1, 3], [2]), 2);
});

test.skip('[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]', (t) => {
  t.is(calc([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 5.5);
});

