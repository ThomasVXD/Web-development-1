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
	const opgeslagenSliders = JSON.parse(localStorage.getItem("sliders"));
	if (opgeslagenSliders) {
		sliders[0].value = opgeslagenSliders.r;
		sliders[1].value = opgeslagenSliders.g;
		sliders[2].value = opgeslagenSliders.b;
		update();
	}
	const opgeslagenSwatches = JSON.parse(localStorage.getItem("swatches")) || [];
	opgeslagenSwatches.forEach((swatch, index) => {
		createSwatch(swatch.r, swatch.g, swatch.b, index);
	});
}
const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemos=document.getElementsByClassName("colorDemo");
	colorDemos[0].style.backgroundColor = `rgb(${sliders[0].value},${sliders[1].value},${sliders[2].value})`;
	localStorage.setItem("sliders", JSON.stringify({ r: sliders[0].value, g: sliders[1].value, b: sliders[2].value }));}

const saveSwatch = () => {
	let sliders = document.getElementsByClassName("slider");
	let r = sliders[0].value;
	let g = sliders[1].value;
	let b = sliders[2].value;

	const swatches = JSON.parse(localStorage.getItem("swatches")) || [];
	const index = swatches.length;
	swatches.push({r, g ,b});
	localStorage.setItem("swatches", JSON.stringify(swatches));

	createSwatch(r, g, b, index);
}
const createSwatch = (r, g, b, index) => {
	let sliders = document.getElementsByClassName("slider");
	let color = 'rgb(' + r + ',' + g + ',' + b + ')';
	let wrapper = document.createElement("div");
	wrapper.dataset.index = index;
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
	deleteButton.addEventListener("click", () => {
		wrapper.remove()
		deleteSwatch(index)
	});

	wrapper.appendChild(swatch);
	wrapper.appendChild(deleteButton);
	document.getElementById("swatches").appendChild(wrapper);
}
const deleteSwatch = (index) => {
	const swatches = JSON.parse(localStorage.getItem("swatches")) || [];
	swatches.splice(index, 1);
	localStorage.setItem("swatches", JSON.stringify(swatches));
}
window.addEventListener("load", setup);