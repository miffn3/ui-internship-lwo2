export function findFriend(arr) {
  let friends = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'red') {
      if (i > 1) {
        if (arr[i - 2] === 'blue' && arr[i - 1] === 'blue') {
          friends++;
          continue;
        }
      }
      if (i > 0 && i < arr.length) {
        if (arr[i - 1] === 'blue' && arr[i + 1] === 'blue') {
          friends++;
          continue;
        }
      }
      if (i < arr.length - 1) {
        if (arr[i + 1] === 'blue' && arr[i + 2] === 'blue') {
          friends++;
          continue;
        }
      }
    }
  }
  return friends;
}
