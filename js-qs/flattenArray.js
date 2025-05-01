/**
 * const a = [1,2,3, [4, [5,6]], 7, 8];
 * const result = flattenArray(a);
 * console.log(result) // [1,2,3,4,5,6,7,8]
 */

const a = [1, 2, 3, [4, [5, 6]], 7, 8];
const b = [
  1,
  true,
  "abh",
  { key: "abh", name: "abh" },
  [4, 5, false, ["a", { key: "fgs", vh: [23, false] }]],
  45,
  true,
  "sh",
  [34, true, "sfg"],
];

function flattenArray(arr) {
  const result = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      const res = flattenArray(el);
      result.push(...res);
    } else {
      result.push(el);
    }
  });
  return result;
}

console.log(flattenArray(a));
console.log(flattenArray(b));
