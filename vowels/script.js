//Vowels 
let name=prompt('enter the name');
let v=["a","e","i","o","u",'A','E','I','O','U'];
let a=0;

for(i=0;i<=name.length;i++){
	for(j=0;j<v.length;j++){
        if(name[i]==v[j]){
           a++;			
		}		
	}
}
console.log("The vowels count of your name is: "+a);
