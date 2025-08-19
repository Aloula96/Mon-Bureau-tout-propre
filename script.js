const surfaceInput = document.getElementById("surface");
const frequencySelect = document.getElementById("frequency");
const windowsSelect = document.getElementById("windows");
const log = document.getElementById("log");
const submitButton = document.getElementById("Submit");
const tvaInput = document.getElementById("tva");

submitButton.addEventListener("click", () => {
  let surfaceTarrif = parseFloat(surfaceInput.value);
  let frequency = parseInt(frequencySelect.value);
  let windows = windowsSelect.value;
  let tvaValue = parseFloat(tvaInput.value) / 100; // ex: 20% => 0.2

  let nombre = surfaceTarrif * 1.5;

  if (frequency) {
    nombre *= frequency;
  }

  if (windows === "yes") {
    nombre += 0.1 * surfaceTarrif;
  }

  let prixHT = nombre;
  let prixTTC = prixHT * (1 + tvaValue);

  log.textContent = `Tarif HT : ${prixHT.toFixed(2)} € | Tarif TTC (TVA ${
    tvaValue * 100
  }%) : ${prixTTC.toFixed(2)} €`;
});
