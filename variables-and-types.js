//before ES6 there was only two kind of scopes: global and local; by the implementation of let and const keywords, we got another kind of: the block scope.

//exploring const and its features
/*
const name = 'Gus';
//console.log(name); // Gus

//can't change the value
name = 'Rick';
console.log(name); //TypeError: Assignment to constant variable.
*/


//if the const is an object we can change it's properties
const user = {
    name:'Gus'
}
console.log(user.name); //Gustavo

user.name = 'someone else';
console.log(user.name); //someone else

const persons = ['Rick', 'Val', 'Meg'];

//we can add, change and remove items 
persons.push('Gus');
console.log(persons); //[ 'Rick', 'Val', 'Meg', 'Gus' ]

persons[1] = 'Emily';
console.log(persons); //[ 'Rick', 'Emily', 'Meg', 'Gus' ]

persons.shift();
console.log(persons); //['Emily', 'Meg', 'Gus' ]

