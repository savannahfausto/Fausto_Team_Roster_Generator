//require employee parent class to extend for Intern
const Employee = require('./Employee.js');
//class Intern is extension of Employee; it has access to all of Employee properties plus the ones denoted here
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
      //practice functionality of classes
      // this.schoolEmail = `${name.replace(" ", "_")}.${school}@myjob.net`
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern'; 
    }
  }
  
  module.exports = Intern;