let dark = document.getElementById("dark");
let light = document.getElementById("light");
let celsius = document.getElementById("Celsius");
let farenheit = document.getElementById("Fahrenheit");

// THEME BUTTONS
dark.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen";
  document.getElementById("h1").style.color = "#FFFFFF";
  document.getElementById("p").style.color = "#FFFFFF";
  document.getElementById("theme").style.color = "#FFFFFF";
});

light.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightyellow";
  document.getElementById("h1").style.color = "green";
  document.getElementById("p").style.color = "green";
  document.getElementById("theme").style.color = "red";
});

// TEMPERATURE CONVERTER

celsius.addEventListener("input", function () {
  let tempCelsius = this.value;
  if (tempCelsius) {
    let result = (tempCelsius * 9) / 5 + 32;
    farenheit.value = `${result}° F`;
  } else {
    farenheit.value = null;
  }
});

farenheit.addEventListener("input", function () {
  let tempFarenheit = this.value;
  if (tempFarenheit) {
    let result = ((tempFarenheit - 32) * 5) / 9;
    celsius.value = `${result}° C`;
  } else {
    celsius.value = null;
  }
});