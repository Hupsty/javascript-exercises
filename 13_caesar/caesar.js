const caesar = function(str, key) {
    let uni = [];
    key = key % 26;
    for (let i = 0; i < str.length; i++) {
        uni[i] = str.charCodeAt(i);
        if ((uni[i] > 31 && uni [i] < 65) || (uni[i] > 90 && uni[i] < 97)) {
            continue;
        }
        if (uni[i] < 91) {
            uni [i] += key;
            if (uni[i] > 90) {
                uni[i] -= 26;
            }
            if (uni[i] < 65) {
                uni[i] += 26;
            }
            continue;
        }
        uni [i] += key;
        if (uni[i] > 122) {
            uni[i] -= 26;
        }
        if (uni[i] < 97) {
            uni[i] += 26;
        }
        continue;
    }
    let x = [];
    for (let i = 0; i < uni.length; i++) {
        x[i] = String.fromCharCode(uni[i]);
    }
    return x.join('');
};
    
// Do not edit below this line
module.exports = caesar;
