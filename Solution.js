
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    let isNumber = function (n) {
        return isNaN(n) === false;
    };

    const letters = [];
    const repetitions = [];
    let currentString = "";
    let size = s.length;
    let repeat = 0;
    const ascii_0 = 48;


    for (let i = 0; i < size; i++) {

        let ch = s.charAt(i);

        if (isNumber(ch)) {
            repeat = repeat * 10 + (ch.codePointAt(0) - ascii_0);

        } else if (ch === '[') {
            repetitions.push(repeat);
            letters.push(currentString);
            currentString = "";
            repeat = 0;

        } else if (ch === ']') {
            let temp = letters.pop();
            let repeatString = repetitions.pop();
            while (repeatString-- > 0) {
                temp = temp.concat(currentString);
            }
            currentString = temp;
        } else {
            currentString = currentString.concat(ch);
        }
    }
    return currentString;
};
