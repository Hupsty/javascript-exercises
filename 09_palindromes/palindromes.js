const palindromes = function (...inputStr) {
    let strUpper = inputStr.map(str => str.toUpperCase());
    strUpper = strUpper.toString();
    strUpper = strUpper.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")
    //for (let i = 0; i <= strUpper.length; i++)
      //  if (strUpper.charCodeAt(i) > 90 || strUpper.charCodeAt(i) < 65) {
        //    let strArray = strUpper.split('');
          //  let A = strArray.slice(0, i);
            //let B = strArray.slice(i + 1, strUpper.length);
            //strUpper = strArray.toString();
        //}
    console.log(strUpper);
    for (let i = 0; i < (strUpper.length / 2) - 1; i++) {
        if (strUpper[i] == strUpper[strUpper.length - i - 1]) {
            continue;
        }
        return false;
    }
    return true;
};

// A 65 Z 90
// Do not edit below this line
module.exports = palindromes;
