// calculator.test.js

const add = require('./calculator');

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });
});