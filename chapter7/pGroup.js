// Write a new class PGroup, similar to the Group class from Chapter 6, which stores a set of values. 
//Like Group, it has add, delete, and has methods.

// The class should work for values of any type, not just strings. 
//It does not have to be efficient when used with large amounts of values.

class PGroup {
    constructor(arr) {
        this.values = arr
    }

    add(item) {
        return new PGroup(this.values.concat(item))
    }

    delete(item) {
        return new PGroup(this.values.filter(value => value !== item))
    }

    has(item) {
        return this.values.indexOf(item) !== -1
    }
    static empty = new PGroup([])
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false