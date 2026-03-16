const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", maakTrigrams)
}

const maakTrigrams = () => {
    let text = document.getElementById("text").value;
    let beginDex = 0;
    let eindDex = 3;
    for (eindDex; eindDex <= text.length; eindDex++) {
            console.log(text.slice(beginDex,eindDex))
            beginDex++;
        }
    }


window.addEventListener("load", setup);