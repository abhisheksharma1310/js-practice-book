function findMajority(arr) {
  // Your code goes here
  // Your code goes here
  const res = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] > n / 3 && !res.includes(arr[i])) {
      let count = 0;
      for (let j = 0; j < n; j++) {
        if (arr[j] === arr[i] && arr[j] > n / 3) {
          count++;
        }
      }
      if (count > n / 3) res.push(arr[i]);
    }
  }
  return res.sort((a, b) => a - b);
}

function findMajority1(arr) {
  let candidate1 = null,
    candidate2 = null,
    count1 = 0,
    count2 = 0;

  for (let num of arr) {
    if (candidate1 !== null && candidate1 === num) {
      count1++;
    } else if (candidate2 !== null && candidate2 === num) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;

  for (let num of arr) {
    if (num === candidate1) count1++;
    if (num === candidate2) count2++;
  }

  const result = [];
  const n = arr.length;
  if (count1 > Math.floor(n / 3)) result.push(candidate1);
  if (count2 > Math.floor(n / 3) && candidate2 !== candidate1)
    result.push(candidate2);
  return result.sort((a, b) => a - b);
}

console.log(findMajority1([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]));
console.log(findMajority1([2, 1, 6, 6, 6, 6, 6, 5, 5, 5, 5]));
console.log(findMajority1([1, 2, 3, 4, 5]));
console.log(findMajority1([3, 2, 1, 1, 2, 3, 4, 1, 4, 4, 4, 1, 3, 1, 2, 1]));
