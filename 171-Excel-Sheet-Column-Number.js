/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let charCode = columnTitle.charCodeAt(i) - 64;  
        result += charCode * Math.pow(26, columnTitle.length - 1 - i);
    }
    return result;
};