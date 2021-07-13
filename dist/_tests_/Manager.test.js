const Manager = require('../lib/Manager');

// creates manager
test('creates manager', () => {
    const manager = new Manager('Justin', 39, 'justin.m.long@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role
test('gets role', () => {
    const manager = new Manager('Justin', 39, 'justin.m.long@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 