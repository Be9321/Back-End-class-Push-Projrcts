// create a variable named input
const input = 'turpentine and turtles';

// create an array named vowels
const vowels = ['a','e','i','o','u'];

// create a variable named result array
let resultArray = [];

// create a loop to iterate through each letter of the input text
for(let i = 0; i < vowels.length; i++) {
    console.log('i is' +i);
    for(let j = 0; j<vowels.length; j++) {
        console.log('j is' +j);
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
         if (input[i] === 'e')
         resultArray.push(input[i]); 
        }
        if (input[i] === 'u') {
            resultArray.push(input[i]);
        }
        }
    }

const resultString =  resultArray.join('').toUpperCase();
console.log(resultString);