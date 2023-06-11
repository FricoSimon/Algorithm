const listItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // array numbers

// binary tree function
const binaryTree = (list, item) => {
    let low = 0 // starting index
    let high = list.length - 1 // max index 

    while (low <= high) {
        let mid = Math.floor((low + high) / 2) // rounded to int
        let guess = list[mid] // first guess
        if (guess === item) {
            return mid
        } else if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return "Item not found"
}

console.log(binaryTree(listItems, 1));