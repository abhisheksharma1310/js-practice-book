/* 
    The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.
    Also refered to as circular buffer or ring buffer and follows the fifo principle.
    A circular queue will reuse the empty block created during the dequeue operation.
    When working with queues of fixed maximum size, a circular queue is a great implementation choice.
    The circular queue data structure supports two main operations.
    Enque: add element to rear/tail.
    Dequeue: remove element from front/head.
*/

/* 
    Circular queue usage:
    Clock
    Streaming data
    Traffic lights
*/

//Circular queue implementation
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    isFull() {
        return this.currentLength === this.capacity;
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    enqueue(element) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if(this.front === -1) {
                this.front = this.rear
            }
        }
    }
    dequeue() {
        if(this.isEmpty()) return null;
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if(this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }
    peak() {
        if(!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }
    print() {
        if(this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let i;
            let str = "";
            for(i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
                str += this.items[i] + " ";
            }
            console.log(str);
        }
    }
}

//create circular queue
const queue = new CircularQueue(4);

//check is queue empty
console.log("Is queue empty: ", queue.isEmpty());

//insert element into queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("Insert items [10, 20, 30, 40] into queue: ");
queue.print();

//check is queue is full
console.log("Is queue is full: ", queue.isFull());

//remove element from queue
console.log("Element removed from queue: ", queue.dequeue());

//print peak element of queue
console.log("Peak element: ", queue.peak());
