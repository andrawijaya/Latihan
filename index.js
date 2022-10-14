// Soal No 2
input = "iniayahbudi";

const toArray = input.split("");

reverse = (array) => array.map(array.pop, [...array]).join("");

console.log(reverse(toArray));

// Soal No 1

const numbers = [12, 10, 15, 11, 14, 13, 16];

function bubbleSort(array) {
  let checked;
  do {
    console.log(array);
    checked = false;
    for (let x = 0; x < array.length; x++) {
      if (array[x] > array[x + 1]) {
        let temp = array[x]; //12
        array[x] = array[x + 1]; //12 -> 10
        array[x + 1] = temp; // 10 -> 12
        checked = true;
      }
    }
    console.log(checked);
  } while (checked);
  return array;
}

console.log(bubbleSort(numbers));
