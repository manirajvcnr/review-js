// for in
let student={name:"maniraj",rollno:1234,class:12,section:"A"}
for(let key in student){
	console.log(key+":"+student[key]);
}

// for 
let array=[1,2,3,4,5,20,18,92];
let sum=0;
for(i=0;i<=array.length;i++){
	if(array[i]>sum){
		sum=array[i];
	}
}
console.log("The biggest number of array is "+sum);