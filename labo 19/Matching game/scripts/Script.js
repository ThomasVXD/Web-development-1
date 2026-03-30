// ============================================================
// GLOBALE VARIABELEN – alles in één object
// ============================================================
let global = {
    AANTAL_HORIZONTAAL: 4,   // 4 kolommen
    AANTAL_VERTICAAL: 3,     // 3 rijen
    AANTAL_KAARTEN: 6,       // 6 verschillende afbeeldingen

    // Namen van de kaartafbeeldingen (voor- en achterkant)
    AFBEELDINGEN: ["kaart1.svg","kaart2.svg","kaart3.svg","kaart4.svg","kaart5.svg","kaart6.svg"],
    ACHTERKANT: "images/achterkant.svg",
    AFBEELDING_PAD: "images/",

    eersteKaart: null,   // de eerste omgedraaide kaart (of null als er geen is)
    isBusy: false        // blokkeer klikken tijdens de wachttijd
};


// ============================================================
// HULPFUNCTIE: schud een array willekeurig door elkaar
// (Fisher-Yates algoritme – standaard manier om te shufflen)
// ============================================================
const schud = (array) => {
    // Loop van achter naar voor
    for (let i = array.length - 1; i > 0; i--) {
        // Kies een willekeurige index tussen 0 en i
        const j = Math.floor(Math.random() * (i + 1));
        // Wissel element i en element j om
        let tijdelijk = array[i];
        array[i] = array[j];
        array[j] = tijdelijk;
    }
    return array;
};


// ============================================================
// STAP 1: Bouw het speelveld op
// Maak 12 kaarten (elk van de 6 afbeeldingen 2 keer),
// schud ze en voeg ze toe aan de pagina
// ============================================================
const bouwSpeelveld = () => {
    const speelveld = document.getElementById("speelveld");

    // Maak het speelveld leeg (belangrijk bij herstart)
    speelveld.innerHTML = "";

    // Reset de spelstatus
    global.eersteKaart = null;
    global.isBusy = false;
    document.getElementById("melding").textContent = "";

    // Maak een array met 12 kaarten: elke afbeelding 2 keer
    let kaartLijst = [];
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        kaartLijst.push(global.AFBEELDINGEN[i]); // eerste exemplaar
        kaartLijst.push(global.AFBEELDINGEN[i]); // tweede exemplaar (het paar)
    }

    // Schud de kaarten willekeurig door elkaar
    schud(kaartLijst);

    // Maak voor elke kaart een HTML-element aan en voeg toe aan het speelveld
    for (let i = 0; i < kaartLijst.length; i++) {
        const kaartDiv = document.createElement("div");
        kaartDiv.classList.add("kaart");

        // Sla de naam van de kaartafbeelding op als data-attribuut
        // Zo kunnen we later controleren of twee kaarten overeenkomen
        kaartDiv.dataset.afbeelding = kaartLijst[i];

        // De kaart toont standaard de achterkant
        const img = document.createElement("img");
        img.src = global.ACHTERKANT;
        img.alt = "kaart";

        kaartDiv.appendChild(img);

        // Voeg een klik-luisteraar toe aan elke kaart
        kaartDiv.addEventListener("click", klikOpKaart);

        speelveld.appendChild(kaartDiv);
    }
};


// ============================================================
// STAP 2b: Draai een kaart om (toon de voorkant)
// ============================================================
const draaiOm = (kaartDiv) => {
    const img = kaartDiv.querySelector("img");
    img.src = global.AFBEELDING_PAD + kaartDiv.dataset.afbeelding;
};

// Draai een kaart terug (toon de achterkant)
const draaiTerug = (kaartDiv) => {
    const img = kaartDiv.querySelector("img");
    img.src = global.ACHTERKANT;
};

// Controleer of een kaart momenteel de voorkant toont
const isOmgedraaid = (kaartDiv) => {
    const img = kaartDiv.querySelector("img");
    return img.src.includes(kaartDiv.dataset.afbeelding);
};


// ============================================================
// STAP 2c & 2d: Controleer of twee kaarten overeenkomen
// ============================================================
const controleerPaar = (kaart1, kaart2) => {
    if (kaart1.dataset.afbeelding === kaart2.dataset.afbeelding) {
        // ✅ GOED! Beide kaarten zijn hetzelfde
        kaart1.classList.add("goed");
        kaart2.classList.add("goed");
        document.getElementById("melding").textContent = "✅ Goed!";

        // Na 800ms: verwijder de kaarten (maak ze onzichtbaar)
        setTimeout(() => {
            kaart1.classList.add("verwijderd");
            kaart2.classList.add("verwijderd");
            kaart1.classList.remove("goed");
            kaart2.classList.remove("goed");
            document.getElementById("melding").textContent = "";

            global.isBusy = false;
            global.eersteKaart = null;

            // Controleer of het spel voorbij is
            controleerEinde();
        }, 800);

    } else {
        // ❌ FOUT! Kaarten zijn verschillend
        kaart1.classList.add("fout");
        kaart2.classList.add("fout");
        document.getElementById("melding").textContent = "❌ Niet hetzelfde, probeer opnieuw!";

        // Na 1 seconde: draai beide kaarten terug naar de achterkant
        setTimeout(() => {
            draaiTerug(kaart1);
            draaiTerug(kaart2);
            kaart1.classList.remove("fout");
            kaart2.classList.remove("fout");
            document.getElementById("melding").textContent = "";

            global.isBusy = false;
            global.eersteKaart = null;
        }, 1000);
    }
};


// ============================================================
// STAP 2b: Klik op een kaart
// ============================================================
const klikOpKaart = (event) => {
    // Blokkeer klikken als we wachten (isBusy) of als het spel voorbij is
    if (global.isBusy) return;

    // Haal de kaart-div op (het element waarop geklikt werd)
    const kaartDiv = event.currentTarget;

    // Negeer klikken op al omgedraaide of verwijderde kaarten
    if (isOmgedraaid(kaartDiv)) return;
    if (kaartDiv.classList.contains("verwijderd")) return;

    // Draai de kaart om
    draaiOm(kaartDiv);

    if (global.eersteKaart === null) {
        // Dit is de eerste kaart: onthoud hem en wacht op de tweede klik
        global.eersteKaart = kaartDiv;
    } else {
        // Dit is de tweede kaart: vergelijk met de eerste
        global.isBusy = true; // blokkeer verdere klikken tijdens de vergelijking
        controleerPaar(global.eersteKaart, kaartDiv);
    }
};


// ============================================================
// Controleer of alle kaarten verwijderd zijn (spel gewonnen)
// ============================================================
const controleerEinde = () => {
    const alleKaarten = document.querySelectorAll(".kaart");
    const verwijderd = document.querySelectorAll(".kaart.verwijderd");

    if (alleKaarten.length === verwijderd.length) {
        // Alle kaarten zijn gevonden!
        setTimeout(() => {
            document.getElementById("melding").textContent = "🎉 Gefeliciteerd! Je hebt alle paren gevonden!";
        }, 300);
    }
};


// ============================================================
// SETUP: wordt uitgevoerd zodra de pagina geladen is
// ============================================================
const setup = () => {
    bouwSpeelveld();

    // Herstart-knop
    document.getElementById("herstart").addEventListener("click", bouwSpeelveld);
};

window.addEventListener("load", setup);
