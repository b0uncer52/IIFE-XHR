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

//this calls the loadCarnivore function from Predator, passing showCarnivor, which is a
//reference to a function, later to be returned, with the (), thereby invoking it
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);