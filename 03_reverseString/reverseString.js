const reverseString = (text) => {
  const textLength = text.length - 1;
  let reverse = '';
  for(let i = 0; i <= textLength; i++) {
    reverse = reverse.concat(text[textLength - i]);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
