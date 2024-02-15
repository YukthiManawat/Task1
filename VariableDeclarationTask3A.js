var a=1; #here variable a is declared as global scope variable
let b=2; #here variable b is declared 
const c=3; #here constant c is declared which cannot be changed

console.log(a); #prints 1
console.log(b); #prints 2
console.log(c); #prints 3

function someFunction(){
var a=4;
let b=5;
const c=6;

console.log("Reassigned value of a:",a) #here the value 4 will be printed
console.log("Reassigned value of b:",b) #here it will be print the value initialised for b in this funtion, as it is a block scope variable
console.log("Reassigned value of c:",c) #here it will throw an error because its a constant and it cannot be redeclared or updated

}

someFunction();

