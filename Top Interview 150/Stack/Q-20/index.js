const isValid = (str) => {
  const brackets = { "(": ")", "[": "]", "{": "}" };
  let bracketsStack = [];
  if (str === "") return true;

  bracketsStack.push(str[0]);
  let i = 1;
  while (i < str.length) {
    isOpenBracket = Object.keys(brackets).find((br) => br === str[i]);
    if (isOpenBracket) {
      bracketsStack.push(str[i]);
    } else if (str[i] === brackets[bracketsStack[bracketsStack.length - 1]]) {
      bracketsStack.pop();
    } else {
      return false;
    }
    i++;
  }
  return bracketsStack.length === 0;
};

const Stack = require("stackjs");
const isValid2 = (str) => {
  const brackets = { "(": ")", "[": "]", "{": "}" };
  let bracketsStack = new Stack();
  if (str === "") return true;

  bracketsStack.push(str[0]);
  let i = 1;
  while (i < str.length) {
    isOpenBracket = Object.keys(brackets).find((br) => br === str[i]);
    if (isOpenBracket) {
      bracketsStack.push(str[i]);
    } else if (str[i] === brackets[bracketsStack.peek()]) {
      bracketsStack.pop();
    } else {
      return false;
    }
    i++;
  }
  return bracketsStack.isEmpty();
};

console.log(isValid("()[([])]{}]"));
