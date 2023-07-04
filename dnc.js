// divide and conquer

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum(arr));

// with loop

const sumRecursive = (arr, index = 0) => {
    if (index >= arr.length) return 0;

    return arr[index] += sumRecursive(arr, index + 1);
}

console.log(sumRecursive(arr));

// with recursion