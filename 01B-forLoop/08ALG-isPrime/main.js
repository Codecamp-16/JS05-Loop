// isPrime ?
// จำนวนเฉพาะ (Prime Number) คือจำนวนเต็มบวกที่มากกว่า 1
// และมีตัวหารลงตัวที่เป็นจำนวนเต็มบวกอยู่แค่ 2 ตัวก็คือ 1 และตัวมันเอง

// เช่น
// เลข 17 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 17 เท่านั้นที่สามารถหารเลข 17 ลงตัว
// เลข 23 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 23 เท่านั้นที่สามารถหารเลข 23 ลงตัว
// เลข 24 ไม่เป็นจำนวนเฉพาะ เพราะมี 1,2,4,6,8,12,24 ที่สามารถหารเลข 24 ลงตัว

// TASK : ให้สร้างฟังก์ชันตรวจสอบตัวเลข ว่าเลขนั้นเป็นจำนวนเฉพาะหรือไม่

let testCase1 = 21; // true

// Task 1 - ตรวจสอบ 1 เลข

// ## 1
// Global Flag(Boolean)
// let isPrime = true;

// // Loop Check isPrime ?

// for (let i = 2; i < testCase1; i++) {
//   console.log(i, testCase1 % i === 0);
//   if (testCase1 % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(isPrime);

// ## 2 Abstract(Hiding Complex) Logic to Function

// function isPrime(num) {
//   // let isPrime = true;
//   if (num === 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// 2 3, 5, 7, 11, 13,17,
// console.log(isPrime(89));

// ### 3 PrintPrime  (Reuse isPrime)
function printPrime(limit) {
  for (let i = 1; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// printPrime(10);
// printPrime(15);

// #### 4 PrintPrime (1 Fn)

// function printPrime(limit) {
//   // iterate 2,3,4,5,6,7...,limit

//   for (let num = 2; num <= limit; num++) {
//     // console.log(num);
//     let isPrime = true;
//     for (let divide = 2; divide < num; divide++) {
//       if (num % divide === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(num);
//   }
// }
// printPrime(15);
