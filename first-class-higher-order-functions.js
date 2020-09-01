//Functions are treated like any other value. They are allowed to be passed as arguments, parameters and be returned in other functions.
function getName() {
    return 'Gustavo Saboya'
}

function logFn(fn) {
    console.log(fn());
}
logFn(getName);