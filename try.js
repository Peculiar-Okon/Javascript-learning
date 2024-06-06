// Daniels class
function multiplynumbers(x, y = 5) {
  return x * y;
}
let result = multiplynumbers(4, 5);
console.log(result);

// trial
let num = 2 + 5;
console.log(num);

console.log(num * 2);

let username = "Perks";
console.log(username);

// code for area of rectangle:
let length = 30;
let breadth = 12;
let area;

console.log(length * breadth);
// or:
let lengt = 26;
let breadt = 10;
let are;
are = lengt * breadt;
console.log(are);

// Note: if the value is a constant value, eg Pi, you will put the word "const" instead of "let"
// "length" is a variable...... "26" is a value

// data types
// N/B: typeof can be used to know a data type
let data = 7; //number
let user = "Pearl"; //string
console.log(typeof user);

let num2 = 15e6; //exponential
console.log(num2);

let num3 = -5 / 0; //infinity
console.log(num3);

let num4 = -2 / 0;
console.log(num4.MAX_VALUE); //undefined
0
let num5 = 40e6 / 5;
console.log(num5);
//N/B: cannot mix a number like 1387479654239879876 (Big Int) with a small number ie 2

//Data types 2

let firstname = "Pearl";
let lastname = "kay";
//To join them together, we put a "plus" sign between them. in this case. plus will not be used for addition
//because theyb are strings
console.log(firstname + lastname);
//then, to put space between the "pearl" and the "kay" we use + " " +
console.log(firstname + " " + lastname);
// note: \   \for " " ,\n for new line, \t for tab..... ie: let user = "Na\tvin \teddy" \v for volticle... works
//mostly on mac and linux

//Boolean: True or False
let bool = 5 < 6;
console.log(bool);
//N/B all values are truthy except 0, -0, undefined, null, "", 0n, NaN, and document.all.

//Type conversion or coercion
let num6 = "7"; //Number type to string type
console.log(typeof num6);

let num7 = Number("1_2_3"); //string type back to number type
console.log(typeof num7);

let x = 6 + "x";
console.log(x, typeof x);

// console.log(boolean(7))

//Arithmetic operators
let num8 = true;
let num9 = false;
let resul_t = num8 + num9;
console.log(resul_t);
//  % operator is to find remainder

let nu_m = 5;
// nu_m=nu_m+2

nu_m += 2; //this is the same thing as the above.... here you are adding num by itself plus 2

nu_m++; //the num++ operation is an increment value ie if num is 6, num++ will be 7  or u could say ++num
nu_m--; //opp of above
console.log(nu_m);

//Relational Operators
console.log(6 > 7);

let data1 = 6 <= 6;
console.log(data1);

let p = 6;
let c = 8;
console.log(p < c);

let a = "trend";
let b = "pen";
console.log(a < b); //This is false bcos the number of alphabets in a are less than the number of alpabets in b

let d = "7";
let e = 6;
console.log(d < e); //false

//Logical operators
let f = 7,
  g = 8,
  h = 9;
let res_ult = f < g && g < h;
//Here we will use the and, not, or gates ie: AND(*), OR(+), NOT(~) but in javascript, AND(&), OR(|), NOT(!)
//When using the AND(&) use two &(&&) and same for NOT and OR..... 1 & is for bitwise operators

//Conditional statement (if else)
let num11 = 3;
let num22 = 4;

let r_esult = num11 < num22;

if (r_esult)
  //if condition means "if bla bla is true...." this gave me problems, note
  console.log("num22 is greater");
//else did not print because the value is true
else console.log("bye dearie");

let num33 = 6;
let num44 = 7;
let num55 = 8;

if (num33 < num44 && num44 < num55) {
  console.log("Num1 is greater");
} 
else if (num33 > num44 && num44 > num55) {
  console.log("hey dearie");
  console.log("Hweiu");
}
 else {
  console.log("Num 3 is greatest");
}
