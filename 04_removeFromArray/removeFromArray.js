const removeFromArray = function(array, ...removing) {
    let length = removing.length;
    for (let i = 1; i <= length; i++) {
        let removalSelector = removing.shift();
        let j = 0;
        for (const selected of array) { // Cycle through each item in array 
            if (selected === removalSelector) { // if thing to remove is found at position j in 
                array.splice(j, 1);
            }
            j++;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
