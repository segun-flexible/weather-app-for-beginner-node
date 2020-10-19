

const form = document.querySelector(".form");
const input = form.querySelector("input")
const p = document.querySelector("p");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
fetch(`/weather?address=${input.value.trim()}`).then(res => res.json()).then(res => {
    console.log()
     p.textContent = res.result ? `There is ${res.result.weather.description} in ${res.result.city_name}` : `${res.error}`
}).catch(err => console.log(err))


})