//compiler doesn't enforce type discipline, allowing operations of different data types
var aNumber = 2;
var aString = "two";

console.log(aNumber + aString); //expected output: '2two'
