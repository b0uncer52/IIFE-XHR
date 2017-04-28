function showCarnivores (carnivores) {
	for(var i = 0; i < carnivores.length; i++) {
		display.innerHTML += carnivores[i] + " ";
	}
}

function showHerbivores (herbivores) {
	for(var i = 0; i < herbivores.length; i++) {
		display.innerHTML += herbivores[i] + " ";
	}
}

var display = document.getElementById("display");

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);