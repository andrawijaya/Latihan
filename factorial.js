function factorial(num) {
  let result = num;
  if (num == 1 || num == 0) {
    return 1;
  }
  while (num > 1) {
    console.log(result);
    num--;
    result *= num;
  }
  return result;
}

console.log(factorial(4));

// function main() {
//   const n = +readLine();
//   console.log(factorial(n));
// }
