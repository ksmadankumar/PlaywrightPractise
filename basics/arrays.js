// array - can store multiple values in a single variable
let fruits = ["apple", "banana", "orange"];
// console.log(fruits[0]); 
// console.log(fruits[1]); 
// console.log(fruits);

// we can store an array inside an object

let employee = {
    name: "Madankumar",
    age: 25,
    fruits : ["apple", "banana", "orange"]
};
console.log(employee.fruits[0]); 
console.log(employee.fruits[1]); 
console.log(employee.fruits);       

//array and using forloop to print the values of an array
var fruits1 = ["apple", "banana", "orange"];    
for (let fruit of fruits1) {
    console.log(fruit);
} 