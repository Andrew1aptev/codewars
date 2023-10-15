function digitize(n) {
    return Array.from(n.toString(), Number).reverse()
}

console.log(digitize(4321));