const removeExclMarks = require('./removeexclamation');

test('given an array remove exclamation marks', () => {
    expect(removeExclMarks("Hola Dr!")).toBe("Hola Dr");
})