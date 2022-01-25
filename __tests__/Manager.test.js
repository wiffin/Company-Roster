const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates manager obj', () => {
    const manager = new Manager('ian', 99, 'wiffin@ian.com', 10);

    expect(manager.name).toBe('ian');
    expect(manager.id).toBe(99);
    expect(manager.email).toBe('wiffin@ian.com');
    expect(manager.officeNumber).toBe(10);
});