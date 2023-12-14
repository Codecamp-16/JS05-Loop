// - ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี
// - โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป
// - เมื่อครบ 10 ปี จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก)

// Global
// let balance = 100_000;
const INTEREST_RATE = 2.5 / 100;

// 0yr : balance = 100_000
// 1 yr : balance = 100_000 + (0.025) * 100_000 = 102,500
// 2 yr : balance = 102,500 + (0.025) * 102,500 = 105,062.5

// Nth yr : newBalance = balance + INTEREST_RATE *  balance
// Nth yr : newBalance = balance * (1+INTEREST_RATE)

// param-1 : balance
// param-2 : year

function calculateNewBalance(balance, year) {
  for (let i = 1; i <= year; i++) {
    balance = balance * (1 + INTEREST_RATE);
  }
  return balance.toFixed(2);
}

let r = calculateNewBalance(100_000, 40);

console.log(r);
