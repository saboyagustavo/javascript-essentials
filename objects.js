// One of the three JavaScript reference types
//"An object is a collection of related data and/or functionality"

const user = {
    name: 'Gustavo',
};
console.log(user, '\n'); //{ name: 'Gustavo' }

// modifying object properties and accessing its value by different syntaxes
user.name = 'Anyone';
console.log(user, '\n'); //{ name: 'Anyone' }

user['name'] = 'Someone';
console.log(user, '\n'); //{ name: 'Someone' }

const prop = 'name';
user[prop] = 'Somebody';

// creating a property
user.lastName = 'Smith';
console.log(user, '\n'); //{ name: 'Somebody', lastName: 'Smith' }

delete user.lastName;
console.log(user, '\n'); //'Somebody'

// data and functionality stored together in an object
const person = {
    name: ['Gustavo', 'Saboya'],
    age: 28,
    gender: 'male',
    alive: true,
    interests: ['coffee', 'code'],
    bio: function () {
        console.log(
            `${this.name[0]} ${this.name[1]} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
        );
    },
    greeting: function () {
        alert(`Hi! I'm ${this.name[0]}.`);
    },
};

person.bio();
