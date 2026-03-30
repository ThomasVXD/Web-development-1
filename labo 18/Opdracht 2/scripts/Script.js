const setup = () => {
    let listItems = document.querySelectorAll("li");
    for(let i = 0; i < listItems.length; i++) {
        let li = listItems[i];
        li.className = "listitem"
    }
    let img = document.createElement("img");
    img.src = "images/capy.jpg";
    document.body.appendChild(img);
}
window.addEventListener("load", setup);