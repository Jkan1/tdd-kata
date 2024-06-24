// calculator.test.js

const add = require('./calculator');

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    it('should return the number itself for a single number string', () => {
        expect(add('5')).toBe(5);
    });

    it('should return the sum of two numbers', () => {
        expect(add('2,3')).toBe(5);
    });

    it('should handle multiple numbers', () => {
        expect(add('1,2,3,4,5')).toBe(15);
    });

    it('should handle newline characters as delimiters', () => {
        expect(add('1\n2,3\n4,5')).toBe(15);
    });

    it('should handle delimiter change', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => add('1,-2,3,-4')).toThrow('Negatives not allowed: -2, -4');
    });
});
