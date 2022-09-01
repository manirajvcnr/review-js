function multi(a,b){
	res=a*b;
	return res;
}
function even(e){
	if(e%2==0)
		console.log("The given Number is Even ");
	else
		console.log("The given Number is Odd");
}

let c=parseInt(prompt("Enter the Number to Check whether its Even or Not"));
even(c);
//d=parseInt(prompt("Enter the Number to Perform Multiplication"));
//let r=multi(c,d);
//console.log(r);

