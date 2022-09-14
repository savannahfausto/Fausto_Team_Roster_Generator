const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an object Intern', () => {
        const intern = new Intern();

        expect(typeof intern).toBe('object');
    });

    it('should set the Intern schoolName', () => {
        const schoolName = 'UC Berkeley';
        const intern = new Intern('sav', 12, 'test@email', schoolName);

        expect(intern.schoolName).toBe(schoolName);
    });
    
    describe('getSchool', () => {
        it('should return the Intern object schoolName', () => {
            const schoolName = 'UC Berkeley';
            const intern = new Intern(schoolName);

            expect(intern.schoolName).toBe(schoolName);
        })
    })

    describe('getRole', () => {
        it('should return the string "Intern"', () => {
            const string = 'Intern';
            const intern = new Intern(string);

            expect(intern.getRole()).toBe(string);
        })
    })
})