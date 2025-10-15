/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.splice(0, arr.length);
};

const nums = [1, 2, 3];
clearArr(nums);
console.log(nums); // → []


const getFirstItem = (array = []) => {
  return array[0];
};

console.log(getFirstItem([5, 6, 7, 8]));

module.exports = {
  clearArr,
  getFirstItem,
};
