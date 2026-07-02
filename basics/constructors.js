// class - a blueprint for creating objects with similar properties and methods
class Employee {
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

// creating objects from the class
let employee1 = new Employee("Madankumar", 25, true);
let employee2 = new Employee("Subramanian", 30, false);

employee1.printName();
employee1.printAGE();
employee1.printIsStudent();

employee2.printName();
employee2.printAGE();
employee2.printIsStudent(); 