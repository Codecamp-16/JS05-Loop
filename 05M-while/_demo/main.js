// Global :  #1 Begin
let count = 0;

// #2 Condition
while (count < 20) {
  console.log(count);

  // #3 Update
  count++;
}

// num = 1 => 1 ตัว
// num = 234 => 3 ตัว
// num = 1150 => 4 ตัว

// ### While
// Guest A Secret Word

// const SECRET = 'InwZa';

// let userInput;

// userInput = prompt('Guest my secret word');
// if (userInput === SECRET) {
//   alert('Correct');
// }
// // - ตราบใดที่ยังเดาไม่ถูก
// // - เดาต่อ
// while (userInput !== SECRET) {
//   userInput = prompt('Guest my secret word');
//   if (userInput === SECRET) {
//     alert('Correct');
//     break;
//   }
// }

// ### Do While
// Guest A Secret Word

const SECRET = 'InwZa';
let userInput;

do {
  userInput = prompt('Guest my secret');
  if (userInput === SECRET) {
    alert('Correct');
    break;
  }
} while (userInput !== SECRET);
