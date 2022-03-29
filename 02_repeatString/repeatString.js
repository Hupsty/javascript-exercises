const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    }
    if (num == 0) {
        return '';
    }
    if (num == 1) {
        return str;
    }
    let addstr = str;
    for (let i = 1; i < num; i++){
        str = str + addstr;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
