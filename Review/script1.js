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

document.getElementById("btn").addEventListener("click",function(){
		let inp=document.getElementById("input").value,res=[""];
		for(x in inp){
			asc=inp[x].charCodeAt()
			for(i=48;i<91;i++){
				if(asc==i){
					res.push(inp[x]);
				}
			}
		}
		let result=res.join();
		document.getElementById("res").innerHTML="The Resultant String is "+result;
})