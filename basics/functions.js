// functions - store block of code & re-use it when needed
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Madankumar");

 // function- pass two var and add them and return the result.

 function add(a, b) {
    return a + b;
}
let result = add(5, 3);
console.log(result);

function printResult(s) { // function to print the result from the add function.
    console.log(s);
}

printResult(result);

// Arrow functions - remove the keyword function and use => to define the function
let testresults = () => {
    console.log("Test results are good");
};
testresults();