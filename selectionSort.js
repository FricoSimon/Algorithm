const arr = [4, 6, 7, 1, 5]

const findSmallest = (arr) => {
    let smallest = arr[0]
    let index = 0

    for (i = 0; i <= smallest; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            index = i
        }
    }
    return index
}

const findBiggest = (arr) => {
    let biggest = arr[0]
    let index = 0

    for (i = 0; i <= biggest; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i]
            index = i
        }
    }
    return index
}

const selectionArrMin = (arr) => {
    const newArr = [];

    while (arr.length > 0) {
        const smallestIndex = findSmallest(arr);
        const smallest = arr.splice(smallestIndex, 1)[0];
        newArr.push(smallest);
    }

    return newArr;
}

console.log('Smallest value in array index: ' + findSmallest(arr));
console.log('Biggest value in array index: ' + findBiggest(arr));
console.log(selectionArrMin(arr));