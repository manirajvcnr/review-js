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

//function small_large(great){
//    let t=-1;
//    great=great.sort(function(a,b){return a-b})
//    if(great==''){
//    console.log(t);
//    }
//    else
  //      console.log(great[0]);

//}

//let a=[10,5,11,20,12],great=[];
//for(i=0;i<a.length;i++){
//    for(j=0;j<a.length;j++){
//        if(a[i]<a[j]){
//            great.push(a[j]);
    //    }
  //      
//    }
//    console.log(great);
//    small_large(great);
 //   great=[];
//}

/*
let b_day,c_age,t,tt,age,yr;
b_day = new Date("11/14/1999")
t=b_day.getTime(); 
 tt = Date.now() - t;   
 c_age = new Date(tt);
 yr = c_age.getUTCFullYear();
 age = Math.abs(yr - 1970); 
console.log("The Present Age is",age);
*/

/*
let gn_date=new Date("09/17/2022"),
day=gn_date.getDay(gn_date);
if(day=="0"||day=="6"){
	console.log("The Date entered is weekend");
}
else{
	console.log("The Date entered is Working day");
}
*/
/*
// 2.Write a program to calculate age using JS date
let dob = new Date("02/27/2000"), 
time=dob.getTime(); 
// console.log(time);
let total = Date.now() - time;
// console.log(total);   
let age_cal = new Date(total);
// console.log(age_cal);
let year = age_cal.getUTCFullYear();
// console.log(year);
let age = Math.abs(year - 1970); 
console.log("Age :"+age);

*/
/*
let d=1,mon=09,yr=2022;
date=mon+"/"+d+"/"+yr;
console.log(date);
//let gn_date=new Date("09/17/2022"),
let gn_date=new Date(date);
console.log(gn_date);
day=gn_date.getDay(gn_date);
out=gn_date-((24*60*60*1000)*(day-1));
const output=new Date(out);
console.log(output);

*/
/*
let d1=13,d2=17,mon1=09,mon2=09,yr1=2022,yr2=2022,
date1=mon1+"/"+d1+"/"+yr1,
date2=mon2+"/"+d2+"/"+yr2;
Dte1=new Date(date1);
Dte2=new Date(date2);
let diff=Dte2-Dte1;
console.log(diff);
diff_hrs=Math.abs(diff/(1000*60*60));
console.log("The difference in hours is ",diff_hrs);
*/

/*
let h1=5,h2=13,d1=13,d2=17,mon1=09,mon2=09,yr1=2022,yr2=2022,
date1=mon1+"/"+d1+"/"+yr1,
date2=mon2+"/"+d2+"/"+yr2;
Dte1=new Date((date1)+(h1*60*60*1000));
//Dte1=new Date(date1);	
Dte2=new Date(date2);
console.log(Dte1);
let diff=Dte2-Dte1;
console.log(diff);
diff_hrs=Math.abs(diff/(1000*60*60));
console.log("The difference in hours is ",diff_hrs);
*/

//For difference in hours
/*
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
const a = new Date(2018, 11, 24, 13, 33, 30, 0);
let res=a-d;
res=res/(1000*60*60);
console.log("The Difference in hours is "+res+"hours");
*/
/*
function bg_chng(){
	let r=Math.floor(Math.random()*256);
	let b=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
	let clr="rgb("+r+","+g+","+b+")";
	document.getElementById("bgclr").style.background=clr;
}

document.getElementById("but").addEventListener("click",function(){
	let inp_data=document.getElementById("inp").value;
	document.getElementById("head").style.color=inp_data;
	//document.getElementById("bgclr").style.background=inp_data;
});
document.getElementById("bgchn").addEventListener("click",bg_chng);


//To Check the string is Palindrome or not

let str=prompt("Enter the string to check whether it is Palindrome or Not "),a=0;
for(i=0;i<str.length;i++){
	for(j=str.length-1;j>=0;j++){
		if(str[i]!=str[j]){
			a++;
			break;
		}
		else{
				
		}
	}
}

	if(a==0)
		console.log("The Given String is a Palindrome");
	else
		console.log("The Given String is not a Palindrome");
	
*/	
//let str_rev=str.reverse();
//console.log(str_rev);



let a=prompt("Enter the first string"),i,j,x=0;
 let al= a.length;
 for (i=0;i<al/2;i++){
    if(a[i]==a[al-1-i]){
		
	}
    else
        x++;
}
if(x)
	console.log("The given string is not a palindrome");
 else
	console.log("The given string is a palindrome");																																										