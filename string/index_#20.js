// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
function isValidParentheses(s) {
  if (s.length % 2 !== 0) return false; // the number of Parentheses is not even

  const afterParenthesesArr = [];
  for (let index = 0; index < s.length; index++) {
    if (afterParenthesesArr.length === 0) afterParenthesesArr.push(s[index]);
    else {
      // check whether the start bracket is match to end bracket
      // match: shift the last element
      // unmatch: push the new element
      if (
        // // Mark! if want to use negative index, must use arr.at(). arr[-1] is not supported!!
        (afterParenthesesArr.at(-1) === '(' && s[index] === ')') ||
        (afterParenthesesArr.at(-1) === '{' && s[index] === '}') ||
        (afterParenthesesArr.at(-1) === '[' && s[index] === ']')
      )
        afterParenthesesArr.pop();
      else afterParenthesesArr.push(s[index]);
    }
  }

  // check whether the afterParenthesesArr is empty
  if (afterParenthesesArr.length === 0) return true;
  else return false;
}

console.log(isValidParentheses('()'));
console.log(isValidParentheses('{}'));
console.log(isValidParentheses('{}{}()[]'));
console.log(isValidParentheses('{}{}()[)'));
console.log(isValidParentheses('[{}{}()]'));
console.log(isValidParentheses('[{{}}()]'));
console.log(isValidParentheses('{{}[{{{()}}}]}'));
