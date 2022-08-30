//Subject
let sub1 = parseInt(prompt('enter the mark-1'));
let sub2 = parseInt(prompt('enter the mark-2'));
let sub3 = parseInt(prompt('enter the mark-3'));

let total = sub1 + sub2 + sub3;
console.log("Total is " + total);

let avg = total / 3;
console.log("Average is: " + avg);

if (avg > 75) {
    console.log("Grade is A");
}
else if (avg >= 35 && avg <= 75) {
    console.log("Grade is B");
}
else {
    console.log("Grade is C");
}
