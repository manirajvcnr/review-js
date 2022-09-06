// sum of POSITIVE
let sum = 0;
let number = parseInt(prompt('Enter a number'));

do {
    sum += number;
    number = parseInt(prompt('Enter a number'));
}
while(number >= 0)
console.log("The sum of a number is "+sum);