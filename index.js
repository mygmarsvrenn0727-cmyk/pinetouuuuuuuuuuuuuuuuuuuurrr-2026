// 1. Print every element of the array, each on its own line.
const fruits = ["apple", "banana", "cherry"];
// Expected:
//   apple
//   banana
//   cherry
// your code 
for (let i = 0; i < 3; i++) {
    console.log(fruits[i])
}

// 2. Add up all the numbers and print the total.
const nums = [4, 8, 15, 16, 23, 42];
let sum = 0
// Expected: 108
// your code here
for (let i = 0; i < 6; i++) {
    sum = sum + nums[i]
}

console.log(sum)
// console.log(sum)
// 3. Count how many numbers in the array are even, and print the count.
const values = [3, 6, 9, 12, 13, 18];
let hehe = 0
// Expected: 
// your code here
for (let i = 0; i < 6; i++) {
    if ( values[i]%2 === 0){ 
        hehe++
    }
}
console.log(medkuee)

// 4. Find and print the largest number in the array.
const scores = [42, 17, 99, 23, 56 ];
let max = scores[0] // 42

for (let i = 0; i < 5; i++) {
    if (max<scores[i]){ // 99 < 56
        max=scores[i]   
    }
}
console.log(max)

// 5. Find the smallest number AND the index where it sits.
//    Print:  smallest <value> at index <i>
const temps = [12, 5, 8, 3, 20];
let smallnumber=temps[0]
// Expected: smallest 3 at index 3
// your code here
for (let i = 0; i < 5; i++) {
if (smallnumber > temps[i]){
    smallnumber = temps[i]
}
}
console.log(smallnumber)
// 6. Build a NEW array where every number is doubled, then print it.
const base = [1, 2, 3, 4];
let double = []

// Expected: [ 2, 4, 6, 8 ]
// your code here
for (let i = 0; i < base.length; i++) {
const e = base [i] = 2
double.push(e)
}
console.log(double) 

// 7. Count how many times the target value appears in the array.
const items = [1, 2, 2, 3, 2, 4];
const target = 2;
let Valuee = 0
// Expected: 3
// your code here
for (let i = 0; i < 6; i++) {
if(items[i] === target) {
Valuee = Valuee + 1
}
}
console.log(Valuee)
// 8. Calculate and print the average of the numbers.
const data = [10, 20, 30, 40];
let ccc = [0]
// Expected: 25
// your code here
for (let i = 0; i < 4; i++) {
if (ccc= data[i]) = ccc
}
console.log(ccc)
// 9. Build a NEW array containing only the numbers greater than 10,
//    then print it.
const list = [5, 12, 8, 20, 3, 15];
let bye = [0]
// Expected: [ 12, 20, 15 ]
// your code here
for (let i = 0; i < 6; i++) {
   if (bye)
}
console.log(bye)
// 10. Reverse the array into a NEW array WITHOUT using .reverse().
//     Then print the new array.
const letters = ["a", "b", "c", "d"];
let conletter = []
// Expected: [ 'd', 'c', 'b', 'a' ]
// your code here
for (let i = 0; i < 4; i++) {
console.log(conletter )
}
