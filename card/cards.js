//for heading
let h=document.querySelector(".contanier")
h.style.color="orange"
//body background color
let l=document.getElementById("deep")
l.style.background="gray"
// first card 
let a=document.getElementById("first")
a.style.background="pink"
let g=document.querySelector("#first")
g.style.color="green"
// second card
let f=document.getElementById("second")
f.style.background="pink"
for(let i=0;i<=2;i++){
    let b=document.getElementsByClassName("card-text")
    b[i].style.color="blue"
}
//third card
let e=document.getElementById("th")
e.style.background="pink"
let c=document.querySelector("#th")
c.style.color="green"

let d=document.querySelectorAll(".hyy")
d[0].style.color="purple"
d[1].style.color="purple"
console.log(d)
