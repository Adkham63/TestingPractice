// Importing the functions to be tested from the main module
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index";

// Test case for the capitalize function
test('capitalizes first character of string', () => {
    expect(capitalize('please capitalize me')).toMatch(/Please capitalize me/);
});

// Test case for the reverseString function
test('reverses string', () => {
    expect(reverseString('reverse me')).toMatch(/em esrever/);
});

// Test cases for the calculator functions
test('calculator addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('calculator subtraction', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('calculator divide', () => {
    expect(calculator.divide(15, 3)).toBe(5);
});

test('calculator multiply', () => {
    expect(calculator.multiply(10, 3)).toBe(30);
});

// Test cases for the caesarCipher function
test('caesarCipher', () => {
    expect(caesarCipher('please encrypt me', 3)).toMatch('sohdvh hqfubsw ph');
});

test('caesarCipher', () => {
    expect(caesarCipher('All the zebras?! Escaped from the zoo?', 5)).toMatch('Fqq ymj ejgwfx?! Jxhfuji kwtr ymj ett?');
});

// Test cases for the analyzeArray function
test('analyzeArray average', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('analyzeArray min', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('analyzeArray max', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('analyzeArray length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
