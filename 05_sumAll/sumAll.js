const sumAll = function(...numbersToSum) {
    let sum = 0;
    numbersToSum.sort();
    if (Number.isInteger(numbersToSum[0]) && Number.isInteger(numbersToSum[1]) && numbersToSum[0] > 0 && numbersToSum[1] > 0) {
        for (let i = numbersToSum[0]; i <= numbersToSum[1]; i++)
            sum = sum + i;
        }
    else {
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
