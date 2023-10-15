function summation(num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    const sum = arr.reduce((a,b)=>{
        return a + b
    })
    return sum
}

console.log(summation(5));