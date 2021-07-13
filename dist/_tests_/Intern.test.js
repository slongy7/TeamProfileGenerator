const Intern = require('../lib/Intern');

// create intern 
test('creates intern', () => {
    const intern = new Intern('Justin', 39, 'justin.m.long@gmail.com', 'Miami of Ohio');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school
test('gets school', () => {
    const intern = new Intern('Justin', 39, 'justin.m.long@gmail.com', 'Miami of Ohio');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role
test('gets role', () => {
    const intern = new Intern('Justin', 39, 'justin.m.long@gmail.com', 'Miami of Ohio');

    expect(intern.getRole()).toEqual("Intern");
}); 