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
        // start at the root node
        const node = this.root;

        if (this.root === null) {
            this.root = new Node(data);
            return;
        }
        // if there is a root node, we need to figure out where to put this node in the tree
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
                        // recursively run this function with 'node.right' as the argument
                        return searchTree(node.right);
                    }
                }
                // data is = to root node, so just return null
                else {
                    return null;
                }
            }
            return searchTree(node)
        }
    }
    // find the min value in the tree
    findMin = function() {
        let minNode = this.root;
        while(minNode.left) {
            minNode = minNode.left;
        }
        return minNode.data;
    }
    // find the max value in the tree
    findMax = function() {
        let maxNode = this.root;
        while(maxNode.right) {
            maxNode = maxNode.right;
        }
        return maxNode.data;
    }
}