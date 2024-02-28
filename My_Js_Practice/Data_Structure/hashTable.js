/*
    A hash table also known as hash map, is a data structure that is used to share key-value pairs.
    Given a key, you can associate a value with that key for very fast lookup.
    JavaScript's object is a special implementation of the hash table data structure. however, object class adds its own keys. keys that you input may conflict and overwrite the inherited default properties.
    Maps which were introduced in 2015 allow you to store key - value pairs.
    writing your own has table implementation is a very popular JavaScript interview question.
    Hash tables store key value pairs:
    1. 'in' => 'India'
    2. 'au' => 'Australia'
    3. 'fr' => 'France'
    4. 'it' => 'Italy'
    We store the key value pairs in a fix sized array.
    Arrays have a numeric index;
    How do we go from using a string as an index to number as an index?
    A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array.
    Using the index, store the value.
    The same hashing function is reused to retrieve the value given a key.
*/

/* 
    Hash tables are typically implemented.
    Where constant time lookup and insertion are required.
    Database indexing
    caches
*/

// implementation
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for(let i=0; i<key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined;
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem, 1));
            }
        }
    }
    display() {
        for(let i=0; i<this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

//create has table 
const table = new HashTable(5);

//insert new element into hashmap
console.log("Insert new element [['name','Bruce'],['age',25]]: ");
table.set("name", "Bruce");
table.set("age", 25);

//print hashmap
table.display();

//get value by key
console.log("Get value by key: ", table.get("name"));

//remove element from hashmap
console.log("Remove elment by key name: ");
table.remove("age");

//print hashmap
table.display();
