/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;
for (i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
    sum += i; // sum = sum + i
  }
}
console.log(sum);

/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let sumEven = 0;
for (i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    // console.log(i);
    sumEven += i;
  }
}
console.log(sumEven);
