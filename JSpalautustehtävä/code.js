let username = document.querySelector(".name");
let note = document.getElementById("note");
let important = document.querySelector(".important")
let button = document.querySelector("button");
let div = document.querySelector(".logInfo");

let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

button.addEventListener("click", logNameAndNote);

function logNameAndNote(){
let p = document.createElement("p");
p.innerHTML = "<h3>" + date + "." + month + "." + year + " (" + username.value + ")</h3>" + note.value;
div.appendChild(p);
if(important.checked == true){
    p.classList.add("importantnote");
}
}