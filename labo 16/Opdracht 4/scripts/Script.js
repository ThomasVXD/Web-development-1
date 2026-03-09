const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", maakMetSpaties)
}

const maakMetSpaties = () => {
    let text = document.getElementById("text").value;
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let huidigkarakter = text[i];
        if (huidigkarakter !==" "){
            result = result+huidigkarakter+" ";
        }
    }
    console.log(result.trim());
}

window.addEventListener("load", setup);