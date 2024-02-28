/**
 * Find common elements in three sorted arrays
 */

function commonElements1(arr1, arr2, arr3) {
  const common = [];
  for (let i = 0; i < arr1.length; i++) {
    const el = arr1[i];
    if (arr2.includes(el) && arr3.includes(el)) {
      common.push(el);
    }
  }
  return common;
}

function commonElements(arr1, arr2, arr3){
    const common = new Set([]);
    const set2 = new Set([...arr2]);
    const set3 = new Set([...arr3]);
    for(let el of arr1){
        if(set2.has(el) && set3.has(el)) common.add(el);
    }
    return [...common];
}

console.log(
    commonElements(
      [1, 5, 10, 20, 40, 80],
      [6, 7, 20, 80, 100],
      [3, 4, 15, 20, 30, 70, 80, 120]
    )
  );