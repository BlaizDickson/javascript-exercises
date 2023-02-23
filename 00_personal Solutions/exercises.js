const helloWorld = function() {
    return 'Hello, World!'
  };
//for exercise 02 test 1-4
const repeatString = function() {
    const string = "hey";
  const repeatCount = 0;
  let repeatString = "";
  
  for (let i = 0; i < repeatCount; i++) {
    repeatString += string;
  };
  return repeatString;
};

//same as above in another way
function repeatString(str, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
      result += str;
    }
    return result;
  }
  let repeatedString = repeatString("hey", 0);
//for negative number use an if else statement
function repeatString(str, num) {
    if (num < 0) {
      return "ERROR";
    }
  
    let result = "";
    for (let i = 0; i < num; i++) {
      result += str;
    }
    return result;
  }
