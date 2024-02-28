/* 
    Queue using object implementation
*/

class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++;
        return item;
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    peak() {
        return this.items[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    print() {
        console.log(this.items);
    }
}

//create new queue instance
const queue = new Queue();

//check is queue is impty
console.log("Is queue empty: ", queue.isEmpty());

//insert new element into queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Elements [10, 20, 30] inserted: ");
queue.print();

//check queue size
console.log("Queue size: ", queue.size());

//print peek element
console.log("Queue peak element: ", queue.peak());

//dequeu element
console.log("Dequeue element: ", queue.dequeue());