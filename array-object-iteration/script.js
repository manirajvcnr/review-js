// Array within object iteration

let arr=[
    {
	    "name":"maniraj",
	    "age":"23",
	    "place":"cnr"
    },
    {   
        "name":"jenifer",
	    "age":"21",
	    "place":"kmc"
	},
	{
		"name":"arun",
	    "age":"22",
	    "place":"alwar"
	},
	{
		"name":"harish",
	    "age":"22",
	    "place":"surandai"
	},
	{
		"name":"deepan",
	    "age":"22",
	    "place":"tpy"
	}];
	
	
	   for (let key in arr) {
          let obj = arr[key];
           for (let i in obj) {
                console.log(i +" = " + obj[i]);
              
           }
        }
		
		// arr.forEach((key)=>{
			   // for (let k in key) {
			   // console.log(k+':'+key[k]);}
		// })
		
	