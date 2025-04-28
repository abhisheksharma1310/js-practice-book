function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for(let i=0, j=1; i<arr.length; i += size, j++){
    newArr.push(arr.slice(i,size*(j)))
  }
  console.log(newArr)
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
chunkArrayInGroups(["a", "b", "c", "d"], 2);