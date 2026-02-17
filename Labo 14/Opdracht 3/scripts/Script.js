const setup = () => {
    // deze code wordt pas uitgevoerd
    // als de pagina volledig is ingeladen
}
let antwoord = window.prompt("Weet u het zeker?");
console.log(antwoord);
let naam = window.prompt("Wat is uw naam?", "onbekend");
console.log(naam);
window.addEventListener("load", setup);