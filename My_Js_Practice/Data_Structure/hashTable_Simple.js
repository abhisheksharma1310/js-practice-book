/* 
    Simple implementation of hashmap
*/

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
        this.table[index] = value;
    }
    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }
    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
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