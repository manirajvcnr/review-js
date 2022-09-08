function vowel(a,c){
	let vow=0;
	for(i=0;i<a.length;i++){
		for(j=0;j<c.length;j++){
				if(a[i]==c[j])
					vow++;
		}
	}
	return vow;
}

let vs,vr;
let s=prompt("Enter the First string "),r=prompt("Enter the Secound string"),v=["a","A",'e','E','i','I','O','o','U','u'];
vs=vowel(s,v);
vr=vowel(r,v);
if(vs==vr){
	console.log("The both strings has same vowels");
}
else if(vs>vr){
	console.log("The First string has more vowels");
}else
	console.log("The Secound string has more vowels");

function color(){
	let x=Math.trunc(Math.random()*256),
	y=Math.trunc(Math.random()*256),
	z=Math.trunc(Math.random()*256),
	clr="rgb("+x+","+y+","+z+")";
	document.body.style.background=clr;
	console.log(clr);
}
color();