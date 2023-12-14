// (2^2) + (4^2) + (6^2) + ... + (100^2)
// (3^2) + (6^2) + (9^2) + .... + (99^2)

// Global
let sumDivideByTwo = 0;
let sumDivideByThree = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumDivideByTwo = sumDivideByTwo + i ** 2;
  }

  if (i % 3 === 0) {
    sumDivideByThree = sumDivideByThree + i ** 2;
  }
}

console.log(sumDivideByTwo);
console.log(sumDivideByThree);
console.log(sumDivideByTwo - sumDivideByThree);
