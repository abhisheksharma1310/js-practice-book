function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.forEach((e) => {
    if (!arr2.includes(e)) newArr.push(e);
  });
  arr2.forEach((e) => {
    if (!arr1.includes(e)) newArr.push(e);
  });
  console.log(newArr);
  return newArr;
}

diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
