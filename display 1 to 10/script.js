//display 1 to 10
let i=0;
while(i<10){
	i++;
	console.log(i);
}

/*
//display - before and after even numbers
let number=prompt("enter the number");
for(i=0;i<num.length;i++){
	if(num[i]%2==0){
		num="-"+num[i]+"-";
		console.log(num);
	}
}*/


var n = 12345;
var arr = n.toString().split('');
for (i = 0; i < arr.length; i++) arr[i] = +arr[i] | 0;
console.log(arr);

const numToSeparate = 12345;
const arrayOfDigits = Array.from(String(numToSeparate), Number);
console.log(arrayOfDigits); 
