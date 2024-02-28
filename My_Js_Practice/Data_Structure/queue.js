/* 
    The queue data structure is a sequential colletion of elements that follows the principle of first in first out (FIFO).
    The first element inserted into the queue is first element to be removed.
    A queue of people, People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).
    Queue is an abstract data type. It is defined by its behaviour rather than being a mathematical model.
    The queue data structure supports two main operation enque and dequeue.
*/

/* 
    Queue Usage:
    Printers
    CPU Task Scheduling
    Caallback queue in JavaScript runtime
*/

//Queue implementation
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peak() {
        if(!this.isEmpty()) return this.items[0];
        return null;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
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
