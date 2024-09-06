/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        result = String.fromCharCode((columnNumber - 1) % 26 + 65) + result;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return result;
};