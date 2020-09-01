//no classes, parser just assigned the type of variable at runtime;
var number = 1;

console.log(number==1) //expected output: true
console.log(number==="1") //expected output: false

number = "regular text";
console.log(number); //expected output: "regular text"

number = +'1';
console.log(typeof number); //expected output: number