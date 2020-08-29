// Make the Group class from the previous exercise iterable.

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

    [Symbol.iterator]() {
        const group = this.group
        let currentIndex = 0
        const values = Object.values(group)
        
        return {
            next() {
                return {
                    value: group[values[currentIndex++]],
                    done: currentIndex > values.length
                }
            }
        }
    }
}


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
  // → a
  // → b
  // → c