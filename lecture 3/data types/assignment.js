// Function to calculate the sum of two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Function to square a number
function squareNumber(num) {
    return num * num;
}

// Loop from 1 to 10, pass each number to the square function, and return the squared result
for (let i = 1; i <= 10; i++) {
    let squaredResult = squareNumber(i);
    console.log(`Square of ${i} is: ${squaredResult}`);
}



//code copied from chat gpt... to be reviewed before submission




// Function to return the maximum of 3 numbers
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Prompt for 3 inputs
let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");
let input3 = prompt("Enter the third number:");

// Convert inputs to numbers
let number1 = parseFloat(input1);
let number2 = parseFloat(input2);
let number3 = parseFloat(input3);

// Call the function and display the result
let maximumNumber = findMax(number1, number2, number3);
console.log(`The maximum of ${number1}, ${number2}, and ${number3} is: ${maximumNumber}`);
