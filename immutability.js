// if you want to modify some property of an object you'll not do it in the object himself; you shall do it on a copy
const user = [{

    name: 'Gustavo',
    lastName: 'Saboya',
    age: 28,
    gender: 'M',
    alive: true

}]

//Object.assign
const userJob = Object.assign(
    {},
    user[0],
    { occupation: 'future Full-Stack Developer' }
);

//array.concat
const userFeatures = Object.freeze(user.concat(
    {
        drinks: true,
        handsome: 'maybe',
        smoke: undefined
    }
))/*
console.log(userFeatures); // -> {        drinks: true,        handsome: true,        smoke: undefined   }
console.log(delete userFeatures[1]); // -> false
console.log(userFeatures[1]); // -> {        drinks: true,        handsome: true,        smoke: undefined   }
console.log(delete userFeatures[1].smoke); // -> true
console.log(userFeatures[1]); // -> {        drinks: true,        handsome: true   }
*/

//spread - "creates a convention between arrays and objects. It is possible to spread multiple arrays and objects in a same literal."
const userSkills = {
    ...user[0],
    cook: true,
    sing: true,
    write: true,
    fly: false
}
//console.log(userSkills); // -> { name: 'Gustavo', age: 28, gender: 'M', alive: true, cook: true, sing: true, write: true, fly: false}

//by function
const userWithFullName = (user) => {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}
/*
console.log(userWithFullName(user[0]).fullName); //-> Gustavo Saboya
console.log(user[0]) // -> remains the same
*/

const students = [
    {
        name: 'Stuart',
        grade: 7
    },
    {
        name: 'Grace',
        grade: 4
    },
    {
        name: 'Valerie',
        grade: 10
    },
    {
        name: 'George',
        grade: 6
    }
];

const getApprovedStudents = (studentsList) => {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Approved students:')
console.log(getApprovedStudents(students));