
const setup = () => {
    let btnSubstring=document.getElementById("substring");
    btnSubstring.addEventListener("click", maakSubstring);

}

const maakSubstring = () => {
    let txtOutput=document.getElementById("txtOutput");
    let txtInput=document.getElementById("txtInput");
    let eersteGetal=document.getElementById("eersteGetal");
    let tweedeGetal=document.getElementById("tweedeGetal");

    let tekst = txtInput.value;
    let g1=parseInt(eersteGetal.value, 10);
    let g2=parseInt(tweedeGetal.value, 10);
    let resultaat = tekst.substring(g1,g2);
    txtOutput.innerHTML= "= "+resultaat;
}


window.addEventListener('load',setup); 

















