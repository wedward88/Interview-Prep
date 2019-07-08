// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);
    
        if (this.head === null){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail(node=this.head) {
        
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return node;
        }
        
        if (node.next.next === null) {
            let oldTail = node.next;
            let newTail = node;
            this.tail = newTail;
            this.tail.next = null;
            this.length -= 1;
            return oldTail;
        } else {
            this.removeTail(node.next);
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        let newHead = oldHead.next;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = newHead;
        }
        this.length -= 1;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target, node=this.head) {
        if (node.value === target) return true;
        if (node.next === null) return false;
       
        return this.contains(target, node.next);

    }

    // TODO: Implement the get method here
    get(index, node=this.head, count=0) {
        if (index < 0 || index > this.length) return null;
        if (count === index){
            return node;
        } else {
            // let newCount = count + 1
            return this.get(index, node.next, count+=1)
        }
    }

    // TODO: Implement the set method here
    set(index, val, node=this.head, count=0) {
        if (index > this.length - 1) return false;
        if (count === index) {
            node.value = val;
            return true;
        } else {
            // let newCount = count + 1
            return this.set(index, val, node.next, count+=1)
        }
    }

    // TODO: Implement the insert method here
    insert(index, val, node=this.head, count=0) {
        if (index > this.length - 1) return false;
        if (index === 0) {
            this.addToHead(val);
            return true;
        }
        if (count + 1 === index) {
            let newNode = new Node(val);
            let nextNode = node.next;
            node.next = newNode;
            newNode.next = nextNode;
            this.length += 1;
            return true;
        } else {
            return this.insert(index, val, node.next, count+=1)
        }
    }

    // TODO: Implement the remove method here
    remove(index, node=this.head, count=0) {
        if (index > this.length - 1) return undefined;
        if (index === 0) {
            let head = this.head;
            this.removeHead();
            return head;
        }
        if (count + 1 === index) {
            let removedNode = node.next;
            let newNext = removedNode.next;
            node.next = newNext;
            this.length -= 1;
            return removedNode;
        } else {
            return this.remove(index, node.next, count += 1)
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}


let list = new LinkedList();

// list.addToTail('B');
// list.addToTail('C');
// list.addToTail('E');

// list.insert(2, 'D');
// list.insert(0, 'A');
// list.insert(4, 'F');

// list.get(7);

// console.log(list.contains('A'));
// console.log(list.contains('B'));
// console.log(list.contains('C'));

exports.Node = Node;
exports.LinkedList = LinkedList;
