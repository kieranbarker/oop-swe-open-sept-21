/**
 * A class that represents an employee.
 */
class Employee {
  /** The next available ID. */
  static nextId = 1;

  /**
   * Advances the next available ID.
   * @returns {number} The next available ID.
   */
  static advanceId() {
    const temp = Employee.nextId;
    Employee.nextId++;
    return temp;
  }

  /** The employee's automatically assigned ID. */
  id = Employee.advanceId();

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
   * Gets an employee's salary.
   * @returns {number} The employee's salary.
   */
  getSalary() {
    return this.salary;
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
