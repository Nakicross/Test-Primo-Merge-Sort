import { merge } from './merge';

// Simple manual run example:
const collection_1 = [9, 7, 5, 1]; // max -> min
const collection_2 = [0, 2, 4, 6]; // min -> max
const collection_3 = [3, 8, 10]; // min -> max

const result = merge(collection_1, collection_2, collection_3);
// eslint-disable-next-line no-console
console.log('Merged result:', result);

