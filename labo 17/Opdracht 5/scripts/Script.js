const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
}

const isGetal = (tekst) => {
    return !isNaN(tekst) && !isNaN(parseFloat(tekst));
}

const valideer = () => {
    let voornaam = document.getElementById("voornaam");
    let achternaam = document.getElementById("achternaam");
    let geboortedatum = document.getElementById("geboortedatum");
    let email = document.getElementById("email");
    let kinderen = document.getElementById("aantalKinderen");

    let errVoornaam = document.getElementById("errVoornaam");
    let errAchternaam = document.getElementById("errAchternaam");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let errEmail = document.getElementById("errEmail");
    let errKinderen = document.getElementById("errKinderen");

    const inputs = [voornaam, achternaam, geboortedatum, email, kinderen];
    const errors = [errVoornaam, errAchternaam, errGeboortedatum, errEmail, errKinderen];

    inputs.forEach(input => input.classList.remove("invalid"));
    errors.forEach(err => err.innerHTML = "");

    let allesOk = true;

    if (voornaam.value.trim().length > 30) {
        voornaam.classList.add("invalid");
        errVoornaam.innerHTML = "max. 30 karakters";
        allesOk = false;
    }

    if (achternaam.value.trim().length === 0) {
        achternaam.classList.add("invalid");
        errAchternaam.innerHTML = "verplicht veld";
        allesOk = false;
    } else if (achternaam.value.trim().length > 50) {
        achternaam.classList.add("invalid");
        errAchternaam.innerHTML = "max. 50 karakters";
        allesOk = false;
    }

    // --- CONTROLE GEBOORTEDATUM (jjjj-mm-dd) ---
    let datumStr = geboortedatum.value.trim();
    let datumDelen = datumStr.split("-"); // We kappen de string in stukken op het streepje

    if (datumStr.length === 0) {
        geboortedatum.classList.add("invalid");
        errGeboortedatum.innerHTML = "verplicht veld";
        allesOk = false;
    } else if (datumDelen.length !== 3 || datumDelen[0].length !== 4 || datumDelen[1].length !== 2 || datumDelen[2].length !== 2 || !isGetal(datumDelen[0]) || !isGetal(datumDelen[1]) || !isGetal(datumDelen[2])) {
        // We checken: 2 streepjes (dus 3 delen), jaar=4 tekens, maand=2, dag=2 EN alles moet getal zijn
        geboortedatum.classList.add("invalid");
        errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
        allesOk = false;
    }

    // --- CONTROLE EMAIL (verplicht, 1x @, niet op begin of eind) ---
    let emailStr = email.value.trim();
    let atPos = emailStr.indexOf("@");
    let lastAtPos = emailStr.lastIndexOf("@");

    if (emailStr.length === 0) {
        email.classList.add("invalid");
        errEmail.innerHTML = "verplicht veld";
        allesOk = false;
    } else if (atPos <= 0 || atPos !== lastAtPos || atPos === emailStr.length - 1) {
        // atPos <= 0: @ ontbreekt of staat vooraan
        // atPos !== lastAtPos: er is meer dan één @
        // atPos === length - 1: @ staat achteraan
        email.classList.add("invalid");
        errEmail.innerHTML = "geen geldig emailadres";
        allesOk = false;
    }

    // --- CONTROLE KINDEREN (getal, positief, < 99) ---
    let kindWaarde = kinderen.value.trim();
    if (!isGetal(kindWaarde)) {
        kinderen.classList.add("invalid");
        errKinderen.innerHTML = "is geen getal";
        allesOk = false;
    } else if (parseInt(kindWaarde) < 0) {
        kinderen.classList.add("invalid");
        errKinderen.innerHTML = "moet positief zijn";
        allesOk = false;
    } else if (parseInt(kindWaarde) >= 99) {
        kinderen.classList.add("invalid");
        errKinderen.innerHTML = "te groot aantal";
        allesOk = false;
    }

    // EINDRESULTAAT
    if (allesOk) {
        alert("proficiat!");
    }
}

window.addEventListener("load", setup);