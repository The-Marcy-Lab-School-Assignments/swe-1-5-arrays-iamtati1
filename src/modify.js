const uppercaseAll = (...words) => {
  return words.map(word => word.toUpperCase());
};

console.log(uppercaseAll("hello", "there", "tati", "how", "are", "you"));

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;

  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
