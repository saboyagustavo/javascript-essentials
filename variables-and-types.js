//before ES6 there was only two kind of scopes: global and local; by the implementation of let and const keywords, we got another kind of: the block scope.

//figuring out with let
(()=> {
    let test = 'function value'
    console.log(`Variable value inside the function: "${test}".`); //"function-value"
    
    if (true) {
        let test = 'if value'
        console.log(`{Variable value inside the control-structure block: "${test}".`) //"if value"
    }

    console.log(`Variable value after the block scope: "${test}".`); //"function-value" (same as assigned before the conditional block)
})();