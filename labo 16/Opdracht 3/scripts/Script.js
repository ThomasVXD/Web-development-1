const setup = () => {
    let knop = document.getElementById("knop");

    knop.addEventListener("click", maakMetSpaties)
}

const maakMetSpaties = () => {
    let text = document.getElementById("text").value;
    let nieuweTekst = "";
    for (let i = 0; i < text.length; i++) {
        let huidigkarakter = text[i];
        if (huidigkarakter !==" "){
            nieuweTekst = nieuweTekst+huidigkarakter+" ";
        }
    }
    console.log(nieuweTekst.trim());
}

window.addEventListener("load", setup);