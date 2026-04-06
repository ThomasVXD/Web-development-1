let personen = [];
let huidigIndex = null; // null = nieuwe persoon, getal = index in personen array

// Hulpfunctie: vul het formulier in met data van een persoon
const vulFormulierIn = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

// Hulpfunctie: maak het formulier leeg
const leegFormulier = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors();
};

// Hulpfunctie: controleer of er errors zijn na validatie
const heeftErrors = () => {
    const velden = ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];
    return velden.some(id => document.getElementById(id).className === "invalid");
};

// Hulpfunctie: update de naam van een option in de lijst
const updateOptie = (index) => {
    const lst = document.getElementById("lstPersonen");
    const persoon = personen[index];
    const naam = `${persoon.familienaam} ${persoon.voornaam}`.trim();
    lst.options[index].text = naam;
    lst.options[index].value = index;
};

// Event listener (btnBewaar click)
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

    if (!heeftErrors()) {
        const persoon = {
            voornaam: document.getElementById("txtVoornaam").value.trim(),
            familienaam: document.getElementById("txtFamilienaam").value.trim(),
            geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
            email: document.getElementById("txtEmail").value.trim(),
            aantalKinderen: document.getElementById("txtAantalKinderen").value.trim()
        };

        const lst = document.getElementById("lstPersonen");

        if (huidigIndex === null) {
            // Nieuwe persoon: toevoegen aan array en lijst
            personen.push(persoon);
            huidigIndex = personen.length - 1;

            const optie = document.createElement("option");
            optie.value = huidigIndex;
            optie.text = `${persoon.familienaam} ${persoon.voornaam}`.trim();
            lst.add(optie);
            lst.value = huidigIndex; // selecteer de nieuwe optie
        } else {
            // Bestaande persoon: updaten in array en lijst
            personen[huidigIndex] = persoon;
            updateOptie(huidigIndex);
        }
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    huidigIndex = null;
    leegFormulier();

    // Deselecteer de lijst
    const lst = document.getElementById("lstPersonen");
    lst.value = "";
};

// Event listener (lstPersonen change)
const toonPersoon = () => {
    const lst = document.getElementById("lstPersonen");
    huidigIndex = parseInt(lst.value);
    clearAllErrors();
    vulFormulierIn(personen[huidigIndex]);
};

// Setup
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonPersoon);
};

window.addEventListener("load", setup);