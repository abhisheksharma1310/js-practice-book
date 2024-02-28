/* 
    The stack data structure is a sequential collection of elements that follows the principle of last in first out.
    The last element inserted into the stack is first element to be removed.
    A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.
    Stack is an abstract data type. It is a defined by its behaviour rather than being a mathematical model.
    The stack data structure supports two main operations, push and pop.
*/

/* 
    Stack usage:
    Browser history tracking.
    Undo operation when typing.
    Expression conversions.
    Call stack in javascript runtime.
*/

//Stack implementation
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peak() {
        return this.items[this.items.length-1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
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