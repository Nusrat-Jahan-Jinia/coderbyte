function CountItems(list) {
  if (list.length == 0) {
    return 0;
  }
  return 1 + CountItems(list.slice(1));
}

console.log(CountItems([0, 1, 2, 3, 4, 5])); // 6
