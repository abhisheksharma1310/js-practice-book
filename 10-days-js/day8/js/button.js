let count = 0;

const body = document.querySelector("body");
    
const button = document.createElement("button");
button.innerHTML = 0;
button.id = "btn";
button.style.width = "96px";
button.style.height = "48px";
button.style.fontSize = "24px";

body.appendChild(button);

button.addEventListener("click", function(){
    count++;
    this.innerHTML = count;
})