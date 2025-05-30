/**
 * Trapping water problem
 * input array: [4,2,0,6,3,2,5]
 * output: 11
 */

function trappingRainWater(arr) {
  //total water tapped
  let total = 0;

  let maxLeft = [arr[0]];
  //maxLeft boundary
  for (let i = 1; i < arr.length; i++) {
    // if (arr[i] > maxLeft[i - 1]) {
    //   maxLeft.push(arr[i]);
    // } else {
    //   maxLeft.push(maxLeft[i - 1]);
    // }
    maxLeft.push(Math.max(arr[i], maxLeft[i - 1]));
  }

  let maxRight = [];
  maxRight[arr.length - 1] = arr[arr.length - 1];
  //maxRight boundary
  for (let i = arr.length - 2; i >= 0; i--) {
    // if (arr[i] > maxRight[i + 1]) {
    //   maxRight[i] = arr[i];
    // } else {
    //   maxRight[i] = maxRight[i + 1];
    // }
    maxRight[i] = Math.max(arr[i], maxRight[i + 1]);
  }

  //calculate  total rain water
  for (let i = 0; i < arr.length; i++) {
    //minimum of maxLeft boundary and maxRight boundary
    const minHight = Math.min(maxLeft[i], maxRight[i]);

    //water tapped at each position
    const water = minHight - arr[i];

    //add in total
    total += water;
  }

  //results
  return total;
}

console.log(trappingRainWater([4, 2, 0, 6, 3, 2, 5]));
