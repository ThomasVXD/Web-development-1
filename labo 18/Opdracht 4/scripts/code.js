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

	document.getElementById("saveButton").addEventListener("click", saveSwatch);
}
const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	colorDemos[0].style.backgroundColor = `rgb(${sliders[0].value},${sliders[1].value},${sliders[2].value})`;

}
const saveSwatch = () => {
	let sliders = document.getElementsByClassName("slider");
	let r = sliders[0].value;
	let g = sliders[1].value;
	let b = sliders[2].value;
	let color = 'rgb(' + r + ',' + g + ',' + b + ')';
	let wrapper = document.createElement("div");
	wrapper.style.position ="relative";
	wrapper.style.display = "inline-block";
	wrapper.style.width = "80px";
	wrapper.style.height = "80px";
	let swatch = document.createElement("div");
	swatch.style.height = "80px";
	swatch.style.height = "80px";
	swatch.style.backgroundColor = color;
	swatch.addEventListener("click", () => {
		sliders[0].value = r;
		sliders[1].value = g;
		sliders[2].value = b;
		update();
	});
	let deleteButton = document.createElement("button");
	deleteButton.textContent = "X";
	deleteButton.style.position = "absolute";
	deleteButton.style.top = "0";
	deleteButton.style.right = "0";
	deleteButton.addEventListener("click", () => wrapper.remove());

	wrapper.appendChild(swatch);
	wrapper.appendChild(deleteButton);
	document.getElementById("swatches").appendChild(wrapper);


}
window.addEventListener("load", setup);