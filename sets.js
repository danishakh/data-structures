function mySet() {
    // this will hold our set
    var collection = [];

    // check the presence of an item in the collection
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    }

    // return all elements in the collection
    this.values = function() {
        return collection;
    }

    // add an element to the collection
    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            console.log(`${element} added to the collection`);
            return true;
        }
        console.error(`${element} is already in the collection!`)
        return false;
    }

    // remove an element from the collection
    this.remove = function(element) {
        if(this.has(element)) {
            let i = collection.indexOf(element);
            collection.splice(i, 1);
            return true
        }
        console.error(`${element} is not in the collection`);
        return false;
    }

    // get the size of the collection
    this.size = function() {
        return collection.length;
    }

    // ------ Above functions are present in ES6 Sets -------


    // return union of 2 sets
    this.union = function(newSet) {
        let firstSet = this.values();
        let secondSet = newSet.values();

        let unionSet = new mySet();

        // add the elements from the first set
        firstSet.forEach(function(element) {
            unionSet.add(element);
        });
        // add the elements form the second set
        secondSet.forEach(function(element) {
            unionSet.add(element);
        });

        // we don't need to worry about duplicate values as .add() takes care of that
        return unionSet;
    }

    // return intersection of 2 sets
    this.intersection = function(newSet) {
        let firstSet = this.values();
        let intersectionSet = new mySet();

        firstSet.forEach(function(el) {
            // if second set has the element, add it into intersectionSet
            if(newSet.has(el)) {
                intersectionSet.add(el);
            }
        });
        return intersectionSet;
    }

    // return the difference of two sets as a new set
    this.difference = function(newSet) {
        let firstSet = this.values();
        let differenceSet = new mySet();

        firstSet.forEach(function(el) {
            if(!newSet.has(el)) {
                differenceSet.add(el);
            }
        });
        return differenceSet;
    }

    // return if the set is a subset of another set
    this.subset = function(otherSet) {
        let firstSet = this.values();

        // .every() will return true or false based on the inner return statement test for every element in firstSet
        return firstSet.every(function(element) {
            return otherSet.has(element);
        });
    }
}
let setA = new mySet();
let setB = new mySet();

setA.add('dybala');
// setA.add('ronaldo');
// setA.add('pogba');
setB.add('dybala');
setB.add('rooney');
setB.add(5);
setB.add(false);
setB.add('drake');

// console.table(setB.values());
// setB.remove(false);
// console.table(setB.values());

console.log('union', setA.union(setB).values());
console.log('intersection', setA.intersection(setB).values());
console.log('difference', setA.difference(setB).values());
console.log(setA.subset(setB));





