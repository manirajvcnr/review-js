/*let b=parseInt(prompt("Enter the number"));
let j;
j=b;
while(j>0){
	rem=j%10;
	j=j/10;
	j=parseInt(j);
	switch(rem){
	case 1:console.log("ONE");
			break;
	case 2:console.log("TWO");
			break;
	case 3:console.log("THREE");
			break;
	case 4:console.log("FOUR");
			break;
	case 5:console.log("FIVE");
			break;
	case 6:console.log("SIX");
			break;
	case 7:console.log("SEVEN");
			break;
	case 8:console.log("EIGHT");
			break;			
	case 9:console.log("NINE");
			break;
	default:console.log("Please enter the number between 0-9");
			break;	
	} 
}*/

let a=[10,5,11,20,12],b=[];
for(i=0;i<a.length;i++){
	for(j=0;j<a.length;j++){
		if(a[i]<a[j]){
			console.log(a[j]);
			break;
		}
	}
}