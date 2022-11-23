/**
 * @type {HTMLElement}
 */
let elem = document.querySelector("#special");
elem.style.color = "red";


let h = document.querySelector("h1");
h.classList.add("colorful");

h.classList.toggle("colorful");
function changeStyle(){
    let body = document.querySelector("body");
    body.classList.toggle("darkmode")
    let h = document.querySelector("h1");
    h.classList.toggle("colorful");
}
