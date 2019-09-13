const BLUE = 'blue';

export function findFriend(arr) {
  let friends = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'red') {
      if (arr[i - 2] === BLUE && arr[i - 1] === BLUE ||
          arr[i - 1] === BLUE && arr[i + 1] === BLUE ||
          arr[i + 1] === BLUE && arr[i + 2] === BLUE) {
        friends++;
      }
    }
  }
  return friends;
}
