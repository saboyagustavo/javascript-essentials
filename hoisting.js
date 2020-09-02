//JS does hoisting on variables and functions, but working differently in each other.

function fn() {
    console.log(simpleText) // -> undefined because it does exists, but it's value isn't assigned yet

    var simpleText = 'example';
    console.log(simpleText); // -> example
}
//variables are available before their declaration. Because of VAR keyword, this example work even inside of scopes.

fn();