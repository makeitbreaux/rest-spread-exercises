const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0)

//findMin
const findMin = (...arguments) => Math.min(...arguments)

//mergeObjects
const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
})

//doubleAndReturnArgs
const doubleAndReturnArgs = (array, ...arguments) => [...array, ...arguments.map(val => val * 2)]

//Slice and Dice!

/* remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

/* Return a new array with every item in array1 and array2. */
const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

/* Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyValue = (object, key, value) => {
    let newObject = {
        ...object
    }
    newObject[key] = value;
    return newObject;
}

/* Return a new object with a key removed. */
const removeKey = (object, key) => {
    let newObject = {
        ...object
    }
    delete newObject[key]
    return newObject;
}

/* Combine two objects and return a new object. */
const combine = (object1, object2) => {
    return {
        ...object1,
        ...object2
    };
}

/* Return a new object with a modified key and value. */
const update = (object, key, value) => {
    let newObject = {
        ...object
    }
    newObject[key] = value;
    return newObject;

}