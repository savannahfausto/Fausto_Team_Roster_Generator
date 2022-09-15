//require employee parent class to extend for Manager
const Employee = require('./Employee');
//class Manager is extension of Employee; it has access to all of Employee properties plus the ones denoted here
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
  }

module.exports = Manager;
  

  