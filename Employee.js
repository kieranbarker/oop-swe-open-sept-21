/**
 * A class that represents an employee.
 */
class Employee {
  /**
   * Creates a new Employee object.
   * @param {string} name The employee's name.
   * @param {number} salary The employee's salary.
   */
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  /**
   * Raises an employee's salary by a percentage.
   * @param {number} byPercent The percentage increase.
   */
  raiseSalary(byPercent) {
    const raise = this.salary * (byPercent / 100);
    this.salary += raise;
  }
}

// Exports the Employee class.
module.exports = Employee;
