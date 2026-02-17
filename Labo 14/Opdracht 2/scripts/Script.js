const setup = () => {
    // deze code wordt pas uitgevoerd
    // als de pagina volledig is ingeladen
}
const array = ['bob','bab','bib','beb','bub'];
console.log(array.length);
console.log(array[0]+' '+array[2]+' '+array[4]);
function VoegNaamToe(naam){
    array.push(naam);
}
let input = prompt('Welke naam wil je toevoegen?');
VoegNaamToe(input);
console.log(array);
console.log(array.toString());

window.addEventListener("load", setup);

