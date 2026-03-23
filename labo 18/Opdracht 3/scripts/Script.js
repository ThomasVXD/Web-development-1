const setup = () => {
    let knop = document.querySelector("#knop");
    knop.addEventListener("click", voegToe)
}
const voegToe = () =>{
    let p = document.createElement("p")
    p.textContent = "capybara"; // ← geef het ook wat inhoud
    document.querySelector("#myDIV").appendChild(p);
}
window.addEventListener("load", setup);