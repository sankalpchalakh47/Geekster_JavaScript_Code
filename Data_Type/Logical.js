var a = 10;
var b = "10";
var c = 10;

console.log(a==b && a===c); // it will return true Here at first it will check value of 'a' and 'b' it is true then at second it will check the value and dataType of 'a' and 'c'
console.log(a==b || a===c); // It Will Return true becoz both are true
console.log(a===b && a==c); // It will return false becoz first is false & second is true so in end it will return false
console.log(a===b || a==b); // It will return true