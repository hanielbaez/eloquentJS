// Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator when you want to ignore the prototype’s properties. But what if your map needs to include the word "hasOwnProperty"? You won’t be able to call that method anymore because the object’s own property hides the method value.

// Can you think of a way to call hasOwnProperty on an object that has its own property by that name?

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
//NOTE: I did not understand the task, that's why I came up with two possible solutions. The second solution is not valid.

// 1. soluction
console.log(Object.getPrototypeOf(map).hasOwnProperty.call(map, 'one'));
// 2. soluction
delete map.hasOwnProperty
console.log(map.hasOwnProperty('one'))

// → true