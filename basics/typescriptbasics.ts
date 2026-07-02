// Typescript developed by Microsoft is a superset of JavaScript that adds static typing and other features to the language. It allows developers to catch errors at compile time, rather than at runtime, and provides better tooling and code organization. 
// TypeScript code is transpiled into JavaScript code that can run in any browser or JavaScript environment. It is widely used in web development, especially for building large-scale applications with complex codebases.
// No need to declare the type of a variable explicitly, TypeScript can infer the type based on the value assigned to it. This is known as type inference. For example, if you declare a variable and assign it a string value, TypeScript will automatically infer that the variable is of type string.
// Strictly typed: TypeScript is a strictly typed language, which means that variables must be declared with a specific type. This helps catch errors at compile time and makes the code more maintainable. For example, if you declare a variable as a string, you cannot assign a number to it without causing a type error.

let userName: string = "Madankumar"; // ensure that the variable userName is of type string, can't update it with Number or any other type
let userAge: number = 25; // ensure that the variable userAge is of type number, can't update it with String or any other type
let isStudent: boolean = true; // ensure that the variable isStudent is of type boolean, can't update it with String or any other type

function addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
let result: number = addTwoNumbers(5, 10); // ensure that the variable result is of type number, can't update it with String or any other type
console.log(`The result of adding two numbers is: ${result}`); // using concotenation to print the result of adding two numbers
