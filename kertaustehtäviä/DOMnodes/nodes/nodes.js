
// 1. Lisää sivun loppuun uusi hr-elementti.
let content = document.querySelector("#content");
let hr = document.createElement("hr");
content.appendChild(hr);
// 2. Lisää hr-elementin jälkeen h3-otsikkona oma nimesi.
let nametitle = document.createElement("h3");
nametitle.textContent = "Jaakko";
content.appendChild(nametitle);
// Voi tehdä myös pelkkänä append toimintona --> content.append(hr, h3)
// 3. Lisää viikonpäivien perään myös sunnuntai ”su”
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = ("Sunnuntai");
ul.appendChild(li);
// 4. Poista ”turhake” lista-item.
let turha = document.querySelector("ul li:first-child");
turha.remove();

// Lisää maanantai listalle. (insertbefore)
let contentul = document.querySelector("ul li:first-child");
let maanantai = document.createElement("li");
maanantai.textContent = "Maanantai";
contentul.parentElement.insertBefore(maanantai, contentul);
//Lisää uusi lista item ”välipäivä” ennen sunnuntaita. (insertBefore)
let sunnuntai = document.querySelector("ul li:last-child");
let vp = document.createElement("li");
vp.textContent = "välipäivä"
sunnuntai.parentNode.insertBefore(vp, sunnuntai);
//Muokkaa jokainen viikonpäivä näkymään listalla lihavoituna
let items = document.querySelectorAll("ul:first-child li");
for (const item of items) {
    let text = item.textContent;
    item.textContent = "";
    let b = document.createElement("b");
    b.textContent = text;
    item.appendChild(b);
}
// YKSINKERTAISEMMIN items.style.fontWeight = "bold";
//Extra. muokkaa viikonpäivä näkymään listalla punaisena
for(i = 0; 1 < items.length; i++){
    items[i].style.color = "red"
}
// YKSINKERTAISEMMIN items.style.color = "red";
