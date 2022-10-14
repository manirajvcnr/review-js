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

 
 
 
 /* let obj=[{
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
 */

/* var result = [],res=0,ab,ba;
var answer = []
for(i=1;i<=200;i++){
	if(i%7==0){
		// sevStr=i.toString();
		result.push(i);
	}
}

for(i=0;i<result.length;i++){
	if(result[i]<100){
    var a = result[i] % 10;
	var b = Math.floor(result[i]/10)
	if(b<a){
		console.log(result[i]);
	}
	}else{
	res=result[i]-100;
	ab = res % 10;
	ba = Math.floor(res/10)
	if(ba<ab){
		console.log(result[i]);
	}	
}

} */

//  Array Methods 

// FOR EACH

/* let nums=[2,4,5,6],add=0,addi=0,
sum=(n)=>{
	for(i=0;i<n.length;i++){
		add+=n[i];
	}
	console.log(add);
};
sum(nums);
let marks={
	English:78,
	Tamil:85,
	Maths:60,
	Science:88,
	Social:78,
},total=0;

Object.keys(marks).forEach((k)=>{
	addi+=marks[k];
	console.log(addi);		
});

// Map Function 
// Takes a func as argument and runs the function for each value   

let work=["Doctor","Driver","Engineer"];
work.map((is)=>{
	console.log("He is a "+is);
})
let professional={
	Arun:"Techie",
	Vishal:"Mechanic",
	Rathore:"Doctor",
}
Object.entries(professional).map((ent=>{
	[person,kaam]=ent;
	// console.log(ent);
	// console.log(person);
	// console.log(kaam);

	console.log(person+" is a "+kaam);
}))

// reduce,filter,find,string,every ,splice

//reduce
// Takes a func as argument and gives a single value as result  

let mrk1=[84,56,84,78,69],tot=0,prev,pres,ini=0;
console.log(mrk1.reduce((prev,pres)=>{
	return(prev+pres);
}));
 */
// In object

// console.log(Object.keys(marks).reduce((prev,pres)=>{
// 	console.log(marks[prev]);
// 	return(marks[prev]+marks[pres]);
// }));

// Every Method 
/* 
let mrk2=[84,56,35,78,69];res=0;
if(mrk2.every((ev)=>{
	if(ev>40){
		return true;
	}else
		return false;
})){
	console.log("The given student is Pass");
}else{
	console.log("The given student is Fail");
}
if(Object.keys(marks).every((eve)=>{
	if(eve>40){
		return true;
	}else
		return false;
}))
	console.log("The given student is Pass");
else
	console.log("The given student is Fail");

// Filter method	

let mrks=[84,54,22,26,32],
pass=(mrks.filter((ab)=>{if(ab>35){return ab}}));
console.log("The pass marks are",pass);

// object 

let pass_m=[];
pass_m=Object.keys(marks).filter((abc)=>{
	console.log(marks[abc]);
	if(marks[abc]>35)
	{
		return (marks[abc])
	}
});
console.log("The passed subjects are ",pass_m);

// Find Method 
let names=["Victor","Hector","Sector","Zap","Hector"];
console.log(names.find((ba)=>ba=="Hector"));
console.log(names.findIndex((ba)=>ba=="Hector"));
console.log(names.findLastIndex((ba)=>ba=="Hector"));
console.log(names.findLast((ba)=>ba=="Hector"));

// object 

console.log(Object.keys(marks).find((k)=>marks[k]>80));
 */
// Flat Method
// Reduces the level of nested array and takes number as parameter
/* let ae=[1,23,[[[45],58]],34],
bq=ae.flat(2);
console.log(bq);

// FlatMap 
let aee=[1,23,[45,7],[58],34],
bqe=aee.flatMap((af)=>{return(af*2)});
console.log(bqe);

// values ,Reduce right ,Last Index ,includes

// values
// Used to Return an object containing the values of the array 
let av=[54,25,98];
bv=av.values();
console.log(av.values());
for(x of bv)
	console.log(x);

// LastIndex of Method
// Returns the Index Last value of the iteration 
let atd=[21,2,84,5,47,2,2];
console.log(atd.lastIndexOf(2));

// includes Method 

var arr=[1,5,8,4,3,35,45];
if(arr.includes(9))
	console.log("The array has the number 9");
else
	console.log("The array doesn't has the number 9");

// Reduce Right
arr=[[1,5],[8,4]];
console.log(arr.reduceRight((accumulator,cval)=>{
	return(accumulator.concat(cval));
})); */

let arr=[1,2,3,4,5,6,7,8,9,10],c=[];
//Filter Method
console.log(arr.filter((a)=> a%2==1));

console.log(arr.filter((a)=>(a%2==0)||(a%5==0)));
	
//Reduce Method
let b=[],sum=0;
b=(arr.filter((a)=>(a%3==0)));
console.log(b);
console.log(b.map((a)=>a**2));

let cb=[], sum1;
cb=(arr.filter((a)=>a%5==0));	
console.log(cb.map((a)=>a**2));