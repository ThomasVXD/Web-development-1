const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", wijzig)

}
const wijzig = () => {
    let txtOutput=document.getElementById("txtOutput");
    let veranderText = "Welkom";
    txtOutput.innerHTML= veranderText;
}

window.addEventListener("load", setup);