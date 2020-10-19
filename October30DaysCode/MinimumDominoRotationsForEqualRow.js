/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// recursion but Time limit exceeded

// var minDominoRotations = function (A, B) {
//   const traverse = (A, B, i, count) => {
//     let A1 = A[0];
//     let B1 = B[0];

//     if (
//       A.join('').replace(new RegExp(A1, 'g'), '') === '' ||
//       B.join('').replace(new RegExp(B1, 'g'), '') === ''
//     ) {
//       return count;
//     }
//     if (A.length <= i) {
//       // console.log('object 111');
//       return -1;
//     }

//     // console.log(A, B);
//     const rotation1 = traverse([...A], [...B], i + 1, count);
//     if ((i > 0 && A[i - 1] === A[i]) || B[i - 1] === B[i]) {
//       i = i + 1;
//     }
//     let temp = A[i];
//     A[i] = B[i];
//     B[i] = temp;
//     const rotation2 = traverse([...A], [...B], i + 1, count + 1);
//     console.log(rotation2, rotation1, 'rotation2');
//     if (rotation1 !== -1 && rotation2 !== -1) {
//       return Math.min(rotation2, rotation1);
//     } else if (rotation1 !== -1) {
//       return rotation1;
//     } else if (rotation2 !== -1) {
//       return rotation2;
//     }
//     return -1;
//   };
//   let i = 0;
//   let sameNum = -1;
//   while (i < A.length) {
//     if (
//       i < A.length - 1 &&
//       A[i] !== B[i + 1] &&
//       A[i] !== A[i + 1] &&
//       B[i] !== B[i + 1] &&
//       B[i] !== A[i + 1]
//     ) {
//       // console.log('object');
//       return -1;
//     }

//     if (A[i] === B[i]) {
//       if (sameNum !== B[i] && sameNum !== -1) {
//         return -1;
//       }
//       sameNum = B[i];
//     }
//     i++;
//   }
//   return traverse(A, B, 0, 0);
// };
var minDominoRotations = function (A, B) {
  const helper = (target, A, B) => {
    let count = 0;
    for (let i = 1; i < A.length; i++) {
      if (target !== A[i] && target === B[i]) {
        count++;
      } else if (target !== A[i] && target !== B[i]) {
        return Number.MAX_SAFE_INTEGER;
      }
    }
    return count;
  };
  const target1 = helper(A[0], A, B);
  const target2 = helper(B[0], A, B);
  const target3 = helper(B[0], B, A);
  const target4 = helper(B[0], B, A);
  const ans = Math.min(target1, target2, target3, target4);
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
};

let ans = minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]);
console.log(ans);

ans = minDominoRotations(
  [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    2,
    1,
    2,
    1,
    2,
    2,
    1,
    2,
    1,
    2,
  ],
  [
    2,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    2,
    2,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    2,
    2,
    2,
    1,
    2,
    2,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    2,
    2,
    2,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    2,
    2,
    1,
    2,
    1,
    1,
    2,
    2,
    1,
    2,
    1,
    1,
    2,
  ]
);
console.log(ans);
