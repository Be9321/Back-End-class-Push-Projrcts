let a = 10;
let b = 30;
1.// function that retuns sum of two numbers
function sum (a,b) {
    return 10+30 ; 
}
2.// function that retuns product of two numbers
function product (a,b) {
    return 10*30 ;
}
3.// function that returns the difference between two numbers
function  difference (a,b) {
    10-30 ;
}
4.//function that returns the division between two numbers
function division (a,b) {
    if (b !== 0) {
        return 10/30 ; 
    } else {
        return "cannot divide by zero" ;
    }
}
5.// function that receives an array and returns the sum of all the elements inside that array.
function sumOfArrays (arr) {
    const array = [10,30,50,70,90];
    return arr.reduce((acc, curr) => acc + curr,0);
}
6.//a function that receives an array and returns the greatest value inside that array
function greatestOfArrays (arr) {
    const array = [10,30,50,70,90];
    return Math.max(...arr);
}
7.// function that recieves an array and returns the smallest value inside that array
function smallestOfArrays (arr) {
    const array = [10,20,40,60,80];
    return Math.min(...array);
}
8.//Create a function that receives an array of numbers and returns the average of the numbers
function averageOfArrays (arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
9.//Create a function that combines two arrays into one single array
function combineArrays (arr1 , arr2) {
    const arrange = ['a','b','c','d'];
    const arrays = ['e','f','g','h','j'];
    return [...arrange , ...arrays];
}
10.//Create a function that displays a pattern
function showPattern (rows , cols) {
    for (let i = 0; i < rows.length; i++) {
        let pattern = '';
        for (let j = 0; j< cols.length; j++) {
            pattern += '*';
        } 
        console.log(pattern);
    }
}
//Create a function that displays a pattern
function displayPattern () {
    let pattern = '';
    for (let i = 4; i >=1; i--) {
        for (let j = 1; j <= i; j++) {
            pattern += '1';
        }
        pattern += '\n';
    }
    console.log(pattern);
}
// function that displays onother pateern 
function displayPattern () {
    let pattern = '';
    for (let i = 4; i >=1; i--) {
        for (let j = 1; j <= i; j++) {
            pattern += '1';
        }
        for (let k = 1; k <= i; k--) {
            pattern += '0';
        } 
        pattern += '\n';
    }
    console.log(pattern);
} 
// function to display a pattern with borders
function showPattern () {
    let pattern = '';
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            if (i === 1 || i === 5 || j === 1 || j === 5) {
                pattern += '1';
            } else {
                if (i === 2 || i === 3 || i === 4) {
                    if (j === 2 || j === 3 || j === 4){
                        pattern += '0';
                    } else {
                        pattern += '1';
                    }
                }
            }
        }
        pattern += '\n';
    }
    console.log(pattern);
}
// function to display pattern with spaces
function showPatternWithApaces () {
    let pattern = '';
    for (let i = 4; i>= 1; i--) {
        for (let j = 1; j <= i; j++) {
            pattern += '';
        }
        pattern += '\n';
    }
    console.log(pattern);
}
// function to display the reverse array
function reverseArray () {
    var  array = [1,3,4,3,7,8,0,12,19];
    console.log(reverseArray(array));
}
// function that sort and arrange elements of an array in ascending order
var arr = [3,4,8,2,1,2,2,6,3,4];
function sortArray () {
    return arr.sort((a,b) => a - b);
}
function modifyArray () {
const sorted = sortArray(arr);
const firstThree = sorted.slice(0,3);
const lastThree = sorted.slice(-3);
return lastThree.concat(firstThree, lastThree);
}
function firstThreeNumbers (arr) {
    return sortArray(arr).slice(0,3);
}
console.log(modifyArray(arr));
console.log(firstThreeNumbers(arr));
//Create a function that determines the age classification of people
function ageClassification () {
    let classification ; 

    switch (true) {
        case 0 : 
        age >= 0 && age <= 12
        classification = "MIMICRY";
        break;
        case 2 :
            age >= 13 && age <= 19
            classification = " SELF-DISCOVERY" ;
            break;
            case 3 : 
            age >= 20 && age <= 45
            classification = "COMMITIMENT" ;
            break;
            default : 
            classification = "LEGACY" ;
            break;
    }
    return classification;
}
console.log(ageClassification(50));
// function that calculate BMI and return classification
function calculateBMI (weight,height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 24.9 && bmi < 29.9) {
        return "Overweight" ;
    } else {
        return "Obesity" ;
    }
    }
    // function that counts characters in a string 
    function countCharacters(str) {
        return str.replace(/\ d/g, '').length;
    }
    console.log(countCharacters("Hello World"));
    // fumction that dispalye even numbers between 1 and 100
    function displayEvenNumbers () {
        for (let i = 2; i <= 100; i += 2) {
            console.log(i);
        }
    }
    displayEvenNumbers();
