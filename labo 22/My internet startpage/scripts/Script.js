const setup = () => {
    let knop = document.getElementById("go");
    knop.addEventListener("click", zoek)
    let geschiedenis = localStorage.getItem("historiek")
    if (geschiedenis !== null) {
        historiek = JSON.parse(geschiedenis);
        historiek.forEach(item => {
            maakKaart(item);
        })
    }
}
let historiek =[];

const zoek = () => {
    let input = document.getElementById("zoek").value;
    if (input.length === 0) {
        alert("Invalid command")
        return;
    }
    let inputArray = input.split(" ");
    let prefix =inputArray[0]
    let suffix =inputArray.slice(1).join(" ");
    if (suffix.length === 0) {
        alert("Invalid command")
        return;
    }
    let url = "";
    if (prefix ==="/g"){
        url ="https://www.google.com/search?q=" +suffix;
    }
    else if (prefix === "/y"){
        url ="https://www.youtube.com/results?search_query=" +suffix;
    }
    else if (prefix === "/x"){
        url ="https://x.com/hashtag/" +suffix;
    }
    else if (prefix === "/i"){
        url ="https://www.instagram.com/explore/tags/" +suffix;
    }
    else{
        alert("unkown command prefix");
    }
    if (url.length > 0){
        window.open(url, "_blank");
    }
    console.log(url);
    document.getElementById("zoek").value ="";

    //Kaartjes maken
    let titel = "";
    if (prefix ==="/g"){titel ="google"}
    else if (prefix ==="/y"){titel ="youtube"}
    else if (prefix ==="/x"){titel ="twitter"}
    else if (prefix ==="/i"){titel ="instagram"}
    let kaart ={
        title : titel,
        text : suffix,
        url : url
    };
    historiek.push(kaart);
    localStorage.setItem("historiek", JSON.stringify(historiek));
    maakKaart(kaart);
}

const maakKaart = (kaart) => {
    let kleur = "";
    if (kaart.title === "google") {kleur = "royalblue"}
    else if (kaart.title === "youtube") {kleur = "lightcoral"}
    else if (kaart.title === "twitter") {kleur = "lightblue"}
    else if (kaart.title === "instagram") {kleur = "pink"}

    let col = document.createElement("div");
    col.className = "col-4 mb-3";
    col.innerHTML = `
            <div class="card">
                <div class="card-body" style="background-color: ${kleur}">
                    <h5 class="card-title">${kaart.title}</h5>
                    <p class="card-text">${kaart.text}</p>
                    <a href="${kaart.url}" target="_blank" class="btn btn-dark btn-sm">Go!</a>
                </div>
            </div>`;
    document.getElementById("history").appendChild(col);
}

window.addEventListener("load", setup);