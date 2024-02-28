/* 
    A set is a data structure that can hold a collection of values.
    The values however must be unique.
    Set can contain a mix of different data types.
    You can store strings, boolean, numbers or even objects all in the same set.
    Set do not maintain an insertion order.
    Sets are iterables. They can be used with a for of loop.
*/

/* 
    Arrays can contain duplicate values whereas sets cannot.
    Insertion order is maintained in arrays but it is not in the case of sets.
    Searching and deleting an element in the set is faster compared to arrays.
*/

//Create set
const set = new Set([1,2,3]);
console.log("Set: ", set);

//add new element in set
set.add(4);
console.log("New item [4] inserted: ", set);

//check element exist or not in the set
console.log("Check item [4] exist: ",set.has(4));

//delete element from the set
console.log("Delete item [3]: ", set.delete(3));

//check set size
console.log("Size: ", set.size);

//iterate over set elements
for(const item of set) {
    console.log("item: ", item);
}

//remove all items from the set
set.clear();
console.log("Set cleared: ", set);

