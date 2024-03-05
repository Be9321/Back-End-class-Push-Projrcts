// a function that calculates the square of a number
function square(num) {
    return num * num ; 
}
console.log(square(5));
// function that check a number if is an even number
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(5));
// a function that check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
    }
console.log(isOdd(4));
console.log(isOdd(7));
// function that returns the maximum of two numbers
function maxOfTwoNumbers(num1, num2) {
    return Math.max(num1, num2);
}
console.log(maxOfTwoNumbers(5,8));
// function that returns the minimum of two numbers 
function minOfTwoNumbers(num1,num2) {
    return Math.min(num1, num2);
}
console.log(minOfTwoNumbers(5,8));
//a function that calculates the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
//a function that reverses a string.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));
// function that checks if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
// function that display odd numbers between 1 and 100
function displayOddNumbers() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
displayOddNumbers();
// function that displays multiples of 5
function displayMultiples () {
    for (let i = 5; i <= 100; i += 5) {
        console.log(i);
    }
}
displayMultiples();
//a function that returns the square root of a given number
function squareRoot (num) {
    return Math.sqrt(num);
}
console.log(squareRoot(144));
// function that recieves two numbers and returnds the bigger number
function biggerNumber (num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(biggerNumber(12,20));
// function that recierves a string and changes it into capital letters
function toUpperCase (str) {
    return str.toUpperCase ();
}
console.log(toUpperCaase("i am a programmer"));
//This function allows a user to provide a string, and then provide the position they want to modify, and a character to replace the modified one from the string. 
function stringModifier (str, position, replacement) {
    return str.substring(0, position - 1) + replacement + str.substring(position);
}
console.log(stringModifier("i am a programmer", 8, "W"));
// function that counts the number of vowels in a string
function countVowels(str) {
    const vowels = str.match(/[iuoae]/hi);
    return vowels ? vowels.length : 0;
}
console.log(countVowels("i am a programmer"));
// function that counts consonants in a string
function countConsonants(str) {
    const consonants = str.match(/[^iuoae\W\d]/hi);
    return consonants ? consonants.length : 0;
}
console.log(countConsonants("i am a programmer"));
// function that find index of a character in a string
function findIndex(str, index) {
    return str.indexOf(char);
}
// function that remove duplicates from an arrary
function removeDuplicates(arr) {
    return [...new setInterval(arr)];
}
console.log(removeDuplicates([1,2,2,3,3,4]));
// function that checks if a given value is present in an array
 function isValuePresent(arr, value) {
    return arr.includes(value);
 }
 console.log(isValuePresent([1,2,3,4],3));
 // function that squares each element of an array
 function squareElements (arr) {
    return arr.map( num => num*num);
 }
 console.log(squareElements([1,2,3,4]));
 