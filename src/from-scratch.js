const addToFrontOrBack = (arr, value, isFront) => {

  if (isFront) {
    arr.unshift(value); // adds to the front
  } else {
    arr.push(value); // adds to the end
  }
};
const array = [1, 2, 3, 4, 5];
addToFrontOrBack(array, 4, true);
console.log(array);

const reverseString = (str) => {
  return str
    .split('')
    .reverse()
    .join('');
};
console.log(reverseString('hello'));

const newArrayFullOf = (value, numOfValue) => {
  return new Array(numOfValue).fill(value);
};

// Now call it and log results:
const arr = newArrayFullOf(1, 5);
console.log(arr); // [1, 1, 1, 1, 1]

const arr2 = newArrayFullOf(true, 2);
console.log(arr2); // [true, true]

console.log(newArrayFullOf(1, 4));

const insertIntoMiddle = (arr, value) => {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 0, value);
};
const numbers = [1, 2, 3, 4];
insertIntoMiddle(numbers, "hi");
console.log(numbers);


const deleteFromMiddle = (arr) => {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 1) //means delete 1 element at the middle index
};

const number = [1, 2, 3, 4, 5];
deleteFromMiddle(number);
console.log(number);

deleteFromMiddle;


const isRightIndex = (arr, value, index) => {
  return arr[index] === value; // === checks both value and type
};
console.log(isRightIndex([1, 2, 3], 2, 1));// checks if the value is at 2 at index 1
console.log(isRightIndex([1, 2, 3], 5, 0));


const roundAllNumsDown = (arr) => {
  return arr.map((num) => Math.floor(num));
};
const decimalNumbers = [2.5, 9.4, 1.4, 3.7];
const rounded = roundAllNumsDown(decimalNumbers);

console.log(rounded);
console.log(decimalNumbers);

roundAllNumsDown([2.5, 9.4, 1.4, 3.7]);

const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(coord => coord[1]);
};

console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]]));
console.log(getAllYCoordinates([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(getAllYCoordinates([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
