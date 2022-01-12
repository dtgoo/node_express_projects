const tasks = require('./tasks');

function sum(a,b) {
    return a + b;
}

test('adds 2 variables', () => {
    expect(tasks.getTask(1,2)).toBe(3);
})


