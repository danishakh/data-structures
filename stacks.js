// Stacks

// Stack Functions: push, pop, peek, length


// --------------------------------
// Example 1 - Let's check if a word is a palindrome
// --------------------------------
function checkPalindrome(word) {
    var letters = []; // this is our stack
    var reverse = '';

    // put letters of the word into a stack
    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    // pop off he stack in reverse order
    for (var i = 0; i < word.length; i++) {
        reverse += letters.pop();
    }

    reverse === word ? console.log(`${word} is a palindrome!`) : console.log(`${word} is NOT a palindrome!`);
}
checkPalindrome('racecar');


// --------------------------------
// Stack Implementation
// --------------------------------

var Stack = function() {
    this.count = 0;     // tracks how many elements are in the stack
    this.storage = {};  // stores the values in the stack

    // add a value onto the end of a stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // remove and return the value at the end of the stack
    this.pop = function() {
        // check if the stack is empty
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result;
    }

    // gets the size of the stack
    this.size = function() {
        return this.count;
    }

    // check what is on top of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push('yolo');
myStack.push('birdie');
console.log(myStack.size());    // 4
console.log(myStack.peek());    // birdie
console.log(myStack.pop());     // removes birdie since its at the top
console.log(myStack.peek());    // yolo
console.log(myStack.size());    // 3