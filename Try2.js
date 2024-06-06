//Examples of while loop
let i = 3; 
let n=6
while (i < n) {
  // console.log( "this is the value of", i);
  i++;
}

let a = 4;
while (2 < a) {
  //  console.log(a);
  a--;
}

let b = 5;
while (b === 5) {
  //  console.log("I am a girl");
  b++;
}

//Examples of do while loop
let c=5
do {
    //  console.log(c)
    c--
} while (c+2);

let d=4
do {
    //  console.log(d)
    d++
} while (d<9);

let e=6
do {
    //  console.log("I cant be a boy")
    e--
} while (e && 3);

 //switch statement
//  let prompt = require("prompt")
//  var f=1
 
//  switch(f){
//     case 1: console.log("January")
    
//     case 2: console.log("February")
    
//     case 3: console.log("March")
    
//     case 4: console.log("April")
    
//     case 5: console.log("May")
    
//     case 6: console.log("June")
    
//     case 7: console.log("July")
    
//     case 8: console.log("August")
    
//     case 9: console.log("September")
    
//     case 10: console.log("October")
    
//     case 11: console.log("November")
    
//     case 12: console.log("December")
    
//     default: console.log ("This month is invalid")

// }

//uses of for and while loops

//For loop
for(let g=2; g<=5; g++)    //infinte loop is wen it executes without stopping
{
console.log("Hey")

for(let h=4; h<=7; h++)     //This is called a nested for loop.  Check out what it does
console.log("hweiu")
}

for(let j=1; j<=50; j++){
  if(j%5===0)
  console.log(j)
}
//parseInt converts decimal to whole no

//while loop stuffs
let num=123456
                  //iffu want to print only 6, do only the command on the line below
 while(num>0)
 {                 
console.log(num%10)  
num = parseInt(num/10)
console.log(num)
 }

//objects
let input='Name'

let alien={
  Name: "Perks",
  Class:" Yr 1",
  'work exp':4,      //whenever you are using two words use the single quote
}
console.log(alien.Name);
console.log(alien[input]);
console.log(alien['work exp']);

//complex object is having an object inside an object
let random= {
  Name: "Erks",
  level: "Yr 1",
  laptop: {
    CPU: 'i7',
    RAM: 5,
    Brand: 'Dell'
  }
}

console.log(random.laptop.Brand.length)  //lenght is the number of words in dell


//for in loop
for(let key in random)
{
  console.log(key, random[key])
}

//functions
// function greet()
// {
//   console.log("Hello world");
// }
// greet();
// console.log(1)
// greet();
// greet();
// greet();

for(let k=1; k<=12; k++ )
{
  console.log("2 x " + k + " = " + 2*k )
}

for(let k=1; k<=20; k++)
{
  if(k%2==0){
  console.log("These are the even numbers " + k)
}
}


function greet(name) {
  console.log(`hello there ${name}!`);
  console.log("How is the weather today dear?")
}
 greet("Peter");


//Default value
 function greet(name = "Nathan") {
  console.log(`Hello, ${name}!`);
  console.log("Nice weather today, right?");
}

greet()
greet("Jack")

//Note that function is an object
//FUNCTION EXPRESSION
let nu_m1=4
let nu_m2=8
let add=function(nu_m1, nu_m2)
{
  return nu_m1+nu_m2;
}
let result=add(4,8)
console.log(result)

//Arrow function es6 allow us to write shorter function syntax
//u wont put function
let n_um1=8
let n_um2=5
let subtract=(n_um1, n_um2)=>{
  return n_um1-n_um2
}

let re_sult=subtract(8,5)
console.log(re_sult)

//spread operator
const q1 = [1,2,3]
const q2=[4,5,6]
const q3=[7,8,9]

const q =[...q1, ...q2, ...q3];
console.log(q)

let zer={
  Name:"precious",
  level:"100lvl",
  'social status':"married",
}

//rest operators

// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// The invocation above will return:
//["CodeSweetly", "Web Developer", "Male"]


