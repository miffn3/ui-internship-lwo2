export function destroyer(arr, ...args) {
  let result = arr.slice();
  for (let i = 0; i < args.length; i++) {
    if (result.indexOf(args[i] !== -1)) {
      result = result.filter((el) => el !== args[i]);
    }
  }
  return result;
}
