// > < >= <= == != === !==
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 5); // true
console.log(10 <= 5); // false
console.log(10 == 5); // false
console.log(10 != 5); // true
console.log(10 === 5); // false
console.log(10 !== 5); // true
// == & === are used for comparison. The difference is that == checks for value equality, while === checks for both value and type equality. For example:
console.log(10 == "10");    // true, because the value of 10 and "10" are equal
console.log(10 === "10");   // false, because the value of 10 and "10" are equal but their types are different (number vs string)   