const abbrevName = require('./abbreviatename');

test('convert a name into initials with a dot separating them', () => {
    expect(abbrevName("Joan Recordà")).toBe("J.R");
})