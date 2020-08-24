const deepEqual = (valueOne, valueTwo) => {
    //check for null value
    if (valueOne !== valueOne || valueTwo !== valueTwo) return false

    //check for different value type
    if (typeof valueOne !== typeof valueTwo) return false

    //there is not need to go deeper if they are not obj
    if (typeof valueOne != 'object') return valueOne === valueTwo
    return compareObj(valueOne, valueTwo)
}

const compareObj = (a, b) => {
    const aKeys = Object.keys(a).sort()
    const bKeys = Object.keys(b).sort()

    //check amount of properties
    if (aKeys.length !== bKeys.length) return false

    for (var i = 0; i <= aKeys.length - 1; i++) {
        //test
        // console.log(a[aKeys[i]], b[bKeys[i]], a[aKeys[i]] !== b[bKeys[i]])

        if (typeof a[aKeys[i]] === 'object') return compareObj(a[aKeys[i]], b[bKeys[i]])

        if (a[aKeys[i]] !== b[bKeys[i]]) return false
        return true
    }
    return true
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
