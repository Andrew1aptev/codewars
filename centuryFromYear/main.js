function century(year) {
    let century = 1;
    while (year >= 101) {
        year -= 100
        century++
    }
    return century
}

console.log(century(1530));