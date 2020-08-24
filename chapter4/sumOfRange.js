// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

const range = (start, end, step = 1) => {

    const find = (current) => {
        const lastIndex = current.length - 1

        if (step > 0) {
            //positive step value
            if (current[lastIndex] + step > end) return current
        } else {
            //negative step value 
            if (current[lastIndex] + step < end) return current
        }

        return find([...current, current[lastIndex] + step])
    }
    return find([start])
}

const sum = (arr) => {
    let result = 0
    for (var i of arr) {
        result += i
    }
    return result
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55