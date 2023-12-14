// Global Variable (Accumulator)
let sumEvenNumber = 0;
let sumOddNumber = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    // Modified Global
    sumEvenNumber = sumEvenNumber + i;
  } else {
    sumOddNumber = sumOddNumber + i;
  }
}

console.log(sumEvenNumber);
console.log(sumOddNumber);
