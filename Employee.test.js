// Imports some global functions from Jest.
const { describe, expect, it } = require("@jest/globals");

// Imports the Employee class.
const Employee = require("./Employee.js");

describe("new Employee()", function () {
  it("creates an Employee object", function () {
    // Arrange/Act
    const employee = new Employee("Carl Cracker", 75_000);

    // Assert
    expect(employee).toBeInstanceOf(Employee);
  });
});

describe("employee.getName()", function () {
  it("gets an employee's name", function () {
    // Arrange
    const employee = new Employee("Harry Hacker", 50_000);

    // Act
    const employeeName = employee.getName();

    // Assert
    expect(employeeName).toBe("Harry Hacker");
  });
});

describe("employee.getSalary()", function () {
  it("gets an employee's salary", function () {
    // Arrange
    const employee = new Employee("Tony Tester", 40_000);

    // Act
    const employeeSalary = employee.getSalary();

    // Assert
    expect(employeeSalary).toBe(40_000);
  });
});

describe("employee.raiseSalary()", function () {
  it("raises an employee's salary by a percentage", function () {
    // Arrange
    const employee = new Employee("Carl Cracker", 75_000);

    // Act
    employee.raiseSalary(4);

    // Assert
    expect(employee.getSalary()).toBe(78_000);
  });

  it("throws an error for a percentage <= 0", function () {
    // Arrange
    const employee = new Employee("Harry Hacker", 50_000);

    // Act
    function attemptNegativeRaise() {
      employee.raiseSalary(-4);
    }

    // Assert
    expect(attemptNegativeRaise).toThrow();
  });
});
