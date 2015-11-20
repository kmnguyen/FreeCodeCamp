/**
 * Created by Khoi on 11/19/2015.
 */

// Define Roman numerals for appropriate numbers
var roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

var keys = Object.keys(roman); // Get all keys in roman object
var numString = []; // This will store part of the number to Roman numeral conversion

function convert(num) {
    var currentIndex = findRoman(num); // Find index of Roman numeral that is greater than or equal to [num]
    var romanNum = roman[keys[currentIndex]]; // Number of the Roman numeral retrieved

    if(num === romanNum){ // If input [num] is equal to [romanNum]
        numString.push(keys[currentIndex]); // Push respective Roman Numeral to [numString]
    } else if (currentIndex%2 === 1){ // If the index of [keys] list is odd which means Roman Numerals are [V, L, D] - [5, 50, 500]

        // Retrieve 4, 40 or 400 i.e IV, XL or CD
        var previousIndex = currentIndex - 1;
        var getMinusResult = getMinus(currentIndex, previousIndex);

        if(getMinusResult <= num){ // For example, [num] is 49 which is greater than 40
            numString.push(keys[previousIndex] + keys[currentIndex]); // Store 'XL' to [numString]
            checkDone(num, getMinusResult); // This will call convert(9) since 49 > 40 and 49 - 40 = 9
        } else { // For example, [num] is 36 which is less than 40
            var divide = num/roman[keys[previousIndex]]; // 36/10 = 3.6
            var size = Math.floor(divide); // this will be 3

            while(size){ // This will push 'X', 'X', 'X' to [numString]
                numString.push(keys[previousIndex]);
                size--;
            }

            checkDone(num, Math.floor(divide)*roman[keys[previousIndex]]); // This will call convert(6) since 36 > 30 and 36 - 30 = 6
        }
    } else {

        // Retrieve 9, 90 or 900 i.e IX, XC or CM
        var previousIndex = currentIndex - 2;
        var getMinusResult = getMinus(currentIndex, previousIndex);

        if(getMinusResult <= num){ // For example. [num] is 95 which is greater than 90
            numString.push(keys[previousIndex] + keys[currentIndex]); // Store XC to [numString]
            checkDone(num, getMinusResult); // This will call convert(5) since 95 > 90 and 95 - 90 = 5
        } else { // For example. [num] is 84 which is less than 90
            numString.push(keys[previousIndex+1]); // Store L to [numString]
            checkDone(num, roman[keys[currentIndex-1]]); // This will call convert(34) since 84 > 50 and 84 - 50 = 34
        }
    }
    return numString.join(''); // Call after all recursive are done
}

/**
 * Based on 2 indexes provided, this function will compute the remainder using the roman object defined in line 1
 *
 * @param index1 - index of first number
 * @param index2 - index of second number
 * @returns {number} - remainder
 */
function getMinus(index1, index2){
    return roman[keys[index1]] - roman[keys[index2]];
}

/**
 * This function will check whether the number input to function [convert] is equal to its Roman numeral.
 * If it's not then it will perform recursive call on function[convert]
 *
 * @param num1 - input parameter of function [convert]
 * @param num2 - its Roman counterpart
 */
function checkDone(num1, num2){
    if(num1 !== num2){
        convert(num1 - num2);
    }
}

/**
 * This function will go through roman object in line 1 and find the Roman numeral that
 * is greater than or equal to number input then return the index of the [keys] list.
 * [keys] list contains all of roman object's keys
 *
 * @param num - number to find Roman numeral
 * @returns {*}
 */
function findRoman(num) {
    for (var i = 0; i < keys.length; i++) {
        if (num <= roman[keys[i]]) {
            return i;
        }
    }
    return keys.length;
}

convert(29);
