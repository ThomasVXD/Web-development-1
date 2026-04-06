const setup = () => {
    let student1 ={
        voornaam : "bobber",
        familienaam: "kurwa",
        geboortedatum: new Date("1999,09,29"),
        adres : {
            straat: "beverstraat 18",
            postcode: "9999",
            gemeente: "beveren"
        },
        isIngeschreven: true,
        aantalAutos: 5,
        namenVanAutos:["aston martin db11", "lamborghini huracan", "mclaren P1", "ferrari SF90"],
    }
    let jsonString = JSON.stringify(student1);
    console.log(jsonString);
    let String= JSON.parse(jsonString);
    console.log(String.namenVanAutos);
}
window.addEventListener("load", setup);