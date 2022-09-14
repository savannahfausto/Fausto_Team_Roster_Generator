const Employee = require("..lib/Employee");

describe ('Employee', () =>{
    it('should return a new object of Employee', () => {
        const employee = new Employee();

        expect(typeof (employee)).toBe('object');
    });

    it('should set an employee name using a constructor function', () => {
        const name = 'Wanda';
        const employee = new Employee(name);

        expect(employee.name).toBe(name);
    })

    it('should set an employee id using a constructor function', () => {
        const id = 001;
        const employee = new Employee(id);

        expect(employee.id).toBe(id);
    })

    it('should set an employee email using a constructor function', () => {
        const email = 'testemail@email.com';
        const employee = new Employee(email);

        expect(employee.email).toBe(email);
    })

    describe('getID', () => {
        it('should return the Employee object id', () => {
            const id = 001;
            const employee = new Employee(id);

            expect(employee.getId().toBe(id))

        })
    })

    describe('getEmail', () => {
        it('should return the Employee object email', () => {
            const email = 'testemail@email.com';
            const employee = new Employee(email);

            expect(employee.getEmail().toBe(email))

        })
    })

    describe('getRole', () => {
        it('should return the string "Employee" ', () => {
            const string = 'Employee';
            const employee = new Employee(string);

            expect(employee.getRole().toBe(string))
        })
    })
})