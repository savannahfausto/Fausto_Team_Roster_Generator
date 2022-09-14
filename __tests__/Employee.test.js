const Employee = require("../lib/Employee");

describe ('Employee', () =>{
    it('should return a new object of Employee', () => {
        const employee = new Employee();

        expect(typeof employee).toBe('object');
    });

    it('should set an employee name using a constructor function', () => {
        const name = 'Wanda';
        const employee = new Employee(name, 12, 'test@email.com');

        expect(employee.name).toBe(name);
    })

    it('should set an employee id using a constructor function', () => {
        const id = 12;
        const employee = new Employee('Wanda', id, 'test@email.com');

        expect(employee.id).toBe(id);
    })

    it('should set an employee email using a constructor function', () => {
        const email = 'testemail@email.com';
        const employee = new Employee('Wanda', 12, email);

        expect(employee.email).toBe(email);
    })

    describe('getID', () => {
        it('should return the Employee object id', () => {
            const id = 12;
            const employee = new Employee('Wanda', id, 'test@email.com');

            expect(employee.getId()).toBe(id)

        })
    })

    describe('getEmail', () => {
        it('should return the Employee object email', () => {
            const email = 'testemail@email.com';
            const employee = new Employee('Wanda', 12, email);

            expect(employee.getEmail()).toBe(email)

        })
    })

    describe('getRole', () => {
        it('should return the string "Employee" ', () => {
            const string = 'Employee';
            const employee = new Employee('Wanda', 12, 'test@email.com');

            expect(employee.getRole()).toBe(string)
        })
    })
})