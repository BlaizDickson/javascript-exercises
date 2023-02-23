function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  let str = "";

  let reversedStr = reverseString(str);
// Do not edit below this line
module.exports = reverseString;
