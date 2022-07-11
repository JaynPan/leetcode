// https://www.youtube.com/watch?v=Rs7ARD5TCFU&t=1s

// typeof -> number / string / undefined / object (object, array, null) / function

// primitive type string, number, bigint, boolean, undefined, symbol, and null

function deepEqual(val1, val2) {
  const typeofVal1 = typeof val1;
  const typeofVal2 = typeof val2;

  if (typeofVal1 !== typeofVal2) return false;
  if (typeofVal1 !== "object" && typeofVal2 !== "object") {
    // base case: modify NaN === NaN false to true
    if (
      typeofVal1 === "number" &&
      isNaN(val1) &&
      typeofVal2 === "number" &&
      isNaN(val2)
    )
      return true;

    // primitive types
    return val1 === val2;
  }

  // edge case: typeof null is object
  if (val1 === null && val2 === null) return true;

  // array
  if (Array.isArray(val1) && Array.isArray(val2)) {
    if (val1.length !== val2.length) return false;

    for (let i = 0; i < val1.length; i++) {
      if (!deepEqual(val1[i], val2[i])) return false;
    }

    return true;
  }

  // object
  const val1Keys = Object.keys(val1);
  const val2Keys = Object.keys(val2);
  const memo = new Set();

  if (val1Keys.length !== val2Keys.length) return false;

  for (let i = 0; i < val1Keys.length; i++) {
    const key = val1Keys[i];
    const val1val = val1[key];
    const val2val = val2[key];
    if (!deepEqual(val1val, val2val)) return false;
    memo.add(key);
  }

  // safe guard this by iterate the second val key again
  for (let i = 0; i < val2Keys.length; i++) {
    const key = val2Keys[i];

    // to prevent duplicate check that already done previously
    // use a memo to store the key that has check before
    if (memo.has(key)) continue;

    const val1val = val1[key];
    const val2val = val2[key];

    if (!deepEqual(val1val, val2val)) return false;
  }

  return true;
}

console.log("-----TRUE------");
console.log(deepEqual("test", "test"));
console.log(deepEqual(123, 123));
console.log(deepEqual(NaN, NaN));
console.log(deepEqual(true, true));
console.log(deepEqual(undefined, undefined));
console.log(deepEqual([], []));
console.log(deepEqual([1, 2], [1, 2]));
console.log(deepEqual([1, [1, "test"]], [1, [1, "test"]]));
console.log(deepEqual({ a: [1, 2, 3] }, { a: [1, 2, 3] }));
console.log(
  deepEqual({ a: [1, 2, 3], b: "hello" }, { a: [1, 2, 3], b: "hello" })
);
console.log(deepEqual(null, null));

console.log("-----FALSE------");
console.log(deepEqual("test", "test1"));
console.log(deepEqual(123, "124"));
console.log(deepEqual(NaN, "NaN"));
console.log(deepEqual(true, false));
console.log(deepEqual(undefined, true));
console.log(deepEqual([1], [1, 2]));
console.log(deepEqual([1, [false, "test"]], [1, [1, "test"]]));
console.log(deepEqual({ a: [1, 2, 3, 4] }, { a: [1, 2, 3] }));
console.log(
  deepEqual({ a: [1, 2, 3], b: [1, 3] }, { a: [1, 2, 3], b: "hello" })
);
console.log(deepEqual({ a: undefined, b: 2 }, { b: 2, c: 4 }));
