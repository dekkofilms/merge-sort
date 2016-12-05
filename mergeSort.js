var a = [5, 34, 76, 203, 34, 56, 23, 11, 1, 87, 9, 101];

function mergeSplit(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = parseInt(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return mergeSort(mergeSplit(left), mergeSplit(right));
}

function mergeSort(left, right) {
  let answer = [];

  while(left.length && right.length) {
    if (left[0] < right[0]) {
      answer.push(left.shift());
    } else {
      answer.push(right.shift());
    }
  }

  while(left.length) {
    answer.push(left.shift());
  }

  while(right.length) {
    answer.push(right.shift());
  }

  return answer;
}

console.log(mergeSplit(a));
