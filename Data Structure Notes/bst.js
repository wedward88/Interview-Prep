const Node = require('./node');

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root=this.root) {
        if (this.root === null) {
            this.root = new Node(val);
            return;
        }

        if (val < root.val) {
            //go left
            if (root.left === null) {
                root.left = new Node(val);
            } else {
                this.insert(val, root.left);
            }

        } else {
            //go right
            if (root.right === null) {
                root.right = new Node(val);
            } else {
                this.insert(val, root.right);
            }
        }
    }


    inOrderPrint(root=this.root) {
        if (root === null) return;

        this.inOrderPrint(root.left);
        console.log(root.val);
        this.inOrderPrint(root.right);
    }

    depthFirst () {
        const stack = [ this.root ]; // push, pop
        while (stack.length > 0) {
            const node = stack.pop();
            console.log(node.val);
            if (node.right !== null) stack.push(node.right);
            if (node.left !== null) stack.push(node.left);
        }
    }

    breadthFirst () {
        const queue = [ this.root ]; // push, shift
        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }

    search(num, root=this.root){
        if (root === null) return false;

        if (num < root.val) {
            return this.search(num, root.left);
        } else if (num > root.val) {
            return this.search(num, root.right);
        } else {
            return true;
        }

    }

    maxPathSum(root=this.root) {
        if (root === null) return 0;

        const lSum = this.maxPathSum(root.left);
        const rSum = this.maxPathSum(root.right);
        return root.val + Math.max(lSum, rSum)
    }
}

const tree = new BST;

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(17);
tree.insert(16);


console.log(tree.maxPathSum());  // 58

// tree.inOrderPrint();

// tree.depthFirst();
// tree.breadthFirst();

// console.log(tree.search(7))
// console.log(tree.search(18))
// console.log(tree.search(3))

// console.log(tree);
// console.log(JSON.stringify(tree));