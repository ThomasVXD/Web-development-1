const setup = () => {
    console.log(typeof leeftijd);
    console.log(typeof intrest);
    console.log(typeof isGevaarlijk);
    console.log(typeof vandaag);
    console.log(typeof print());
}
let leeftijd = 34;
let intrest = 0.12;
let isGevaarlijk=true;
let vandaag = new Date();
const print = (message) => {
    console.log(message);
}
window.addEventListener("load", setup);