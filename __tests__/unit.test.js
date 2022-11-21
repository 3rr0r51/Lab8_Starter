// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber Tests
test('test (541)754-3010', () => {
    expect(functions.isPhoneNumber("(541)754-3010")).toBe(true);
  });

test('test international phone number format', () => {
    expect(functions.isPhoneNumber("+1-541-754-3010")).toBe(true);
});

test('test 9 digit number', () => {
    expect(functions.isPhoneNumber("5417543010")).toBe(false);
});

test('test letters in phone number', () => {
    expect(functions.isPhoneNumber("541a543010")).toBe(false);
});

// isEmail tests
test('test sample email', () => {
    expect(functions.isEmail("toilet@ucsd.edu")).toBe(true);
  });

test('test sample email', () => {
    expect(functions.isEmail("joinus@tritonrobotics.com")).toBe(true);
});

test('test forgot @', () => {
    expect(functions.isEmail("toiletgmail.edu")).toBe(false);
});

test('test no domain', () => {
    expect(functions.isEmail("toilet@")).toBe(false);
});


// test isStrongPassword
/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
test('test sample password', () => {
    expect(functions.isStrongPassword("Garv3ySD")).toBe(true);
});

test('test short but valid password', () => {
    expect(functions.isStrongPassword("Beff")).toBe(true);
});

test('test too short password', () => {
    expect(functions.isStrongPassword("a")).toBe(false);
});

test('test invalid characters in pw', () => {
    expect(functions.isStrongPassword("G@rv3ySD")).toBe(false);
});


// test isDate
test('test sample date', () => {
    expect(functions.isDate("11/20/2022")).toBe(true);
});

test('test short date', () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
});

test('flipped date', () => {
    expect(functions.isDate("2022/20/11")).toBe(false);
});

test('test invalid date', () => {
    expect(functions.isDate("quertyKeyboard")).toBe(false);
});

// test isHexColor
test('test sample Hex', () => {
    expect(functions.isHexColor("BEEEEF")).toBe(true);
});

test('test 3 digit Hex', () => {
    expect(functions.isHexColor("AAA")).toBe(true);
});

test('test invalid Hex Digits', () => {
    expect(functions.isHexColor("1GD46A")).toBe(false);
})

test('test invalid hex Length', () => {
    expect(functions.isHexColor("BEEEEEF")).toBe(false);
});