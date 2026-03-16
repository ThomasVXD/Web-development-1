const setup = () => {
    let knop = document.getElementById("knop");
    knop.addEventListener("click", vervanger)
}

const vervanger = () => {
    let text = document.getElementById("text").value.toLowerCase();
    let result="";
    let i=0;
    while(i<text.length){
        let woordStart = (i===0||text[i-1]===" ")
        let woordEnd=(i+2===text.length||text[i+2]===" ")
        let isDe= text.slice(i,i+2).toLowerCase() === "de";
        if(woordStart&&woordEnd&&isDe){
            result+="het";
            i+=2;
        }
        else{
            result+=text[i];
            i++
        }
    }
    console.log(result);
}


window.addEventListener("load", setup);