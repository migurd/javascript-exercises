const sumAll = (a, b) => {
  let sum = 0;
  // Verify both are integers, and positive
  if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
  if(a < 0 || b < 0) return 'ERROR';
  // Checking which one is going to go first, either a or b
  if(a < b) {
    for(a = a; a <= b; a++) {
      sum += a;
    }
  }
  else {
    for(b = b; b <= a; b++) {
      sum += b;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
