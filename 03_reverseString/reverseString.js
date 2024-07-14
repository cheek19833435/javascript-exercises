const reverseString = function(str) {
    strArr = str.split("")
    strArr = strArr.reverse()
    // .join("") removes , in Array and returns string
    str = strArr.join("")
    return str
};

// Do not edit below this line
module.exports = reverseString;
