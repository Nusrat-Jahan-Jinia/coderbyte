// declare the function
const shuffle = (array) => {
  const n = array.length;

  for (let i = n - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

// Usage
const myArray = ["apple", "banana", "cherry", "date", "elderberry"];
const shuffledArray = shuffle(myArray);

console.log(shuffledArray);
