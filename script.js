const square = n => n*n;

const nums = [1, 2, 3, 4, 5];
const squares = nums.map(num => square(num));

const numbers = [10, 15, 20, 25, 30];
const evens = numbers.filter(num => num % 2 == 0);

console.log(evens);