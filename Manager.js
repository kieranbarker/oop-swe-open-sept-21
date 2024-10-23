// Imports the Employee class.
const Employee = require("./Employee.js");

/**
 * A class that represents a manager.
 */
class Manager extends Employee {
  /** The manager's bonus. */
  #bonus = 0;

  /**
   * Gets the manager's salary.
   * @returns {number} The manager's salary.
   */
  getSalary() {
    return super.getSalary() + this.#bonus;
  }

  /**
   * Gets the manager's bonus.
   * @returns {number} The manager's bonus.
   */
  getBonus() {
    return this.#bonus;
  }

  /**
   * Sets the manager's bonus.
   * @param {number} bonus
   */
  setBonus(bonus) {
    if (typeof bonus !== "number") {
      throw new TypeError("Bonus must be a number.");
    }

    this.#bonus = bonus;
  }
}

// Exports the Manager class.
module.exports = Manager;
