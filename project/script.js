document.getElementById("Calculate").onclick=function (){
let a= parseFloat(document.getElementById("Principle").value);
let b= parseFloat(document.getElementById("Interest").value);
let c= parseFloat(document.getElementById("Tenur").value);

const d=a+(a*b*c)/100;
console.log(d)
document.getElementById("1").innerHTML=d;
document.getElementById("2").innerHTML=":"+ d/12 +"/month"
}


