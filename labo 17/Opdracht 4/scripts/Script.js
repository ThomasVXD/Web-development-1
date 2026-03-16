const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", output)
}

const output = () => {
    let IsRoker = document.getElementById("roker");
    let tekstRoker ="";
    if (IsRoker.checked) {
        tekstRoker = "is roker"
    } else {
        tekstRoker = "is geen roker"
    }

    let radioButton = document.getElementsByName("moedertaal");
    let tekstMoedertaal ="";
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            tekstMoedertaal = radioButton[i].value;
        }
    }

    let buurland = document.getElementById("buurland");
    let geselecteerdElement = buurland.selectedIndex;
    let buurlandtekst = "";
    if (geselecteerdElement !== -1) {
        buurlandtekst = buurland.options[geselecteerdElement].value;
    }

    let bestelling = document.getElementById("bestelling");
    let bestellingtekst = "";
    for (let i = 0; i < bestelling.options.length; i++) {
        if (bestelling.options[i].selected) {
            bestellingtekst += bestelling.options[i].value +" ";
        }
    }

    console.log(tekstRoker);
    console.log("Moedertaal is "+tekstMoedertaal);
    console.log("favoriete buurland is "+buurlandtekst);
    console.log("bestelling bestaat uit "+bestellingtekst.trim());
}
window.addEventListener("load", setup);