// Imports the Employee class.
const Employee = require("./Employee.js");

// Creates three Employee objects.
const employee0 = new Employee("Carl Cracker", 75_000);
const employee1 = new Employee("Harry Hacker", 50_000);
const employee2 = new Employee("Tony Tester", 40_000);

// Fills an array with the three Employee objects.
const staff = [employee0, employee1, employee2];

// Raises everyone's salary by 5%.
for (const employee of staff) {
  employee.raiseSalary(5);
}

// Prints out some information about each employee.
for (const employee of staff) {
  console.log("name = " + employee.name + ", salary = " + employee.salary);
}
