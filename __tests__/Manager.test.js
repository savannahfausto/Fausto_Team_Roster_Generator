const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should create an object Manager', () => {
        const manager = new Manager('sav', 12, 'test@email', 12);
        
        expect(typeof manager).toBe('object');
    });

    it('should set the Manager office number', () => {
        const officeNum = 4343;
        const manager = new Manager('sav', 12, 'test@email.com', officeNum);

        expect(manager.officeNumber).toBe(officeNum);
    });
    
    describe('getOfficeNumber', () => {
        it('should return the Manager object officeNumber', () => {
            const officeNum = 4343;
            const manager = new Manager('sav', 12, 'test@email.com', officeNum)

            expect(manager.getOfficeNumber()).toBe(officeNum);
        })
    })

    describe('getRole', () => {
        it('should return the string "Manager"', () => {
            const string = 'Manager';
            const manager = new Manager('sav', 12, 'test@email.com', 123);

            expect(manager.getRole()).toBe(string);
        })
    })
})