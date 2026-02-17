const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}


const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput=document.getElementById("txtOutput");
    let tekst = txtInput.value;
    txtOutput.innerHTML= tekst;
}

window.addEventListener("load", setup);