/* 
    Stack implementation using link list
*/

import LinkList from "./linkList_headtail.js";

class Stack {
    constructor() {
        this.list = new LinkList();
    }
    push(value) {
        this.list.prepend(value);
    }
    pop() {
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

//create stack instance
const stack = new Stack();
console.log("Stack: ");
stack.print()

//push item into stack
stack.push(10);
stack.push(20);
console.log("New items [10] and [20] pushed: ");
stack.print()

//check stack size
console.log("Current stack size: ", stack.size());

//pop item from stack
console.log("Item poped: ", stack.pop());

//check is stack empty or not
console.log("Is stack empty: ", stack.isEmpty());

//print peak element
console.log("Peak element: ", stack.peak());