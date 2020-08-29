// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
    constructor() {
        this.group = {}
    }

    add(value) {
        const index = Object.values(this.group).indexOf(value)
        if (index === -1) this.group[value] = value
    }

    delete(value) {
        const values = Object.values(this.group)
        const index = values.indexOf(value)

        if (index !== -1) delete this.group[values[index]]
    }
    has(value) {
        return Object.values(this.group).includes(value)
    }

    static from(iterable) {
        const group = new Group()
        iterable.forEach(element => {
            group.add(element)
        })
        return group
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
