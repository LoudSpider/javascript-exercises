const repeatString = function(s, times) {
    let result = "";

    if (times < 0) {
        return "ERROR";
    }

    for (i = 0; i < times; i++) {
        result += s
    }
    return result;
};

console.log(repeatString("hey", 3))

// Do not edit below this line
module.exports = repeatString;
