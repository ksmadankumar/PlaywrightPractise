import {Employee} from './constrcutor-export.js';

let employee1 = new Employee("Madankumar", 25, true);
let employee2 = new Employee("Subramanian", 30, false);

employee1.printName();
employee1.printAGE();
employee1.printIsStudent();

employee2.printName();
employee2.printAGE();
employee2.printIsStudent();
