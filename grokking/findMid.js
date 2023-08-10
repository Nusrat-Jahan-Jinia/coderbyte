function binary_search(list, item) {
  var low = 0;
  high = list.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess == item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const my_list = [1, 3, 5, 7, 9];
console.log(binary_search(my_list, 7)); // 1
console.log(binary_search(my_list, -1)); // null
