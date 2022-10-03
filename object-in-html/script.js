// object and values
let obj=[{'name':"maniraj"},{'name':'deepan'},{'name':'diamond'},{'name':'sanjay'},{'name':'jenifer'}];

obj.forEach(element => {
for(let key in element){

    // create list elements
   let list=document.createElement('li');
   list.innerHTML=element[key];

    // create ul elemets and appendchild of li push into ul
   let ul=document.getElementById('ul');
   ul.appendChild(list);

}});

// get button
let btn=document.getElementById('btn');
btn.addEventListener('click',colorchange);

function colorchange(){
    let r=Math.floor(Math.random()*256);
	let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
	let clr="rgb("+r+","+g+","+b+")";

    let head=document.getElementById('head');
    head.style.color=clr;
}
