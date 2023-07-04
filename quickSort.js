const arr = [4, 7, 9, 5, 6, 2, 3, 1];

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const pivot = arr[arr.length - 1]

    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= pivot) {
            greater.push(arr[i])
        } else {
            less.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr));
