//A function with many parameters abstracted in just one function with a single parameter.
function sum(a) {
    return function (b) {
        return a + b;
    }
}
const sum2 = sum(2);
console.log(sum2(100)); //102