var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        console.log("inside event", JSON.parse(this.responseText));
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        return callbackToInvoke(carnivores.carnivores);

      });
      loader.open("GET", "carnivores.json");
      loader.send();
    },
    loadHerbivores: function (callbackToInvoke) {
      loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
         return callbackToInvoke(herbivores.herbivores);

      });
      loader.open("GET", "herbivores.json");
      loader.send();
    }
  }
})();