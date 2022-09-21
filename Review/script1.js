/* let a=parseInt(prompt("Enter a number"));
let i=a,rem=0;
function print(number){
	let num=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
	console.log(num[number]);
}
while(i>0){
	rem=i%10;
	print(rem);
	i/=10;
	i=parseInt(i);
} */
/* document.getElementById("btn").addEventListener("click",function(){
	let inp=document.getElementById("input").value;
	let dob=new Date(inp),
	t=dob.getTime(),
	tim=Date.now()-t;
	tim=new Date(tim);
	let yr=tim.getFullYear();
//	console.log(yr);
	let age=Math.abs(yr-1970);
//	console.log(age);
	document.getElementById("res").style.color="red";
	document.getElementById("res").innerHTML="The Present Age is "+age;
	
}) */
/* document.getElementById("btn").addEventListener("click",function(){
		let inp=document.getElementById("input").value, alpha;
		alpha=inp.replace(/[^a-zA-z]/g,"");
		console.log(alpha); */

/*   document.getElementById("btn").addEventListener("click",function(){
		let inp=document.getElementById("input").value, alpha,no,even;
		/* alpha=inp.replace(/[^a-zA-z]/g,"");
		no=inp.replace(/[^0-9]/g,"");
		console.log(alpha);
		console.log(no);  */
		
/* 		let resEle=document.getElementById("res");
		even=/[02468]$/g; 
		if(even.test(inp)){
			resEle.innerHTML="The Given Number is Even";
			resEle.style.color="blue";
		}else{
			resEle.innerHTML="The Given Number is Odd";
			resEle.style.color="blue";
		}
}) */
/*   document.getElementById("btn").addEventListener("click",function(){
		let inp=document.getElementById("input").value, alpha,no,even;
		/* alpha=inp.replace(/[^a-zA-z]/g,"");
		no=inp.replace(/[^0-9]/g,"");
		console.log(alpha);
		console.log(no);  */
		
		/* let resEle=document.getElementById("res");
		even=/[02468]$/g; 
		let evenno=inp.replace(/[02468]/g,"");
		console.log(evenno);
		let oddno=inp.replace(/[13579]/g,"");
		console.log(oddno);
		 */
/* 		even=/[02468]$/g; 
		 if(even.test(inp)){
			resEle.innerHTML="The Given Number is Even";
			resEle.style.color="blue";
		}else{
			resEle.innerHTML="The Given Number is Odd";
			resEle.style.color="blue";
		}
}) */ 

/*  document.getElementById("btn").addEventListener("click",function(){
		let inp=document.getElementById("input").value, alpha,no,even;
		let resEle=document.getElementById("res"),res1Ele=document.getElementById("res1");
		let oddno=inp.replace(/[02468]/g,"");
		resEle.innerHTML=oddno;
		let evenno=inp.replace(/[13579]/g,"");
		res1Ele.innerHTML=evenno;
 }) */
 
 
 document.getElementById("btn").addEventListener("click",function(){
		let inp=document.getElementById("input").value, alpha,no,even,
		resEle=document.getElementById("res");
			even=/[02468]$/g; 
		if(even.test(inp)){
			resEle.innerHTML="The Given Number is Even";
			resEle.style.color="blue";
		}else{
			resEle.innerHTML="The Given Number is Odd";
			resEle.style.color="blue";
		}
})