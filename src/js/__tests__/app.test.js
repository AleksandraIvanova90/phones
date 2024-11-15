import cleanPhoneNumber from '../app.js';

test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['(927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
])('Phone Check', (number, expectedResult) => {
    expect(cleanPhoneNumber(number)).toBe(expectedResult);
});