# Data Structures

The goal of this exercise is to learn data structures, algorithms and understand when to apply them.

## Abstract Data Types vs Data Structures

ADT is an abstraction of a data structure which provides only the interface to which a data structure must adhere to. The interface does not give any specific details about how something should be implemented or in what programming language.

> Tip: Think of abstract data type as being the need to get from point A to point B via a mode of transportation. There are several modes of transportation, which one do you choose? (walking, biking, train, etc). These modes of transportations are the data structures.
 
 ### Example
| Abstraction (ADT) | Implementation (Data Structure) |
| ------ | ------ |
| Vehicle | Golf Cart, Bike, Train|
| List | Dynamic Array, Linked List |
| Queue | Linked List based Queue, Array based Queue, Stack based Queue |
| Map | Tree Map, Hash Map / Hash Table |

> Note: An abstract data type only defines how a data structure should behave and what methods it should have. But not details around how those methods should be implemented.


## Complexity Analysis
- How much **time** does this algorithm need to finish?
- How much **space** does this algorithm need for its computation?

### Big-0 Notation
Big-0 Notation gives an upper bound of the complexity in the **worst** case, helping to quantify performance as the input size become **arbitrarily large**.

Complexities ordered from smallest to largest (n = size of input)
- Constant Time: 0(1)
- Logarithmic Time: 0(log(n))
- Linear Time: 0(n)
- Linearithmic Time: 0(nlog(n))
- Quadric, Cubic Time: 0(n^2) / 0(n^3)
- Exponential Time: 0(b^n), b>1
- Factorial Time: 0(n!)

#### Examples
0(1) - constant time, so as input size n increases, the time taken remains constant
```javascript
    i = 0;
    while i < 10
        do i = i + 1
```

0(n) - linear time, so as the input size n increases, the time taken increases by n
```javascript
    i = 0;
    while i < n
        do i = i + 1
```

0(n^2) - quadratic time
```javascript
    for(i = 0; i < n; i++)
        for(j = 0; j < n; j++)
        // do something...
```

#### Slightly More Complex Examples
In this example: f(n) = n * (3n + 2n) = 5n^2 
Hence: 0(n^2)
```javascript
    i = 0;
    while i < n
    do
        j = 0;
        while j < 3n
            do j = j + 1
        j = 0
        while j < 2n
            do j = j + 1
        i = i + 1
```

In this example: f(n) = 3n * (40 + n^3/5) = 120n + 3n^4/5
Hence: 0(n^4)
```javascript
    i = 0;
    while i < 3n do
        j = 10
        while j <= 50 do
            j = j + 1
        j = 0
        while j < n*n*n do 
            j = j + 5
        i = i + 1
```

## Stacks
Think of a stack of books. If you have a stack of books, the top of the book is what you put in last. 
Stacks are a LIFO type of service -> Last-In First-Out!

Another example of stacks are your browser's 'Back' button. Everytime you enter a URL, the browser puts that website URL to the top of the stack of sites you visited previously. When you click 'Back', you pop off the current website you visited from the stack.

### Stack Functions
1. Push - placing data onto a stack
2. Pop - removing the top element of the stack
3. Peek - displaying the top element of the stack
4. Length - determining how many elements are on the stack

> In JS, the array object already has the all the functions we need to use it as a stack. So we can just use an array as a stack

**Refer to `stacks.js` to view examples and the implementation of a stack in JS.**

## Sets
Sets are like arrays except there are no duplicate items and the values are not in any particular order. Typically, sets are used to check for the presence of an item/value. 

ES6 has a built in 'Set' object, however it doesn't contain all the methods that are common to Sets. So you may need to implement some of those yourself.  

**Refer to `sets.js` to view examples and the implementation of a set in JS.**

## Queues
Queues are similar to stacks, except that queues are first-in first-out (FIFO). Think of waiting in line to buy something in a store. Another example is a print queue, the printer prints the documents in the order it received the print requests.

In JS, we can implement a queue with just an array. If we want to limit a queue to only it's methods, we will have to implement it ourselves.

## Priority Queues
PQs are pretty much the same as queues, except that you can pass in the priority of the element that you are queue-ing up. Check out the implementation in `queues.js`

## Binary Search Tree
- All data points in the tree are called **nodes**. 
- Top of the tree is called a **root node**
- There are parents, children and siblings
- **Leaf** nodes are nodes at the end of the tree (bottom / don't have any children)
- Usually trees can have multiple branches(children) for each node, although binary trees **only have 2 for each node**
- Binary search trees are **ordered** trees, which means each left subtree is less than or equal to the parent node, and each right subtree is greater than or equal to the parent node

Check out the JS implementation of BSTs in `binarysearchtree.js`

### Example Binary Search Tree
![Binary Search Tree](https://static.javatpoint.com/ds/images/binary-search-tree.png)