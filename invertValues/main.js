function invert(array) {
    let result = []
    array.forEach(element => {
        if(element <= 0){
            result.push(element * - 1)
        }
        if(element >= 0){
            result.push(element * - 1)
        }
    });
    return result;
}

console.log(invert([1,-2,3,4]));