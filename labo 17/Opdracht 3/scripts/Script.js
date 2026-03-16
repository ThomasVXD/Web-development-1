const setup = () => {
    let gemeenten = [];
    let invoer = "";

    while (invoer !== "stop" && invoer !== null) {
        invoer = window.prompt("Geef een gemeente in");

        if (invoer !== "stop" && invoer !== null &&invoer !== "") {
            gemeenten.push(invoer);
        }
    }

    gemeenten.sort((a, b) => a.localeCompare(b));

    let selectElement = document.getElementById("gemeente");
    let optiesHtml = "";

    for (let i = 0; i < gemeenten.length; i++) {
        optiesHtml += `<option>${gemeenten[i]}</option>`;
    }
    selectElement.innerHTML = optiesHtml;
}

window.addEventListener("load", setup);