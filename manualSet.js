// Set is a collection of unique elements. It is unordered.
// create a manual set and automatic set 

const array = [1, 3, 7, 4, 6, 3, 7, 9, 4];

// automatic set using built-in feature in JS
const set = new Set(array);
console.log(set);

// manual set in JS
const manualSet = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(manualSet(array));