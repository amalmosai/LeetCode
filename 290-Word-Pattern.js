/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    
    if (pattern.length !== words.length) {
        return false;
    }

    const patternToWord = new Map();
    const wordToPattern = new Map();

       for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];
        
        if (patternToWord.has(p)) {
            if (patternToWord.get(p) !== w) {
                return false;
            }
        } else {
            if (wordToPattern.has(w)) {
                return false;
            }
            patternToWord.set(p, w);
            wordToPattern.set(w, p);
        }
    }

    return true;
};