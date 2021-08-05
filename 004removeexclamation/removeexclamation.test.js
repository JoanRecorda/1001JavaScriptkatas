const removeExclamationMarks = require('./removeexclamation');

test('given an array remove exclamation marks', () => {
    expect(removeExclamationMarks("Hello World!")).toBe("Hello World");
})