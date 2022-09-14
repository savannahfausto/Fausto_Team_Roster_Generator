const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create an object Engineer', () => {
        const engineer = new Engineer();

        expect(typeof engineer).toBe('object');
    });

    it('should set the engineer gitHub username', () => {
        const githubName = 'Wanda-2';
        const engineer = new Engineer('Wanda', 12, 'test@email.com', githubName);

        expect(engineer.github).toBe(githubName);
    });
    
    describe('getGithub', () => {
        it('should return the Engineer object github', () => {
            const githubName = 'Wanda-2';
            const engineer = new Engineer('Wanda', 12, 'test@email.com', githubName);

            expect(engineer.github).toBe(githubName);
        })
    })

    describe('getRole', () => {
        it('should return the string "Engineer"', () => {
            const string = 'Engineer';
            const engineer = new Engineer('Wanda', 12, 'test@email.com', 'Wanda-2');

            expect(engineer.getRole()).toBe(string);
        })
    })
})