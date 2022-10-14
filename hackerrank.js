const from = 1;
const to = 5;

function Ganjil(from, to) {
  let Array = [];
  for (let i = from; i <= to; i++) {
    if (i % 2 !== 0) {
      Array.push(i);
    }
  }
  return Array;
}

console.info(Ganjil(from, to));
