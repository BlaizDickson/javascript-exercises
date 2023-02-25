function removeFromArray(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
//const removeFromArray = function() {

// Do not edit below this line
module.exports = removeFromArray;
