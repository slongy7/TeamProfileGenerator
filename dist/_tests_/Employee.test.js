// const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('employee object', () => {
    const employee = new Employee('Justin', 39, 'justin.m.long@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// gets name
test('employee name', () => {
    const employee = new Employee('Justin', 39, 'justin.m.long@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id 
test('employee ID', () => {
    const employee = new Employee('Justin', 39, 'justin.m.long@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails
test('employee email', () => {
    const employee = new Employee('Justin', 39, 'justin.m.long@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role
test('gets role of employee', () => {
    const employee = new Employee('Justin', 39, 'justin.m.long@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 