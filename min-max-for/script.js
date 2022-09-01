// MIN and MAX 
// Maximum value
let arr=[18,4,7,96,199,67,9,120,1],num=0;

for(i=0;i<=arr.length;i++){
	if(arr[i]>num){
		num=arr[i];
	}
}
console.log("The big Value in array "+num);

// Minimum value
for(i=0;i<=arr.length;i++){
	if(arr[i]<num){
		num=arr[i];
	}
}
console.log("The small value in array "+num);

