/*
ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง โดยแสดงผลออกมาใน console

```
*
*	*
*	*	*
*	*	*	*
```
[
	[(0,0) (0,1),(0,2),(0,3)],
	[(1,0) (1,1),(1,2),(1,3)],
	[(2,0) (2,1),(2,2),(2,3)]
	[(3,0) (3,1),(3,2),(3,3)]
]

- print each cell (4*4 = 16 ครั้ง) (Can't)
- print each row (4 ครั้ง)
- print only once (1ครั้ง)

หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n

*/

// for (let i = 1; i <= 4; i++) {
//   let row = '';
//   for (let j = 1; j <= 4; j++) {
//     // #1
//     // if (j > i) {
//     //   continue;
//     // }
//     // row += '*';

//     // #2
//     // if (j <= i) {
//     //   row += '*';
//     // }

//     // #3
//     if (j > i) {
//       break;
//     }
//     row += '*';
//   }
//   console.log(row);
// }

// let str = '';

// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 4; j++) {
//     if (j <= i) {
//       str += '* ';
//     }
//   }
//   str += '\n';
// }

// console.log(str);

// Abstract Function : Number => String

function drawPattern(n) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        str += '* ';
      }
    }
    str += '\n';
  }
  console.log(str);
  return str;
}

drawPattern(10);
