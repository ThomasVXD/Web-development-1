const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);

	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);

	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);

	// maak het blokje rood
	colorDemos[0].style.backgroundColor = "red"
}
const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	colorDemos[0].style.backgroundColor = `rgb(${sliders[0].value},${sliders[1].value},${sliders[2].value})`;

}
// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);