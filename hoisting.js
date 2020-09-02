//JS does hoisting on variables and functions, but working differently in each other.

function fn() {
    console.log(simpleText) // -> undefined because it does exists, but the initialization doesn't.

    var simpleText = 'example';

    logFn(simpleText); // -> example
    function logFn(value) {
        console.log(value);
    }

    log(simpleText); // -> reference error
    const log = (value) => {
        console.log(value)
    }
}
//variables: they will be available before their declaration, but the initialization only occurs after they be assigned. Because of VAR keyword, this example work even inside of global/local scopes.
fn();
//functions declarations can be used before they are declared.
//functions expressions cannot be used before they are declared. 
