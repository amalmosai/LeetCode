/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
    let curr = init;
    return{
        increment(){
           return ++curr;
        },
        decrement(){
            return --curr;
        },
        reset(){
            return curr = init;
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */