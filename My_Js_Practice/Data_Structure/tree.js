/*
    A tree is a hierarchial data structure that consits of nodes connected by edges.
    A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.
    In linear data structures, the time required to search is proportional to the size of the data set.
    Tree however, owing to the nonlinear nature allow quicker and easier access to the data.
    A tree will not contain any loops or cycles.

    Tree usage:
    File systems for directory structure.
    A family tree.
    An organization tree.
    DOMC.
    Chat bots.
    Abstract syntax trees.
*/

/*
    Binary Search tree:
    A binary tree is a tree data structure in which each node has at most two children.
    They are reffered to as left child and right child.
    The value of each left node must be smaller than the parent node.
    The value of each right node must be greater than the parent node.
    Each node has at most two children.
*/

/*
    Binary Search Tree Operations:
    Insertion to add a node to the tree.
    Search to find a node given its value.
    DFS & BFS - To visit all nodes in the tree.
    Deletion - To remove a node given its value.
*/

/*
    Binary Search Tree Usage: 
    Searching.
    Sorting.
    To implement abstract data types such as lookup tables and priority queues.
*/

//implementation
//define node
class Node {
    constructor() {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//create class for
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    search(root, value){
        if(!root) {
            return false;
        } else {
            if(root.value === value) {
                return true;
            } else if(value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }
    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder() {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    levelOrder() {
        //use queue for optimization
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if(curr.left) {
                queue.push(curr.left);
            }
        }
        if(curr.right) {
            queue.push(curr.right);
        }
    }
    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }
    max(root) {
        if(!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        if(root === null) {
            return root;
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value);
        }
        else if(value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if(!root.left && !root.right) {
                return null;
            }
            if(!root.left) {
                return root.right;
            } else if(!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}