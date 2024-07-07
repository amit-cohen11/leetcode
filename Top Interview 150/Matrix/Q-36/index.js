const isValidSudoku = (board) => {
  let rowIndex = 0;
  while (rowIndex < board.length) {
    if (
      !isValidRow(board[rowIndex]) ||
      !isValidColumn(board, rowIndex) ||
      !isValidRowBoxes(board, rowIndex)
    ) {
      return false;
    }
    rowIndex++;
  }
  return true;
};

const isValidRowBoxes = (board, rowIndex) => {
  if (rowIndex % 3 !== 0) {
    return true;
  }
  for (let boxIndex = 0; boxIndex < board[0].length; boxIndex += 3) {
    if (!isValidBox(board, rowIndex, boxIndex)) {
      return false;
    }
  }
  return true;
};

const isValidBox = (board, rowIndex, boxIndex) => {
  let row = [];

  let k = 0;
  while (k < 3) {
    for (let j = rowIndex; k < 3; j++) {
      row.push(...board[j].slice(boxIndex, boxIndex + 2 + 1));
      k++;
    }
    if (!isValidRow(row)) {
      return false;
    }
  }

  return true;
};

const isValidColumn = (board, column) => {
  let checker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let j = 0; j < board[column].length; j++) {
    let num = board[j][column];
    if (board[j][column] !== ".") {
      if (checker[num] !== 0) {
        return false;
      } else {
        checker[num] = 1;
      }
    }
  }
  return true;
};

const isValidRow = (rowIndex) => {
  let checker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let j = 0; j < rowIndex.length; j++) {
    if (rowIndex[j] !== ".") {
      if (checker[rowIndex[j]] !== 0) {
        return false;
      } else {
        checker[rowIndex[j]] = 1;
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
