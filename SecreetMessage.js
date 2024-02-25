let secretMessage = ['a long','code','number','is','a standard',
'phone number','used to','send and recieve','voice calls','and','sms messages'];

// remove the last message of the array
secretMessage.pop();

// check the length of the array
console.log(secretMessage.lenght);

// add the words 'to' and 'program' to the end of array
secretMessage.push('to','program');

//change easily to right
const easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';

// remove the first string of the array
secretMessage.shift();

//add the string 'programming' to the beginning of the array
secretMessage.unshift('programming');

//replace certain strings with know
const startIndex = secretMessage.indexOf('get');
const endIndex = secretMessage.indexOf('time,');
secretMessage.splice(startIndex,endIndex - startIndex, 'know');

// print the secret message as a sentence
console.log(secretMessage.join(''));
