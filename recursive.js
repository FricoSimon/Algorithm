// countdown recursive function
const countDown = (number) => {
    console.log(number);

    if (number <= 0) {
        // base case
        return;
    } else {
        // recursive call
        countDown(number - 1);
    }
}

// countDown(3);

// countup recursive function
const countUp = (number, max) => {
    let sum = number + 1;
    let result = number + sum
    console.log(result);

    if (result > max) {
        return;
    } else {
        add(number + 1, max)
    }
}

// countUp(0, 6)

const exponent = (base, exp) => {
    if (exp === 0) {
        return 1;
    } else {
        const result = base * exponent(base, exp - 1);
        console.log(result);
        return result;
    }
}

exponent(2, 3);


