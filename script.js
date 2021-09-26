document.addEventListener("DOMContentLoaded", function () {
  var names = ["Richard", "Resha", "Mel", "Lovelight", "Sofi"];

  var locations = [
    "drawing room",
    "kitchen",
    "parlor",
    "office",
    "study",
    "basement",
    "wine cellar",
    "field house",
    "copy room",
    "theatre",
  ];

  var weapons = [
    "bat",
    "hat",
    "cat",
    "m60",
    "SPAS 12",
    "dynamite",
    "anvil",
    "chainsaw",
    "switchblade",
    "CRT television",
    "vase",
    "dumbbell",
    "bedframe",
    "door",
    "lawsuit",
    "80s cellphone",
    "violent video game",
    "presidential memorabilia",
    "plank with nails",
    "chain",
  ];

  var murderlizer = function () {
    var nameIndex = [i] % names.length;

    var locationIndex = [i] % locations.length;

    var weaponIndex = [i] % weapons.length;

    return function () {
      alert(
        "I accuse " +
          names[nameIndex] +
          ", with the " +
          weapons[weaponIndex] +
          " in the " +
          locations[locationIndex] +
          "!"
      );
    };
  };

  for (i = 0; i < 100; i++) {
    var accs = document.createElement("h3");
    accs.id = "Accusation " + [i];
    accs.textContent = "Accusation " + [i + 1];
    document.body.appendChild(accs);
    accs.addEventListener("click", murderlizer());
  }
});
