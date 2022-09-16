//object within array
let student={name:"maniraj",dept:"cse",class:"A",rollno:1234,hobby:["wake up","eat","sleep"]}

for(let key in student){
console.log(key+":"+student[key]);
}
for(let x in student.hobby){
console.log(x+":"+student.hobby[x]);		
}