// challenge: 1
function createFunction() {

    const printHello = () => {
        console.log("Hello world")
    }

    return printHello
}

const challenge1 = createFunction();
challenge1()

// challenge: 2
function createFunctionPrinter(input) {

    const printInput = () => {
        console.log(input)
    }

    return printInput
}

const challenge2 = createFunctionPrinter('hello world from challenge2')
challenge2()

// challenge: 3
const outerFunction = () => {
    let counter = 0

    const innerFunction = () => {
        counter++
        console.log(counter)
    }

    return innerFunction
}

const incrementCounter1 = outerFunction() // will get its own backpack, means two different C O V E, P L S R D
const incrementCounter2 = outerFunction()

incrementCounter1()
incrementCounter2()

const addByX = (x) => {

    const incrementXby = (value) => {
        x += value

        console.log(x)
    }

    return incrementXby
}

const challenge3 = addByX(5)
challenge3(4)

// challenge: 4

function once(func) {

    let memoizedData = 0;

    let counter = 0;

    function innerFunction(value) {
        if (counter == 0) {
            memoizedData += func(value)
            counter++
        }
        return memoizedData
    }

    return innerFunction;
}

const addByTwo = (data) => {
    data += 2
    return data
}

const challenge4 = once(addByTwo)
console.log(challenge4(4))
console.log(challenge4(8))
console.log(challenge4(8))