// Imports the Employee and Manager classes.
const Employee = require("./Employee.js");
const Manager = require("./Manager.js");

// Creates a Manager object and sets its bonus.
const employee0 = new Manager("Carl Cracker", 75_000);
employee0.setBonus(5000);

// Creates two Employee objects.
const employee1 = new Employee("Harry Hacker", 50_000);
const employee2 = new Employee("Tony Tester", 40_000);

// Fills an array with a mix of Manager and Employee objects.
const staff = [employee0, employee1, employee2];

// Raises everyone's salary by 5%.
for (const employee of staff) {
  employee.raiseSalary(5);
}

// Prints out each employee's salary. The JavaScript interpreter figures out
// whether it should call the getSalary() method of the Employee class or the
// Manager class. This is an example of polymorphism!
for (const employee of staff) {
  console.log(employee.getSalary());
}
