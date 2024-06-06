//For each
let num = [1, 2, 3, 4, 5];

num.forEach(num => {
  console.log(num * 2);
});

let operations = [
  { name: 'addition', signs: '+' },
  { name: 'subtraction' , signs: '-' },
  { name: 'division' , signs: '/'}
];

operations.forEach(node => {
  console.log(`${node.name} is this "${node.signs}" sign`);
});


//for loop
let nums = [6, 7, 8, 9, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
}
// Output: 2, 4, 6, 8, 10 (each on a new line)

let matter = [
  { name: 'solid' },
  { name: 'liquid' },
  { name: 'Gas' }
];

for (let i = 0; i < matter.length; i++) {
  console.log(`${matter[i].name}`);
}


//Map
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(number => number * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10]

let tree = [
  { name: 'Oak', age: 100 },
  { name: 'Pine', age: 50 },
  { name: 'Maple', age: 80 }
];

let descriptions = tree.map(node => `${node.name} is ${node.age} years old`);
console.log(descriptions);
// Output: 
// ["Oak is 100 years old", "Pine is 50 years old", "Maple is 80 years old"]