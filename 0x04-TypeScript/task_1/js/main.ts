class Teacher {
  constructor(firstName, lastName, fullTimeEmployee, location, yearsOfExperience = null) {
    // Validate required attributes
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
      throw new Error('firstName and lastName must be strings.');
    }
    if (typeof fullTimeEmployee !== 'boolean') {
      throw new Error('fullTimeEmployee must be a boolean.');
    }
    if (typeof location !== 'string') {
      throw new Error('location must be a string.');
    }

    // Initialize required attributes
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;

    // Initialize optional attributes
    if (yearsOfExperience !== null) {
      this.yearsOfExperience = yearsOfExperience;
    }

    // Initialize additional attributes
    this._additionalAttributes = {};
  }

  // Method to add additional attributes dynamically
  addAttribute(name, value) {
    this._additionalAttributes[name] = value;
  }

  // Method to get additional attributes
  getAttribute(name) {
    return this._additionalAttributes[name];
  }

  // Optional: Method to get all attributes including additional ones
  getAllAttributes() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      fullTimeEmployee: this.fullTimeEmployee,
      location: this.location,
      yearsOfExperience: this.yearsOfExperience,
      ...this._additionalAttributes
    };
  }
}

// Example usage
const teacher = new Teacher('John', 'Doe', true, 'New York', 5);
teacher.addAttribute('contract', true);
console.log(teacher.getAllAttributes());