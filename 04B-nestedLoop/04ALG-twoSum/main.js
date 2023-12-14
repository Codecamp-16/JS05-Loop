// #### Search Problem (Search 11)

// const SEARCH_VALUE = 11;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === SEARCH_VALUE) {
//     console.log('Founded', SEARCH_VALUE);
//   }
// }

// ## TWO Sum
// ## Walkthrough Each Element
// ## Search for Complement Each Element
const arr = [2, 7, 11, 15];
const target = 9;

// const summarizeArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let complement = target - arr[i];

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] === complement) {
//       // console.log('i: ', i, ' j: ', j);
//       summarizeArr.push(i, j);
//     }
//   }
// }

// console.log(summarizeArr);

// Abstract

function twoSum(arr, target) {
  const summarizeArr = [];
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === complement) {
        // console.log('i: ', i, ' j: ', j);
        summarizeArr.push(i, j);
        return summarizeArr;
      }
    }
  }
  return summarizeArr;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

console.log(twoSum([2, 1, 11, 15, -2], 9));
