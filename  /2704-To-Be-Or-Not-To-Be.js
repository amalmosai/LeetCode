/**
 * @param {string} val
 * @return {Object}
 */
function expect (val) {
    return{
        toBe(val2){
            if(val2 === val){
                return true;
            } 
             throw new Error (`Not Equal`);
        },
        notToBe(val2){
            if(val2 !== val){
               return true;  
            } 
            throw new Error (`Equal`);
        }
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */