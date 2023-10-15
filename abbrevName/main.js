function abbrevName(name) {

    let arr = name.split(' ')
    const firstLetters = arr.map((name) => name.slice(0,1));
    return firstLetters.join('.').toUpperCase()
}

console.log(abbrevName('Andrew Laptev'));