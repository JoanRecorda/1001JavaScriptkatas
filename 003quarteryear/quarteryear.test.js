const quarterOf = require('./quarteryear');

test('given a month, return to which quarter of the year it belongs', () => {
    expect(quarterOf(6)).toBe(2);
})