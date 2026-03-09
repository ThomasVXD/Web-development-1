const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", anBerekener)
    let knop2 = document.getElementById("knop2");
    knop2.addEventListener("click", anBerekenerLastIndexOf)
}

const anBerekener = () => {
    let text = document.getElementById("text").value.toLowerCase();
    let countIndexOf = 0;
    let index = text.indexOf("an");
    while (index !== -1) {
        countIndexOf++;
        index = text.indexOf("an", index+1);
    }
    console.log(countIndexOf);
}
const anBerekenerLastIndexOf = () => {
    let text = document.getElementById("text").value.toLowerCase();
    let countLastIndexOf = 0;
    let Lastindex = text.lastIndexOf("an");
    while (Lastindex !== -1) {
        countLastIndexOf++;
        Lastindex = text.lastIndexOf("an", Lastindex-1);
    }
    console.log(countLastIndexOf);
}

window.addEventListener("load", setup);