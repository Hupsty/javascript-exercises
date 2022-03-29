const reverseString = function(str) {
    let reverseStr = ''
    for (let i = 1; i <= str.length; i++) {
        reverseStr = reverseStr + str.substr(-i, 1);
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
