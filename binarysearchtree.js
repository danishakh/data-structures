class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add = function(data) {
        const node = this.root;

        if (this.root === null) {
            this.root = new Node(data);
            return;
        }
        else {
            const searchTree = function(node) {
                if(data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left !== null) {
                        // recursively run this function with 'node.left' as the argument
                        return searchTree(node.left);
                    }
                }
                else if(data > node.data) {
                    if(node.right === null) {
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right !== null) {
                        return searchTree(node.right);
                    }
                }
                // data is = to root node, so just return null
                else {
                    return null;
                }
            }
        }
    }
}