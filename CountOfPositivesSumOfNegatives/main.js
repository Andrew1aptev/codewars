function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }

    let positive = [];
    let negative = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positive.push(input[i]);
        } else {
            negative.push(input[i]);
        }
    }

    const negativeSum = negative.reduce((a, b) => {
        return a + b;
    }, 0);

    return [positive.length, negativeSum];
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// нужно узнать количество положительных чисел
// и сумму отрицательных