import { refs } from "./refs.js";
import { colorList } from "./color-theame-list.js";

let intervalId;
refs.stopButton.setAttribute("disabled", "disabled");

function toggleDisabledAttribute(el1, el2) {
  el1.toggleAttribute("disabled");
  el2.toggleAttribute("disabled");
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor(colorsArr) {
  const randomColor = colorsArr[randomNumber(null, colorsArr.length)];
  return randomColor;
}

function setTheme(color) {
  document.body.style.backgroundColor = color;
}

const startSetTheme = (startEl, stopEl) => {
  toggleDisabledAttribute(startEl, stopEl);
  intervalId = setInterval(() => {
    setTheme(randomColor(colorList));
  }, 1000);
  console.log(intervalId);
};

const stopeSetTheme = (stopEl, startEl) => {
  clearInterval(intervalId);
  toggleDisabledAttribute(startEl, stopEl);
};

refs.startButton.addEventListener("click", () => {
  startSetTheme(event.target, refs.stopButton);
});

refs.stopButton.addEventListener("click", () => {
  stopeSetTheme(event.target, refs.startButton);
});
