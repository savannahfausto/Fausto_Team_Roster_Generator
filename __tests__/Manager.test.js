const { it } = require('node:test');
const { describe } = require('yargs');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should create an object Manager', () => {
        const manager = new Manager();

        expect(typeof(manager).toBe('object'));
    });

    it('should set the Manager office number', () => {
        const officeNum = 4343;
        const manager = new Manager(officeNum);

        expect(manager.officeNum).toBe(officeNum);
    });
    
    describe('getOfficeNumber', () => {
        it('should return the Manager object officeNumber', () => {
            const officeNum = 4343;
            const manager = new Manager(officeNum);

            expect(manager.getOfficeNumber()).toBe(officeNum);
        })
    })

    describe('getRole', () => {
        it('should return the string "Manager"', () => {
            const string = 'Manager';
            const manager = new Manager(string);

            expect(manager.getRole()).toBe(string);
        })
    })
})