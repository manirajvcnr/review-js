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
 
 
/*  document.getElementById("btn").addEventListener("click",function(){
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
}) */

/* function printRes(e,o){
	document.getElementById("res-eve").innerHTML="The Sum of Even Numbers are "+e;
	document.getElementById("res-odd").innerHTML="The Sum of Odd Numbers are "+o;

}
let sumEle=document.getElementById("reg_sum");
document.getElementById("reg-btn").addEventListener("click",function(){
	console.log("hi");
	let even=/[02468]$/g;
	let evenSum=0,oddSum=0;
	let regInp=sumEle.value,inpSli=[...regInp];
	inpSli.map((num)=>{
		if(even.test(num)){
			num=parseInt(num);
			evenSum+=num;
		}else{
			num=parseInt(num);
			oddSum+=num;
		}
		
	})
	printRes(evenSum,oddSum);
})
 */
 
 // function humanize(remi,org){
	// let resEle=document.getElementById("res-eve");	
	// switch(remi){
		// case 1:resEle.innerHTML=org+"st";
			// break;
		// case 2:resEle.innerHTML=org+"nd";
			// break;
		// case 3:resEle.innerHTML=org+"rd";
			// break;
		// default:resEle.innerHTML=org+"th";
			// break;		
	 // }
 // }
 
// document.getElementById("reg-btn").addEventListener("click",function(){ 
// let inpVal=document.getElementById("reg_sum").value,rem=0;
// let resEle=document.getElementById("res-eve");
	// if((inpVal>3)&&(inpVal<21)){
	// resEle.innerHTML=inpVal +"th";
// }	else{
	// rem=inpVal%10;
	// console.log(rem);
	// humanize(rem,inpVal);
// }

// })
 /* 
let sevRnge=parseInt(prompt("Please enter the range")),sevArray=[],resArr=[],sevStr,rem=0,rem1=[];
for(i=1;i<=sevRnge;i++){
	if(i%7==0){
		// sevStr=i.toString();
		resArr.push(i);
		console.log(resArr);
	}
}
for(i=1;i<resArr;i++){
	j=resArr[i];
	while(j<0){
		rem=j%10;
		rem1.push(rem);
		j=j/10;
	}
	
	}	 */

 
 
 
 let obj=[{
	name:"Hector", role:"King", period:"1600 AD", century:2,
},{
	name:"Hector", role:"King", period:"1600 AD" , century:2,
},{
	name:"Hector", role:"King", period:"1600 AD" ,
},{
	name:"Hector", role:"King", period:"1600 AD" ,
},{
	name:"Hector", role:"King", period:"1600 AD",
}],

arrLen=obj.length,objLen=0;
console.log(arrLen);
for (i=0;i<arrLen;i++){
	for(x in obj[i]){
		objLen++;
	}
}
console.log(objLen); 