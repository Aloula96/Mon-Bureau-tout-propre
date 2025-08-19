//tarrif de base
const Tariif = 1.5;
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e) {
  for (let i = 0; i < 10; i++) {
    let nombre = i * e.target.value;

    log.textContent +=
      i + " * " + e.target.value + " = " + e.target.value * i + " / ";
  }
}
