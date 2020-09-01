//Functions are treated like any other value. They are allowed to be passed as arguments, parameters and be returned in other functions.
function getName() {
    return 'Gustavo Saboya'
}

function logFn(fn) {
    console.log(fn());
}

//functions as variables value and other data structures
const logFnResult = logFn; 

const obj = {
logFn: logFn
}

const arr = [logFn]

console.log(obj); // [ [Function:logFn] ]
console.log(arr); // { logFn: [Function: logFn] }
logFnResult(getName); //Gustavo Saboya