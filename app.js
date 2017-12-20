// /* this is a block comment */

console.log("hello world!");
console.log("hello world".length);


//define a constant
const pi=3.1416182432;
console.log(pi);

//define a variable
var variable1 ="hello world"
var variable2 = true;
var variable3 = 4;

//class is defined through syntax; ex "" for text; boolean; numeric
console.log("hello world");
console.log(true);
console.log(4)

/* operations
console.log(variable3 + pi);
console.log(pi - variable3);
console.log(pi * pi);
console.log(variable3/variable3);
console.log(variable3 + variable1);
*/

//interactive message - returns an alert in browser
/* var response = confirm("You're so good-looking!");
console.log(response);
*/

/* execute a loop; 'let' can be used instead of 'var'
for(let i=0;i<10;i++){
  console.log(i);
}
*/

/*
for(let i=0;i<10;i++){
  console.log(i*6);
}
*/

/*
for(let i=0;i<10;i++){
  console.log(i + "*" + "6" + "=" + (i*6));
}
*/

//boolean - equality
console.log(5<3);
console.log(5==3);
console.log(5===5);
console.log(5!='5');
console.log(!true)


/*
conditions
if ("Xavi".length>=10)
{
console.log("Your name is too short")
}

if (!("Xavi".length>=10))
{
console.log("Your name is too short")
}


var age = 40;
if ("age">35)
{
console.log("You're too young");
}
else
{
console.log("You're too old")
}


if (!("Xavi".length<10) && (variable3 = 4))
{
console.log("Correct")
}
else
{
console.log("Incorrect")
}


if (("Xavi".length>10) || (variable3 = 9))
{
console.log("Correct")
}
else
{
console.log('Incorrect')
}
*/

/*
for (var i=0; i<101; i++){
  if(i%2==0)
  console.log('modulo ->' + 12%2);
}
*/

/* ++ counts forward; -- counts backwards
for (var i=1; i<101; i++) {
  if (i %2==0) {
    console.log(i)
}
}
*/

/* extract string from position 4 to position 12
console.log('Ana Dragnea'.substring(4,12))
*/

/*
alert ("Screen message");
var result = confirm ("Good?");
console.log(result);
*/

/*
const current = 2017
var year = prompt ('Introduce Year of Birth');
var age = current - year;
var name = prompt ('Introduce Name');
console.log("Welcome " + name + "!")
console.log("You are " + age + " years old.")
*/

/* generate random number
console.log('Random number' + (Math.floor(Math.random()*3)+1));
*/

// GAME V1

/* const paper = 1
const scissors = 2
const rock = 3
var answer1 = prompt ('1 - Paper, 2 - Scissors, 3 - Rock?')
var answer2 = prompt ('1 - Paper, 2 - Scissors, 3 - Rock?')

if (answer1 < answer2)
{
  prompt ('A1 loses!')
}
else
{
  prompt ('A1 wins!')
}
if (answer1 == answer2)
{
prompt ('Tie')
}
*/

// GAME V2

/* const paper = 1
const scissors = 2
const rock = 3
var answer1 = ('Random number' + (Math.floor(Math.random()*3)+1))
var answer2 = ('Random number' + (Math.floor(Math.random()*3)+1))

if (answer1 < answer2)
{
  console.log('A1 loses!')
}
else
{
  console.log('A1 wins!')
}
if (answer1 == answer2)
{
console.log('Tie')
}

*/

// Switch function
/*
var age = prompt ('Your age');
switch (age) {
  case "10":
  alert ("over 10");
  break;
  case "30":
  alert ("over 30");
  break;
  default:
  alert ("who knows")
}
*/

parseInt("3");
function multiply (p1, p2){
return p1*p2;
}
console.log(multiply(3,5))

function divide (p1, p2){
return p1%p2;
}

function sum (p1, p2){
return p1+p2;
}

function substract (p1, p2){
return p1-p2;
}

let value1 =parseInt(prompt("Introduce first number"));
let value2 =parseInt(prompt("Introduce second number"));
let operation = prompt ("What operaton do you want?");

switch (operation) {
  case '+':
  alert (sum(value1,value2));
    break;
  default:
  alert ("Nothing to see here")

}
