// switch calculator
let a=parseInt(prompt("enter the number"));
let b=parseInt(prompt("enter the number"));
let op=prompt('enter the operator');
let c;

switch(a,b,op){
case '+':
c=a+b;
console.log("The value of addition is "+c);
break;

case '-':
c=a-b;
console.log("The value of Subtraction is "+c);
break;

case '*':
c=a*b;
console.log("The value of multiplication is "+c);
break;

case '/':
c=a/b;
console.log("The value of division is "+c);
break;

default:
console.log('invalid operation');
break
}
