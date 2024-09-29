// chaining the functions

// method 1

function add1(num) {
    return num + 2
}

function multiple1(num) {
    return num * 2
}

function subtract1(num) {
    return num - 2
}

const result1 = add1(12)
const result2 = multiple1(result1)
const result3 = subtract1(result2)


// functional Composition

const add = (num) => num + 2
const multiple = (num) => num * 2
const subtract = (num) => num - 2

function reduce(arrayOfFunctions, reducer, buildingUp) {

    for (let i = 0; i < arrayOfFunctions.length; i++) {
        buildingUp = reducer(arrayOfFunctions[i], buildingUp)
    }

    return buildingUp
}

const passParamToFunction = (fn, param) => fn(param)

const accumulator = 12;

const functionalComposition = reduce([
    add,
    multiple,
    subtract
], passParamToFunction, accumulator);

console.log(functionalComposition)