function repeat(s, n){
    let i = 0;
    let result = '';
    do{
        result = result + s;
        i++
    } while(i < n)
    return result
}
console.log(repeat('hello', 5));