//require employee parent class to extend for Engineer
const Employee = require('./Employee.js');
//class Engineer is extension of Employee; it has access to all of Employee properties plus the ones denoted here
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
  }
  
  module.exports = Engineer;