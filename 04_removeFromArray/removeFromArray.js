const removeFromArray = function() {
    let array = arguments[0];
    let newarray = [];
    let filter = [];

    for (i = 1; i < arguments.length; i++) {
        filter.push(arguments[i])
    }

    array.forEach(element => {
        if (!filter.includes(element)) {
            newarray.push(element);
        }
    });
    return newarray;
}
console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
