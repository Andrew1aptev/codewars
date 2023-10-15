function sumPositive(arr){
    return arr.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue
    }, 0)
}

console.log(sumPositive([1,2,4,5,6]));