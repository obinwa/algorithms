let array = [16, 22, 35, 8, 20, 1, 21, 11]; //[1, 2, 3, 4];
let sum = getSum(array);
let halfSum = sum / 2;
array.sort(function (a, b) {
  return a - b;
});

for (i = 0; i < 2 ** array.length; i++) {
  let binarySubSet = i.toString(2).padStart(array.length, "0").split("");
  let rSum = 0;
  let lSum = 0;
  for (j = 0; j < binarySubSet.length; j++) {
    if (binarySubSet[j] === "1") {
      rSum = rSum + array[j];
    } else {
      lSum = lSum + array[j];
    }
  }
  if (rSum === halfSum && lSum === halfSum) {
    console.log(getLRArray(binarySubSet, array));
    return; // getLRArray(binarySubSet, array);
  }
}

function getSum(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

function getLRArray(binaryArray, array) {
  let lArray = [];
  let rArray = [];
  for (i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === "1") {
      rArray.push(array[i]);
    } else {
      lArray.push(array[i]);
    }
  }
  return [rArray, lArray];
}
