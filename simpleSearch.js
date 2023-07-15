const listItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// simple search function
const simpleSearch = (list, item) => {
    let index = 0
    let first = list[index]

    while (first <= item) {
        if (first === item) {
            return index
        }
        index++
        first = list[index]
    }
    return "Not found"
}

console.log(simpleSearch(listItems, 1));

// first send an array
// function will get array and the item to search for
// find from first array item to last array item
// check if item is less than or equal to the item to search for
// if it is, check if it is equal to the item to search for
// if it is, return the index
// if it is not, increment the index and check the next item
// if it is not, return "Not found"
// the array should be sorted first 