// javascript
let volume= document.getElementById("volume-el")
let liters
let galons
let mass= document.getElementById("mass-el")
let kilograms
let pounds
let length= document.getElementById("length-el")
let meter
let feet

let clearbtn =document.getElementById("div1")
console.log(clearbtn)
clearbtn.innerHTML += '<span><button id="clrbtn-el" onclick="clea()">Clear</button></span>'; 
function clea(){
  input.value=" ";
  console.log(input.value)
  length.textContent=""
  volume.textContent=""
  mass.textContent=""
 
 
}
/**/
let buttonEl= document.getElementById("button-el")
let input= document.querySelector("#input-el")
buttonEl.addEventListener("click" , function(){
    
    renderLength()
    renderVolume()
    renderMass()
    console.log("clicked")
   
})

function renderLength()
{ if(input.value){
    meter=(parseFloat(input.value)/3.281).toFixed(2)
    feet=(parseFloat(input.value)*3.281).toFixed(2)
    length.textContent = `${input.value} meter = ${feet} feet | ${input.value} feet = ${meter} meter`
}}

function renderVolume()
{
    galons= (parseFloat(input.value)*0.264).toFixed(2)
    liters= (parseFloat(input.value)/0.264).toFixed(2)
    volume.textContent=`${input.value} galons = ${liters} liters | ${input.value} liters = ${galons} galons `
}

function renderMass()
{
    pounds=(parseFloat(input.value)*2.204).toFixed(2)
    kilograms=(parseFloat(input.value)/2.204).toFixed(2)
    mass.textContent=`${input.value} kilograms = ${pounds} pounds | ${input.value} pounds = ${kilograms} kilograms `
}
//window.onload= function() {
    
//}
