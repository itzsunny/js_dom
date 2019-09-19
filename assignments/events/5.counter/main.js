


document.querySelector(".increment").addEventListener("click", () => {
var inc = document.querySelector("h1")
inc.innerText = +inc.innerText + 1;
});

document.querySelector(".decrement").addEventListener("click", () => {
	var dec = document.querySelector("h1")
	dec.innerText = +dec.innerText - 1; 
});

document.querySelector(".reset").addEventListener("click", () => {
	var res = document.querySelector("h1")
	res.innerText = 0;
});