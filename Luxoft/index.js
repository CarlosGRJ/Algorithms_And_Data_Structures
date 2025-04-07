function findFirstMissingNumber(arr) {
  const numberSet = new Set(arr);

  let i = 1;
  while (true) {
    if (!numberSet.has(i)) {
      return i;
    }

    i++;
  }
}

console.log(findFirstMissingNumber([1, 2, 3, 5, 6]));
