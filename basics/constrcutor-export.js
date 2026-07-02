// Exporting a class from a module
export class Employee { 
    constructor(name, age, isStudent) { //constructor is a special method that is called when an object is created from the class
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    // functions or methods can be added to the class to perform actions on the objects created from the class

    printAGE() {
        console.log(this.age);
    }

    printName() {
        console.log(this.name);
    }

    printIsStudent() {
        console.log(this.isStudent);
    }
}   


