function squareSum(numbers) {
    let arr = []
    numbers.forEach(element => {
        arr.push(Math.pow(element, 2))
    });
    const sum = arr.reduce((a,b)=>{
        return a + b
    })
    return sum
}

console.log(squareSum([2,2,2]));