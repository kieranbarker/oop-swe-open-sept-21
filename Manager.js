// Imports the Employee class.
const Employee = require("./Employee.js");

/**
 * A class that represents a manager.
 */
class Manager extends Employee {
  /** The manager's bonus. */
  bonus = 0;

  /**
   * Gets the manager's salary.
   * @returns {number} The manager's salary.
   */
  getSalary() {
    return this.salary + this.bonus;
  }
}

// Exports the Manager class.
module.exports = Manager;
