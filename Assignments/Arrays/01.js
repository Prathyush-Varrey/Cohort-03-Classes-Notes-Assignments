/*
Write a function that takes an array of numbers as input, and returns a 
new array with only even values. Read about filter in JS
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkEven(numbers) {
     let result = numbers.filter((number) => {
          return number % 2 == 0;
     })
     
     console.log(result); //[ 2, 4, 6, 8, 10 ]
}

checkEven(numbers)

