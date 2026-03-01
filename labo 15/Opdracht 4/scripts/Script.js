const setup = () => {
    let knop1 = document.getElementById("knop1");
    let knop2 = document.getElementById("knop2");
    let knop3 = document.getElementById("knop3");

    knop1.addEventListener("click", toggle1)
    knop2.addEventListener("click", toggle2)
    knop3.addEventListener("click", toggle3)
}
const toggle1 = () => {
    let knop1 = document.getElementById("knop1");
    knop1.classList.toggle("geactiveerde-knop");
}
const toggle2 = () => {
    let knop2 = document.getElementById("knop2");
    knop2.classList.toggle("geactiveerde-knop");
}
const toggle3 = () => {
    let knop3 = document.getElementById("knop3");
    knop3.classList.toggle("geactiveerde-knop");
}

window.addEventListener("load", setup);