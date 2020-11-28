//"An object is a collection of related data and/or functionality"
const person = {
    name: ['Gustavo', 'Saboya'],
    age: 28,
    gender: 'male',
    alive: true,
    pronouns: ['he', 'him', 'his'],
    interests: ['coffee', 'code'],
    bio: function () {
        console.log(
            `${this.name[0]} ${this.name[1]} is ${this.age} years old; ${this.pronouns[0]} enjoy ${this.interests[0]} and ${this.interests[1]}.`
        );
    },
    greeting: function () {
        alert(`Hi! I'm ${this.name[0]}.`);
    },
};

person.bio();

// Retrieve object's keys
console.log('Properties from person object:', Object.keys(person));

// return an array of arrays containing [ name_property, value_property ]
console.log('\nList of properties and values:', Object.entries(person));

// Merge on object properties and obtaining new objects
Object.assign(person, { fullName: 'Gustavo Saboya' });
console.log('\nAdd fullName property on person object', person);
let personWithHeight = Object.assign({}, person, { height: 1.83 });
console.log('\npersonWithHeight =', personWithHeight);

// Prevent modification in an object
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\n newObj after changes:', newObj);

// Allows alter only object already existing properties
const user = { name: 'Guga' };
Object.seal(user);

user.name = 'Guga Sabas';
delete user.name;
user.age = 28;

console.log('\n user after changes:', user);
