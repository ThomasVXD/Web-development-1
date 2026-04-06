const setup = () => {
    let geboortedatum = new Date("2007-08-23")
    let huidigeDatum = new Date("2026-03-31")
    let verschil = (huidigeDatum - geboortedatum)/86400000;
    console.log(verschil);
}
window.addEventListener("load", setup);