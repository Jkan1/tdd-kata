// calculator.js

/** 
 * Function to calculate the sum of numbers in string
 */
function add(numbers) {
    if (numbers === '') {
        return 0;
    }

    /** Initialize delimiter */
    let delimiter = ',';

    /** Update delimiter */
    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEndIndex);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    /** Get all numbers */
    const nums = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

    /** Check for -ve numbers */
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    /** Calculate sum of numbers */
    return nums.reduce((acc, num) => acc + num, 0);
}

module.exports = add;
