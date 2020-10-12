/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  var i = 1;
  var stack = [s[0]];
  var visited = { [s[0]]: true };
  while (i < s.length) {
    var a = s[i];
    // console.log(visited, stack, a, s.lastIndexOf(a), i);
    if (!visited[a]) {
      while (stack.length > 0) {
        var top = stack[stack.length - 1];
        if (top.charCodeAt() < a.charCodeAt() || s.lastIndexOf(top) < i) {
          break;
        }
        stack.pop();

        if (top) visited[top] = false;
      }
      // console.log(stack, visited);
      visited[a] = true;
      stack.push(a);
    }
    i++;
  }
  // console.log(stack, visited);
  return stack.join('');
};

removeDuplicateLetters('cbacdcbdc');
