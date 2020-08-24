// reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

const reverseArray = (arr) => {
    let newArr = []
    for (var element of arr) {
        newArr = [element, ...newArr]
    }
    return newArr
}

// reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

const reverseArrayInPlace = (arr) => {
    let reverseCopy = reverseArray(arr)
    for (var i = 0; i <= arr.length - 1; i++) {
        arr[i] = reverseCopy[i]
    }
    return arr
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]