const listItem = [1, 2, 3, 4, 5, 6, 7, 8, 9] // array number

const reverseSearch = (list, item) => {
    let index = parseInt(list.length - 1) // get the last index
    let max = list[index] // call the last index

    while (index >= 0) { // looping until the last index
        if (max === item) {
            return index
        }
        index--
        max = list[index]
    }
    return "Not found!"
}

console.log(reverseSearch(listItem, 1));