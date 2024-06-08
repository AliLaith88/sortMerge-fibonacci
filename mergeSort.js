let nums = [3, 2, 1, 13, 8, 5, 0, 1];

console.log("sortmerge");
console.log(sortMerge(nums));

function sortMerge(arr) {
  let half = Math.floor(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);
  if (left.length !== 1) {
    left = sortMerge(left);
  }
  if (right.length !== 1) {
    right = sortMerge(right);
  }
  return merge(left, right);
}

function merge(a, b) {
  let myArr = [];
  let totalLength = a.length + b.length;
  while (myArr.length !== totalLength) {
    if (a[0] < b[0]) {
      myArr.push(a[0]);
      a.shift();
    } else {
      myArr.push(b[0]);
      b.shift();
    }

    if (b.length === 0) {
      myArr = myArr.concat(a);
    }
    if (a.length === 0) {
      myArr = myArr.concat(b);
    }
  }
  return myArr;
}
