const fibonacci = function(fibNum, prev = 0, prevprev = 0) {
    fibNum = parseFloat(fibNum);
    if (fibNum <0 ) {
        return "OOPS";
    }
    if (fibNum == 0) {
        return 0;
    }
    if (fibNum == 1) {
        return 1;
    }
    if (fibNum == 2) {
        return 1;
    }
    prev = fibonacci(fibNum - 1);
    prevprev = fibonacci(fibNum - 2);
    return prev + prevprev;
};

// Do not edit below this line
module.exports = fibonacci;
