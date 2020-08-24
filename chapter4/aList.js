// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

const arrayToList = arr => {
    let index = 0
    const toList = () => {
        index++
        return index === arr.length ? null : { value: arr[index], rest: toList() }
    }
    return { value: arr[index], rest: toList() }
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

// Also write a listToArray function that produces an array from a list.

const listToArray = (list) => {
    const toArr = obj => obj.rest ? [obj.value].concat(toArr(obj.rest)) : obj.value
    return toArr(list)
}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

// Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

const prepend = (element, list) => {
    const addList = l => {
        if (!l) return l
        return { value: l.value || l, rest: !l.rest ? null : l.rest }
    }
    return { value: element, rest: addList(list) }
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

// nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

const nth = (list, n) => {
    let index = 0
    const searchL = (obj) => {
        if (index === n) {
            return obj.value
        } else if (obj.rest) {
            index++
            return searchL(obj.rest)
        }
    }
    return searchL(list)
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20