/* 
    Queue implementation using link list
*/

import LinkList from "./linkList_headtail.js";

class Queue {
    constructor() {
        this.list = new LinkList();
    }
    enqueue(value) {
        this.list.append(value);
    }
    dequeue() {
        return this.list.removeFromFront();
    }
    peak() {
        return this.list.head.value;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    size() {
        return this.list.getSize();
    }
    print() {
        return this.list.print();
    }
}


//create queue instance
const queue = new Queue();

//check if queue is empty
console.log("Is queue is empty: ", queue.isEmpty());

//insert element into queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Three item [10, 20, 30] inserted into queue: ");
queue.print();

//check queue size
console.log("Queue size: ", queue.size());

//find peak element
console.log("Queue peak element: ", queue.peak());

//dequeu element of queue
console.log("Item removed from front: ", queue.dequeue());