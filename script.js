const square = n => n*n;

const nums = [1, 2, 3, 4, 5];
const squares = nums.map(num => square(num));

console.log(squares);