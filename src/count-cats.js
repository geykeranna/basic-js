const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  let array = ['^^'];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (array[0] === matrix[i][j]) 
        count++;
    }
  }
  return count;
};
