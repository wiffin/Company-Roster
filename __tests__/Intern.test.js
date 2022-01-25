const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('creates Intern obj', () => {
    const intern = new Intern('ian', 99, 'wiffin@ian.com', 'UofT');

    expect(intern.name).toBe('ian');
    expect(intern.id).toBe(99);
    expect(intern.email).toBe('wiffin@ian.com');
    expect(intern.school).toBe('UofT');
});