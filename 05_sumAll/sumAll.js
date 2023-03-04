function sumAll(start, end) {
  // Check if inputs are numbers and non-negative
  if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0) {
    return "ERROR";
  }
  
  let sum = 0;
  let increment = start <= end ? 1 : -1;
  
  for (let i = start; i !== end + increment; i += increment) {
    sum += i;
  }
  
  return sum;
}
// Do not edit below this line
module.exports = sumAll;
