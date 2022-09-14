const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create an object Engineer', () => {
        const engineer = new Engineer();

        expect(typeof (engineer).toBe('object'));
    });

    it('should set the engineer gitHub username', () => {
        const githubName = 'Wanda-2';
        const engineer = new Engineer(githubName);

        expect(engineer.githubName).toBe(githubName);
    });
    
    describe('getGithub', () => {
        it('should return the Engineer object github', () => {
            const githubName = 'Wanda-2';
            const engineer = new Engineer(githubName);

            expect(engineer.githubName).toBe(githubName);
        })
    })

    describe('getRole', () => {
        it('should return the string "Engineer"', () => {
            const string = 'Engineer';
            const engineer = new Engineer(string);

            expect(engineer.getRole()).toBe(string);
        })
    })
})