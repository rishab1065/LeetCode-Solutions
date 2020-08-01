/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length === 1) {
    return true;
  }

  let firstCapital = word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
  let restOfAllCapital = true;
  let anyOneOfCapital = false;
  for (var i = 1; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      restOfAllCapital = restOfAllCapital && true;
      anyOneOfCapital = anyOneOfCapital || true;
    } else {
      restOfAllCapital = restOfAllCapital && false;
    }
  }
  if (firstCapital && !anyOneOfCapital) {
    return true;
  } else if (firstCapital && restOfAllCapital) {
    return true;
  } else if (!firstCapital && !restOfAllCapital && !anyOneOfCapital) {
    return true;
  }
  return false;
};
let ans = detectCapitalUse('hello');
console.log(ans);
ans = detectCapitalUse('USA');
console.log(ans);
ans = detectCapitalUse('FlaG');
console.log(ans);
ans = detectCapitalUse('Flag');
console.log(ans);
ans = detectCapitalUse('flagG');
console.log(ans);
ans = detectCapitalUse('g');
console.log(ans);
