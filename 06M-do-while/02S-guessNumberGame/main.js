// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

// PSEUDO-Code
/* 
	PLAYER-A : คนคิดตัวเลข
	 - GET : ให้ผู้เล่นกรอกตัวเลขเข้ามา (โดย prompt)
	 - CHECK : เลขเป็นจำนวนเต็ม 1-99 หรือไม่
	 - IF เลขเป็นจำนวนเต็ม 1-99
	 		- END
		 ELSE 
		 	- go back to GET

	PLAYER-B : คนทาย
	- SET : จำนวนครั้งที่ทายเป็น 0
	- GET : ลองให้ทายก่อน 1 ครั้ง
	- CHECK Valid 
		 IF ไม่ valid
		 	- ไป GET  (ไม่นับ Count)
	- CHECK Correct
		IF ถ้า correct 
			- SHOW : ถูกต้อง
			- SHOW : จำนวนครั้ง
		ELSE 
			- SHOW : มากกว่า หรือ น้อยกว่า
			- SET : count + 1
*/

// helper function

function isValid(strInput) {
  if (strInput == null || strInput.trim() == '' || isNaN(strInput)) return false;
  return true;
}

function isInRangeAndInt(strInput) {
  let num = Number(strInput);
  if (num >= 1 && num <= 99 && num === parseInt(num)) return true;
  return false;
}

let secretNumber;

do {
  secretNumber = prompt('Player A : filled your secret number between 1-99');
  if (isValid(secretNumber) && isInRangeAndInt(secretNumber)) {
    secretNumber = +secretNumber;
    break;
  }
} while (!isValid(secretNumber) || !isInRangeAndInt(secretNumber));

console.log(secretNumber); // 1-99 ()

// Player B Problem

/*
	PLAYER-B : คนทาย
	- SET : จำนวนครั้งที่ทายเป็น 0
	- GET : ลองให้ทายก่อน 1 ครั้ง
	- CHECK Valid 
		 IF ไม่ valid
		 	- ไป GET  (ไม่นับ Count)
	- SET : count + 1
	- CHECK Correct
		IF ถ้า correct 
			- SHOW : ถูกต้อง
			- SHOW : จำนวนครั้ง
		ELSE 
			- SHOW : มากกว่า หรือ น้อยกว่า
			
			- กลับไป GET
*/

// helper function
function isEqual(x, y) {
  return Number(x) === Number(y);
}

let times = 0;

let guestNumber;

do {
  guestNumber = prompt('Guest number between 1-99');
  if (!isValid(guestNumber) && !isInRangeAndInt(guestNumber)) {
    continue;
  }
  times++;
  if (isEqual(secretNumber, guestNumber)) {
    console.log('Correct');
    console.log('Times : ', times);
  } else {
    if (guestNumber > secretNumber) alert(` ${guestNumber} more than secret number`);
    else if (guestNumber < secretNumber) alert(`${guestNumber}lower than secret number`);
  }
} while (!isEqual(guestNumber, secretNumber));
