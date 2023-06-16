
import { multiply, divide, add, subtract } from "./math"
import { power, sqrt, double, triple } from "./advanced";

const multiplicationResult =  multiply(2,3);
const divisionResult = divide(8/2)
const doubleResult = double(2)
const tripleResult = triple(3)

console.log("multiplicationResult", multiplicationResult)
console.log("divisionResult",divisionResult)
console.log("doubleResult",doubleResult)
console.log("tripleResult",tripleResult)


const addResult = add(10, 20);

console.log("Addition: " + addResult);

const subtractResult = subtract(20, 10);

console.log("Subtraction: " + subtractResult);

const powerResult = power(5, 2);

console.log("Power: " + powerResult);

const sqrtResult = sqrt(25);

console.log("Square Root: " + sqrtResult);

