const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
      //practice functionality of classes
      this.schoolEmail = `${name.replace(" ", "_")}.${school}@myjob.net`
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
  }
  
  module.exports = Intern;