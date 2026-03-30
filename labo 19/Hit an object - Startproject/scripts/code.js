// ============================================================
// GLOBALE VARIABELEN
// Alle instellingen en spelstatus in één object bundelen.
// Dit is de aanbevolen manier om globale variabelen te gebruiken.
// ============================================================
let global = {
    IMAGE_COUNT: 5,             // aantal figuren (0.png t/m 4.png)
    IMAGE_SIZE: 48,             // breedte/hoogte van het figuur in pixels
    IMAGE_PATH_PREFIX: "images/", // map waar de afbeeldingen staan
    IMAGE_PATH_SUFFIX: ".png",  // bestandsextensie van de afbeeldingen
    MOVE_DELAY: 1000,           // elke 1000ms (= 1 seconde) verspringt het figuur
    BOMB_INDEX: 0,              // afbeelding 0.png is de bom
    score: 0,                   // huidige score van de speler
    timeoutId: 0,               // bewaar het id van de timer, zodat we hem kunnen annuleren
    spelBezig: false            // is het spel momenteel aan de gang?
};


// ============================================================
// HULPFUNCTIE: willekeurig geheel getal tussen min en max (max niet inbegrepen)
// Voorbeeld: willekeurigGetal(0, 5) geeft 0, 1, 2, 3 of 4
// ============================================================
const willekeurigGetal = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
};


// ============================================================
// STAP 4 & 5: Verplaats het figuur naar een willekeurige positie
// en toon een willekeurige afbeelding
// ============================================================
const verplaatsTarget = () => {
    const target = document.getElementById("target");
    const playField = document.getElementById("playField");

    // Bereken het beschikbaar gebied (speelveld minus grootte van het figuur)
    const maxLinks = playField.clientWidth  - global.IMAGE_SIZE;
    const maxBoven = playField.clientHeight - global.IMAGE_SIZE;

    // Kies een willekeurige positie
    const nieuweLinks = willekeurigGetal(0, maxLinks);
    const nieuweBoven = willekeurigGetal(0, maxBoven);

    // Kies een willekeurige afbeelding (0 t/m 4)
    const afbeeldingNummer = willekeurigGetal(0, global.IMAGE_COUNT);
    const afbeeldingPad = global.IMAGE_PATH_PREFIX + afbeeldingNummer + global.IMAGE_PATH_SUFFIX;

    // Pas de positie en afbeelding aan
    target.style.left = nieuweLinks + "px";
    target.style.top  = nieuweBoven + "px";
    target.src = afbeeldingPad;

    // Zorg dat het figuur zichtbaar is
    target.style.display = "block";
};


// ============================================================
// STAP 7: Timer – laat het figuur elke seconde verspringen
// ============================================================
const startTimer = () => {
    // Sla het timer-id op zodat we de timer later kunnen stoppen
    global.timeoutId = setInterval(() => {
        verplaatsTarget();
    }, global.MOVE_DELAY);
};

const stopTimer = () => {
    clearInterval(global.timeoutId);
};


// ============================================================
// Klik op het figuur
// ============================================================
const klikOpTarget = (event) => {
    // Als het spel niet bezig is, doe niets
    if (!global.spelBezig) return;

    // Haal het src-attribuut op van het aangeklikte figuur
    const target = event.target;
    const src = target.src;

    // Controleer of het een bom is (0.png)
    // We kijken of de src eindigt op "0.png"
    const isBom = src.endsWith(global.BOMB_INDEX + global.IMAGE_PATH_SUFFIX);

    if (isBom) {
        // SPEL OVER
        stopTimer();
        global.spelBezig = false;
        target.style.display = "none"; // verberg de bom

        alert("BOEM! Je klikte op een bom. Spel voorbij!\nJe eindscore: " + global.score);
    } else {
        // Raak! Score verhogen
        global.score++;
        document.getElementById("scoreWeergave").textContent = global.score;

        // Verplaats meteen naar een nieuwe positie (zodat het voelt alsof je het object "weg" klikt)
        verplaatsTarget();
    }
};


// ============================================================
// STAP 8: Startknop
// ============================================================
const startSpel = () => {
    // Reset de score
    global.score = 0;
    document.getElementById("scoreWeergave").textContent = global.score;

    // Markeer het spel als bezig
    global.spelBezig = true;

    // Toon meteen een figuur en start de timer
    verplaatsTarget();
    startTimer();
};


// ============================================================
// SETUP: wordt uitgevoerd zodra de pagina geladen is
// ============================================================
const setup = () => {
    // Voeg click listener toe aan het figuur
    const target = document.getElementById("target");
    target.addEventListener("click", klikOpTarget);

    // Voeg click listener toe aan de startknop
    const startKnop = document.getElementById("startKnop");
    startKnop.addEventListener("click", startSpel);
};

// Wacht tot de pagina volledig geladen is, voer dan setup() uit
window.addEventListener("load", setup);
