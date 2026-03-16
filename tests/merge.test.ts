import { merge } from '../src/merge';

describe('merge', () => {
  it('merges three non-empty collections into ascending order', () => {
    const c1 = [9, 7, 5, 1]; // max -> min
    const c2 = [0, 2, 4, 6]; // min -> max
    const c3 = [3, 8, 10]; // min -> max

    const result = merge(c1, c2, c3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('works when some collections are empty', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([5, 3, 1], [], [])).toEqual([1, 3, 5]);
    expect(merge([], [1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('handles duplicate values correctly', () => {
    const c1 = [5, 3, 3, 1];
    const c2 = [1, 3, 5];
    const c3 = [3, 3, 3];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 1, 3, 3, 3, 3, 3, 3, 5, 5]);
  });

  it('handles negative numbers', () => {
    const c1 = [5, 0, -5];
    const c2 = [-10, -3, 2];
    const c3 = [-4, 1, 6];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([-10, -5, -4, -3, 0, 1, 2, 5, 6]);
  });
});

