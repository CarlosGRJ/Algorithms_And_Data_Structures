/*
    Fisher-Yates Shuffle:
    The Fisher-Yates shuffle is a way to mix up a list of items so that every possible order of the items is equally likely. Imagine you have a deck of cards, and you want to shuffle them so that they are in a random order. The Fisher-Yates algorithm is a method for doing just that.

    How It Works
    The basic idea is to iterate through the array from the last element to the first, and for each element, swap it with a randomly chosen element that comes before it (including itself).

    Here are the steps:

    Start with the last element in the array.
    Pick a random index from the portion of the array that hasn't been shuffled yet (including the current element).
    Swap the current element with the element at the random index.
    Move to the next element (moving backwards through the array) and repeat until you reach the beginning.
*/

function shuffle(arr) {
  const lastEl = arr.length - 1;

  for (let i = lastEl; i > 0; i--) {
    let p1 = Math.floor(Math.random() * (i + 1));

    let temp = arr[p1];
    arr[p1] = arr[i];
    arr[i] = temp;
  }

  console.log('arr ', arr);

  return arr;
}
