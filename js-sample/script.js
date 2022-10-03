

//button to text color 
/*function colorchange(){
	let heading=document.getElementById("head");
	let col=document.getElementById("color").value;
	heading.style.color=col;
}
let btn=document.getElementById("btn");
btn.addEventListener("click",colorchange);*/


//random color change
function randomcolor(){
	/*
	let r=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let clr="rgb("+r+","+g+","+b+")";
	*/
	var c ="#" + Math.floor((Math.random() * 999) + 1);
	let h2=document.getElementById("headh2");
	h2.style.color=c;
}
let ran=document.getElementById("random");
ran.addEventListener("click",randomcolor);


/*
//array to list
let array=[1,2,3,4];

let list=document.getElementsByClassName("li");

for(i=0;i<=array.length;i++){
	
list[i].innerText=array[i];
	
}

*/