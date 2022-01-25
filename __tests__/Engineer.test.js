const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('creates engineer obj', () => {
    const engineer = new Engineer('ian', 99, 'wiffin@ian.com', 'wiffin');

    expect(engineer.name).toBe('ian');
    expect(engineer.id).toBe(99);
    expect(engineer.email).toBe('wiffin@ian.com');
    expect(engineer.github).toBe('wiffin');
});