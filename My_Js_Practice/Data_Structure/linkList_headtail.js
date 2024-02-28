// link list implementation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        if(this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let listValues = "";
            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value); 
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront() {
        if(this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
    removeFromEnd() {
        if(this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while(prev.next != this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }
}

//creat link list instance
const linkList = new LinkList();

//check is link list is empty
console.log("Is link list is empty: ", linkList.isEmpty());

//prepend new value
linkList.prepend(3);
linkList.prepend(2);
linkList.prepend(1);
console.log("New value [1,2,3] prepended: ");
linkList.print();

//append new value
linkList.append(4);
linkList.append(5);
linkList.append(6);
console.log("New value [4,5,6] appended: ");
linkList.print();

//get link list size
console.log(linkList.getSize());

//remove element from front
console.log("Remove element from front: ", linkList.removeFromFront());

//remove element from end
console.log("Remove element from end: ", linkList.removeFromEnd());

//print current link list values
linkList.print();

export default LinkList;

