//functions enclosed and executed using the scope chain.
function init() {
    var example = 'a variable';

    return function () {
        console.log(`Log1 - the variable value is: ${example}.`);

        return function () {
            console.log(`Log2 - the variable value is: ${example}.`);

            return function () {
                console.log(`Log3 - the variable value is: ${example}.`);

            }
        }
    }
}
const log1 = init();
const log2 = log1();
const log3 = log2();
//log1(); //1 2 1 
//log2(); // 1 2 2 
//log3(); // 1 2 3
log3();