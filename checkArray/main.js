function check (array, item){
    for(let i = 0; i < array.length; i++){
        if(array[i] === item){
            return true
        }
    }
    return false
}

console.log(check([1,2,3,5], 5));