const arr = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i]) sum++;
}

console.log(sum);
