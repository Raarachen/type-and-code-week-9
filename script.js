let body = document.querySelector("body")
let roll = Math.random()
if (roll<0.5) {
    body.style.backgroundColor = 'blue';
    body.textContent = "blue";
    body.style.color = "pink";
} else {
    body.style.backgroundColor = 'pink';
    body.textContent = "pink";
    body.classList.add ("flower");
    
}