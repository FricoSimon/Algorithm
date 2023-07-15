const arr = [4, 6, 7, 1, 5];
const arr1 = [4, 6, 7, 1, 5];

// find the smallest value in an array
const findSmallest = (arr) => {
    let smallest = arr[0];
    let index = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            index = i;
        }
    }
    return index;
}
// send an array to the findSmallest function
// loop through the array
// check if the current array item is less than the smallest value
// if it is, set the smallest value to the current array item
// if it is, set the index to the current array item
// return the index

// find the biggest value in an array
const findBiggest = (arr) => {
    let biggest = arr[0];
    let index = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
            index = i;
        }
    }
    return index;
}
// send an array to the findBiggest function
// loop through the array
// check if the current array item is greater than the biggest value
// if it is, set the biggest value to the current array item
// if it is, set the index to the current array item
// return the index

// selection sort
const selectionArrMin = (arr) => {
    const copyArr = [...arr];
    const newArr = [];

    while (copyArr.length > 0) {
        const smallestIndex = findSmallest(copyArr);
        const smallest = copyArr.splice(smallestIndex, 1)[0];
        newArr.push(smallest);
    }

    return newArr;
}
// send an array to the selectionArrMin function
// create a new array
// loop through the array
// find the smallest value in the array
// remove the smallest value from the array
// push the smallest value to the new array
// return the new array

const selectionArrMax = (arr) => {
    const newArr = [];

    while (arr.length > 0) {
        const biggestIndex = findBiggest(arr);
        const biggest = arr.splice(biggestIndex, 1)[0];
        newArr.push(biggest);
    }

    return newArr;
}

console.log('Smallest value in array index: ' + findSmallest(arr));
console.log('Biggest value in array index: ' + findBiggest(arr));
console.log(selectionArrMin(arr));
console.log(selectionArrMax(arr));

// the problem is arr will be empty after the first loop
// so we need to make a copy of the array