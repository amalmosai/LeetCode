/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);
    const diffInMs = Math.abs(date2Obj - date1Obj);
    const diffInDays = Math.ceil(diffInMs / (1000 * 3600 * 24));
    return diffInDays;
};