function countSheeps(sheep) {
    let result = 0;
    sheep.forEach(element => {
        if(element === true){
            result = result + 1
        }
    });
    return result
}

console.log(countSheeps(
    [true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true]));