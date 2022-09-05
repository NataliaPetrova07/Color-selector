start();

let color;
let hValue, sValue, lValue;

function start() {
  let colorValue = document.querySelector("#colorselector").addEventListener("input", getColorValue);
}

function getColorValue() {
  color = document.querySelector("#colorselector").value;
  console.log(color);
  updateRectangle();
}

function updateRectangle() {
  document.getElementById("rectangle").style.backgroundColor = color;
  updateHEX();
}

function updateHEX() {
  document.querySelector(".HEXvalue").textContent = color;
  HEXtoRGB(color);
}

function HEXtoRGB(string) {
  let r = parseInt(string.substring(1, 3), 16);
  let g = parseInt(string.substring(3, 5), 16);
  let b = parseInt(string.substring(5), 16);

  document.querySelector(".rvalue").textContent = r;
  document.querySelector(".gvalue").textContent = g;
  document.querySelector(".bvalue").textContent = b;

  RGBtoHSL(r, g, b);
}

function RGBtoHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  hValue = Math.round(h);
  sValue = Math.round(s);
  lValue = Math.round(l);

  //   console.log(hValue, sValue, lValue);
  updateHSL();
}

function updateHSL() {
  document.querySelector(".Hvalue").textContent = hValue;
  document.querySelector(".Svalue").textContent = sValue;
  document.querySelector(".Lvalue").textContent = lValue;
}
