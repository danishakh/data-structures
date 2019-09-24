function Queue() {
    collection = [];

    this.print = function() {
        console.log(collection);
    }

    // add an element onto the queue
    this.enqueue = function(element) {
        collection.push(element);
    }

    // remove an element from the Queue
    this.dequeue = function() {
        return collection.shift()      // removes the 1st element in the array
    }

    // return the 1st element in the queue
    this.front = function() {
        return collection[0];
    }

    // check the size of the queue
    this.size = function() {
        return collection.length;
    }

    // check if the queue is empty
    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

// let q = new Queue();
// q.enqueue('naruto')
// q.enqueue('levi')
// q.enqueue('eren')
// q.print();
// q.dequeue();
// console.log(q.front());
// console.log(q.size());
// q.print();


function PriorityQueue() {
    var collection = [];

    this.printCollection = function() {
        console.log(collection);
    }

    // higher priority value will be placed ahead of lower priority in queue
    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collection.push(element);
        }
        else {
            let added = false;
            // loop through the collection
            for (let i = 0; i < collection.length; i++) {
                // compare priority of the element we want to add with each element in the collection
                if(element[1] > collection[i][1]) {
                    // insert the element
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            // element has lowest priority, add at the end of the collection
            if(!added) {
                collection.push(element);
            }
        }
    }

    this.dequeue = function() {
        let value = collection.shift();
        return value[0];
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

// higher priority should print before lower priority
let pq = new PriorityQueue();
pq.enqueue(['Levi', 4]);
pq.enqueue(['Mikasa', 5]);
pq.enqueue(['Armin', 3]);
pq.enqueue(['Eren', 4]);
pq.enqueue(['Conny', 3]);
pq.printCollection();
pq.dequeue();
pq.printCollection();
console.log(pq.front());
