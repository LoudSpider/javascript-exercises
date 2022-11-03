const reverseString = function(s) {
    let saveString = [];
    let result = "";

    for (i = 0; i < s.length; i++) {
        saveString.push(s.charAt(i));
    }

    saveString.reverse();

    for (i = 0; i < saveString.length; i++) {
        result += saveString[i]
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
