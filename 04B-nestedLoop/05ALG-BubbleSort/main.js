// const arr = [20, 5, 15, 10, 1];
// const arr = [20, 15, 10, 5, 1];
const arr = [1, 5, 10, 15, 20];

console.log(arr);
let count = 0;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    // i = 0  : limit = 5-1-0 => j < 4 (j vs j+1 , 3,4)
    // i = 1 : limit = 5-1-1 => j < 3 (j vs j+1 , 2,3)
    // i = 2 : limit = 5-1-2 => j < 2 (j vs j+1 , 1,2)

    if (arr[j] > arr[j + 1]) {
      console.log('SWAP');
      count++;
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  console.log('1 Round');
}
console.log(arr);
console.log(count);
/*
Row : 1  (i = 0)
Col : 1-4 (j = 0 ถึง j = 4)

i,j
0,0
0,1
0,2
0,3

j,j+1
0,1
1,2
2,3
3,4
// 4,5
*/

// SWAP

// const array = [1, 5]; // [น้ำแดง,เบียร์]
// console.log(array);
// let temp = array[0]; // แก้วเปล่า => น้ำแดง

// // SWAP
// array[0] = array[1]; // แก้วแรกใส่เบียร์
// array[1] = temp; // แก้วที่สองใส่น้ำแดง(จากแก้วเปล่า)

// console.log(array);
