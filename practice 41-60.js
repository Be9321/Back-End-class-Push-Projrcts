// function that returns the first n elements of ana array
function firstElements(arr, n) {
    return arr.slice(0, n);
}
console.log(firstElements([1,2,3,4,5],3));
// function that removes the last elements of an array 
function removeLastElements(arr) {
    arr.pop();
    return arr;
}
console.log(removeLastElements([1,2,3,4]));
// function that sort array of numbers in ascending order
function sortAscending(arr) {
    return arr.sort((num1, num2) => num1 - num2 );
}
console.log(sortAscending([3,1,4,2]));
// function that check if all elements in an array are positive
function areAllPositive(arr) {
    return arr.every(num => num > 0);
}
console.log(areAllPositive([1,2,3]));
console.log(areAllPositive([1,2,-3]));
// function that calculates the sum of even numbers in an array
function sumOfEvenNumbers(arr) {
    return arr.reduce((acc, num) => num % 2 === 0? acc + num : acc, 0);
}
console.log(sumOfEvenNumbers([1,2,3,4,5]));
// function that convert array of strimgs to uppercase
function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log(toUpperCaseArray(["i am a", "programmer"]));
// function that generate random number between a given range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
console.log(generateRandomNumber(2, 100));
//function that returns the reverse of an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1,2,3,4]));
// function that calculate fibonacci sequence up to n numbers
function fibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacciSequence(5));
// function that checks if an array is sorted in ascending orde
function isSortedAscending(arr) {
    return arr.every((num, index) => index === 0 || num >= arr[index -1]);
}
console.log(isSortedAscending([1,2,3]));
console.log(isSortedAscending([1,3,2]));
// function to check if an array is sorted in ascending order
function isSortedAscending(arr) {
    return arr.every((num, index) => index === 0 || num >= arr[index - 1 ]);
}
console.log(isSortedAscending([1,2,3,4]));
//console.log(isSortedAscending([4,2,3,1]));

// function that filter out negative numbers from an array
function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}
console.log(filterNegativeNumbers([-1,2,-3,4]));
// function that calculate the square root of a number
function calculateSquareRoot(num) {
    return Math.sqrt(num);
}
console.log(calculateSquareRoot(36));
// function to find the median of an array of numbers
function findMedian(arr) {
    const sortedArr = arr.sort((num1, num2) => num1 - num2);
    const middle = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 !== 0 ? sortedArr[middle] : (sortedArr[middle - 1] + sortedArr[middle] / 2)
}
console.log(findMedian([1,2,3,4,5]));
// function that capitalize the first letter ofEach word in a sentence
function capitalizeFirstLetter(sentence) {
    return sentence.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
console.log(capitalizeFirstLetter("i am a programmer"));
// function that checks if a year  is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
} 
console.log(isLeapYear(2024));
// function that find the intersection of two arrays
function findIntersection (arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(findIntersection([1,2,3], [2,3,4]));
// function that check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(13));
// function that calcualates the power of a number
function calculatePower (base, exponent) {
    return Math.pow(base, exponent);
}
console.log(calculatePower(10,10));
// function that calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Test the function
console.log(calculateRectangleArea(4, 5))