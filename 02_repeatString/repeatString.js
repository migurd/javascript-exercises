const repeatString = (text, times) => {
  let result = '';
  if(times < 0) return 'ERROR'
  for(let i = 1; i <= times; i++) {
    result = result.concat(text);
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
