// Assuming the Teacher class is defined as follows:
class Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  private _additionalAttributes: { [key: string]: any } = {};

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
      throw new Error('firstName and lastName must be strings.');
    }
    if (typeof fullTimeEmployee !== 'boolean') {
      throw new Error('fullTimeEmployee must be a boolean.');
    }
    if (typeof location !== 'string') {
      throw new Error('location must be a string.');
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;

    if (yearsOfExperience !== undefined) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }

  addAttribute(name: string, value: any): void {
    this._additionalAttributes[name] = value;
  }

  getAttribute(name: string): any {
    return this._additionalAttributes[name];
  }

  getAllAttributes(): { [key: string]: any } {
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

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}