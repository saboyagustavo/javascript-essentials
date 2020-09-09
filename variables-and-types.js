//Strings are useful for holding data, and are used to represent and manipulate a sequence of characters"
const textSize = "Any kind of text".length; //doublequote
console.log(`How many characters: ${textSize}`); //16

console.log('cat'.charAt(0)); //c
//treating string as an array-like object
console.log('cat'[1]); //a

const splittedText = 'I scream, you scream, we all scream for ice cream'.split('scream');
console.log('\n',splittedText); // [ 'I ', ', you ', ', we all ', ' for ice cream' ]

const replacedText = 'You know New York, you need New York, you know you need unique New York'.replace('You','We');
console.log('\n', replacedText);

const lastChar = 'Gustavo'.slice(-1);
console.log('\n',lastChar)

const firstTwoChars = 'Text'.substring(0,2);
console.log('\n', firstTwoChars);

//primitive and object string
let s_obj = new String(lastChar);
console.log(typeof lastChar);
console.log(typeof s_obj);
