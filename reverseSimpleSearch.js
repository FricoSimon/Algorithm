const listItem = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// reverse search function
const reverseSearch = (list, item) => {
    let index = list.length - 1;
    let max = list[index];

    while (index >= 0) {
        if (max === item) {
            return index;
        }
        index--;
        max = list[index];
    }
    return "Not found!";
}

console.log(reverseSearch(listItem, 5));

// first send an array
// function will get array and the item to search for
// find from last array item to first array item index 0
// check if item is greater than or equal to the 0 index item
// if it is, check if it is equal to the item to search for
// if it is, return the index
// if it is not, decrement the index and check the next item
// if it is not, return "Not found"
// the array should be sorted first 