function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
  }
  console.log(num);
  num--;
  countDown(num);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
factorial(5); // expected output: 120

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
