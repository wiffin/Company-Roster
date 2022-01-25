const Employee = require("../lib/Employee")

test('create a employee obj', () => {
    const employee = new Employee('ian', 99, 'wiffin@ian.com');

    expect(employee.name).toBe('ian');
    expect(employee.id).toBe(99);
    expect(employee.email).toBe('wiffin@ian.com');
    
});