const Engineer = require('../lib/Engineer');


test('creates an Engineer object', () => {
    const engineer = new Engineer('Justin', 39, 'justin.m.long@gmail.com', 'slongy7');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// github
test('gets engineer github value', () => {
    const engineer = new Engineer('Justin', 39, 'justin.m.long@gmail', 'slongy7');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// role
test('gets role of employee', () => {
    const engineer = new Engineer('Justin', 39, 'justin.m.long@gmail.com', 'slongy7');

    expect(engineer.getRole()).toEqual("Engineer");
});