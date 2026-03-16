# merge-array-ts

Small TypeScript project that implements:

```ts
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

The function returns **one ascending-sorted array** and does **not** use any sort function.  

Constraints:
- `collection_1` is already sorted from **max to min**
- `collection_2` and `collection_3` are already sorted from **min (0) to max**

## Project structure

- `src/merge.ts` – implementation of `merge`
- `src/index.ts` – small example runner
- `tests/merge.test.ts` – Jest unit tests

## Setup

From the project root:

```bash
cd merge-array-ts
npm install
```

## Build and run

Build TypeScript to JavaScript:

```bash
npm run build
```

Run the example script:

```bash
npm start
```

You should see output like:

```text
Merged result: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

## Run unit tests

```bash
npm test
```

Jest will run `tests/merge.test.ts` and report the results.

