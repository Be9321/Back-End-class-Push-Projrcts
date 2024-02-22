let userName =  '';
userName ? console.log(`hello, ${userName}!`) : console.log('hello!');
const  userQuestion = "will i get the best mark ?";
console.log(`${userName ? userName : 'user'} asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';
if (randomNumber === 0) {
    eightBall = 'it is certain';
} else if (randomNumber === 1) {
eightBall = 'it is decidely so';
} else if (randomnNumber === 2) {
    eightBall = ' reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'cannot predict now' ;
} else if (randomNumber === 4) {
    eightBall = 'do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'my sources says no';
} else if (randomNumber === 6) {
    eightBall = 'outlook not so good';
} else {
    eightBall = 'signs point to yes';
} 
console.log(`the magic eightBall says:${eightBall}`); 
