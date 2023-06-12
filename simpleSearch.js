const listItems = [1, 2, 3, 4, 5, 6, 7, 8, 9] // array numbers

// simple search function
const simpleSearch = (list, item) => {
    let index = 0 // starting index in array
    let first = list[index] // call the index in array

    while (first <= item) {
        if (first === item) {
            return first
        }
        index++
        first = list[index]
    }
    return "Not found"
}

console.log(simpleSearch(listItems, 9));