/* 
    A map is an ordered collection of key-value pairs.
    To retrive a value, you can use the corresponding key.
    Maps are iterables. They can be used with a for loop.
*/

/* 
    Objects are unordered whereas maps are ordered.
    Keys in objects can only be string or symbol type, whereas in maps they can be of any type.
    An object has a prototype and may contain a few default which may collide with your own keys if you are not carefull.
    A map on the other hand does not contain any keys by default.
    Objects are not iterbles where as maps are iterables.
    The number of items in an object must be determined manually where as it is readily available with the size property in a map.
    Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data.
*/

//creat a map
const map = new Map([['a', 1], ['b', 2]]);
console.log("Map: ", map);

//insert a member in a map
map.set('c', 3);
console.log('New item ["c", 3] inserted: ', map);

//delete a member of map
console.log("Member [c] deleted: ", map.delete('c'));

//check a member exist or not 
console.log("Member [b] exist: ", map.has('b'));

//check map member size
console.log("Map size: ", map.size);

//iterate over map members
for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

//clear map members
map.clear();
console.log("Map cleared: ", map);