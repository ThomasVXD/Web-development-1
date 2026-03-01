const setup = () => {
    let knop = document.getElementById("knop");

    knop.addEventListener("click", bereken);
}

const bereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaalCel= document.getElementsByClassName("totaal")[0];
    let totaal = 0;
    for (let i = 0; i < prijzen.length; i++){
        let prijs = parseFloat(prijzen[i].textContent);
        let aantalinput = aantallen[i].getElementsByTagName("input")[0];
        let aantal = parseFloat(aantalinput.value);
        let btwperc = parseFloat(btw[i].textContent);
        let basisPrijs = prijs * aantal;
        let subtotaal = basisPrijs +(basisPrijs * (btwperc/100))
        totaal += subtotaal;
        subtotalen[i].textContent = subtotaal.toFixed(2) + "EUR";
    }
    console.log(totaal);
    totaalCel.textContent = totaal.toFixed(2) + "EUR";
}

window.addEventListener("load", setup);