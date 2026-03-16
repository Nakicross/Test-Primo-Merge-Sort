export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  // collection_1 is sorted max -> min, but we need min -> max.
  // Walk it from the end so we see values in ascending order,
  // without calling any sort function.
  const asc1: number[] = [];
  for (let i = collection_1.length - 1; i >= 0; i -= 1) {
    asc1.push(collection_1[i]);
  }

  const merged12 = mergeTwoAsc(asc1, collection_2);
  const merged123 = mergeTwoAsc(merged12, collection_3);
  return merged123;
}

// Merge two ascending-sorted arrays into one ascending array.
// No use of Array.prototype.sort.
function mergeTwoAsc(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i += 1;
    } else {
      result.push(b[j]);
      j += 1;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i += 1;
  }

  while (j < b.length) {
    result.push(b[j]);
    j += 1;
  }

  return result;
}

