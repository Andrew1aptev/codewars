function sum(numbers) {
    "use strict";

    let result = 0;

    for(let number of numbers){
        if(typeof number !== 'number'){
            return 0;
        }
        result += number;
    }
    return result

};

console.log(sum([1, 5.2, 4, 0, -1]));