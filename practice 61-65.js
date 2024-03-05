// function that checks if a strirng contains only digits
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}

// Test the function
console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("abc123"));
// function that count the number of words in a sentence
function countWords(sentence) {
    return sentence.split(' ').filter(word => word !== '').length;
}
console.log(countWords("Hello world"));
// function that converts temperature from celcius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0));
// function that generate a pyramid pattern of a given height
function generatePyramid(height) {
    let pyramid = '';
    for (let i = 1; i <= height; i++) {
        pyramid += ' '.repeat(height - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    return pyramid;
}
console.log(generatePyramid(4));
// calculator switch
function calculatorSwitch(num1, operator, num2) {
    switch(operator) {
        case 1: '+'
            return num1 + num2;
        case 2: '-'
            return num1 - num2;
        case 3:'*'
            return num1 * num2;
        case 4: '/'
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}
console.log(calculatorSwitch(5, '+', 3));
// days of week
function dayOfWeek(number) {
    switch(number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day";
    }
}
console.log(dayOfWeek(1));
// grade system
function gradeSystem(score) {
    switch(true) {
        case score >= 90:
            return "A";
        case score >= 80:
            return "B";
        case score >= 70:
            return "C";
        case score >= 60:
            return "D";
        default:
            return "F";
    }
}
console.log(gradeSystem(85));
// traffic light
function trafficLight(color) {
    switch(color) {
        case 1:
            return "Red";
        case 2:
            return "Yellow";
        case 3:
            return "Green";
        default:
            return "Invalid color";
    }
}
console.log(trafficLight(2));
// month name
function monthName(number) {
    switch(number) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Invalid month";
    }
}
console.log(monthName(3));
//simple menu
function simpleMenu(option) {
    switch(option) {
        case 1:
            return "Option 1 selected";
        case 2:
            return "Option 2 selected";
        case 3:
            return "Option 3 selected";
        default:
            return "Invalid option";
    }
}
console.log(simpleMenu(2));  
// currency converter
function currencyConverter(amount, sourceCurrency, targetCurrency) {
    const conversionRate = 1.2; 
    switch(targetCurrency) {
        case "USD":
            return amount * conversionRate;
        case "EUR":
            return amount / conversionRate;
        default:
            return "Invalid currency";
    }
}
console.log(currencyConverter(100, "EUR", "USD"));  
// shape area
function shapeArea(shape, dimensions) {
    switch(shape) {
        case "circle":
            return Math.PI * dimensions.radius ** 2;
        case "square":
            return dimensions.side ** 2;
        case "triangle":
            return 0.5 * dimensions.base * dimensions.height;
        default:
            return "Invalid shape";
    }
}
console.log(shapeArea("circle", {radius: 5}));  
// function that generates a random number within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumber(1, 100));  
