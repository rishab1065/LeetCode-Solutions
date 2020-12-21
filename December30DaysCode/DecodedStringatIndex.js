/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function (S, K) {
  var size = 0;

  for (var i = 0; i < S.length; i++) {
    if (S[i].charCodeAt(0) <= 57 && S[i].charCodeAt(0) >= 50) {
      size = size * parseInt(S[i]);
    } else {
      size += 1;
    }
  }

  for (var i = S.length - 1; i >= 0; i--) {
    K = K % size;
    if (K === 0 && !(S[i].charCodeAt(0) <= 57 && S[i].charCodeAt(0) >= 50)) {
      return S[i];
    }

    if (S[i].charCodeAt(0) <= 57 && S[i].charCodeAt(0) >= 50) {
      size = Math.round(size / S[i]);
    } else {
      size = size - 1;
    }
  }
  return '';
};
