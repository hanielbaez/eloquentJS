const SCRIPTS = require('./scripts')

const filter = (array) => {
    let result = []
    for (script of array) {
        if (script.living) {
            result.push(script)
        }
    }
    return result
}

const SCRIPTS_FILTER = filter(SCRIPTS)

const characterScript = code => {
    for (script of SCRIPTS_FILTER) {
        if (script.ranges.some(([from, to]) => code >= from && code <= to)) {
            return script
        }
    }
    return null
}

const countBy = (items, groupName) => {
    const counts = []
    for (let item of items) {
        const { name, direction } = groupName(item)
        const index = counts.findIndex(item => item.name === script.name)

        if (!name || !direction) continue

        if (index === -1) {
            counts.push({ name: name, direction: direction, count: 1 })
        } else {
            counts[index].count++
        }
    }
    return counts
}

const sumCount = (arr) => {
    let total = []
    for (let script of arr) {
        const index = total.indexOf(item => item.direction === script.direction)

        if (index !== -1) {
            total[index].count += script.count
        } else {
            total.push({ direction: script.direction, count: script.count })
        }
    }
    return total
}

const dominantDirection = (text) => {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0))
        return script ? script : 'none'
    }).filter(({ name }) => name != 'none')


    let sumDirections = sumCount(scripts)

    let biggestCount = -Infinity
    let dominantDir = 'none';

    for (let script of sumDirections) {
        if (script.count > biggestCount) {
            biggestCount = script.count
            dominantDir = script.direction
        }
    }
    return dominantDir
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl