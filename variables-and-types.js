//before ES6 there was only two kind of scopes: global and local; by the implementation of let and const keywords, we got another kind of: the block scope.

//starting with var
var test = 'example'; //doesn't get inside the scope

(() => {
    console.log(`Variable value inside the function: "${test}".`); //undefined
    
    if (true) {
        var test = 'example2'
        console.log(`{Variable value inside the control-structure block: "${test}".`) //"example2"
    }

    console.log(`Variable value after the block scope: "${test}".`); //"example2"
})();