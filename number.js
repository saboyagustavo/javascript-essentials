//JS doesnt differ float from int, all are represented by the same type: number; a primitive wrapper object used to represent and manipulate 64bit float-point arithimetic values. There are some methods used to access disparately the real ones.

const myNumber = 18.1271;

// turning numbers into strings
const numberAsString = myNumber.toString();
// console.log('Type checking: ', typeof numberAsString); //-> string

// fixed in only two decimal places
const fixedTwoDecimal = myNumber.toFixed(2);
// console.log(fixedTwoDecimal); //-> 18.13

// turning a string into float
const myStringToFloat = parseFloat(numberAsString);
// console.log('\n String parsed into float:', myStringToFloat, typeof myStringToFloat); //-> 18.1271 number

// turning into int
console.log('\n string or float parsed to int:', parseInt(myStringToFloat), typeof parseInt(myStringToFloat)); //-> 18 number
