const removeFromArray = (array, ...valuesToRemove) => {
  // If item = true in .filter, it's included in a new array.
  // filter checks each element inside of array, then
  // for each item, it's NOT included the item, it's added to the
  // new array that is going to be returned
  return array.filter(item => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
