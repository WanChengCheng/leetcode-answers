
const test = require('ava');
const {
  findMedianSortedArraysLog: calc,
} = require('./median_of_two_sorted_arrays.js');

test('[], []', (t) => {
  t.is(calc([], []), null);
});

test('[], [1,2]', (t) => {
  t.is(calc([], [1, 2]), 1.5);
});

test('[1, 2], []', (t) => {
  t.is(calc([1, 2], []), 1.5);
});

test('[1, 3], [2, 4]', (t) => {
  t.is(calc([1, 3], [2, 4]), 2.5);
  t.is(calc([2, 4], [1, 3]), 2.5);
});

test('[1, 3], [2]', (t) => {
  t.is(calc([1, 3], [2]), 2);
});

test('[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]', (t) => {
  t.is(calc([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 5.5);
});

