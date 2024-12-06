let displayFigure = "";
const Display = document.getElementById("display");
const buttonPressed = document.getElementById("buttons");

function updateDisplay(value) {
  displayFigure = displayFigure + value;
  Display.textContent = displayFigure;
}

function clearDisplay() {
  displayFigure = 0;
  Display.textContent = displayFigure;
}

function toCalculate() {
  displayFigure = eval(displayFigure);
  Display.textContent = displayFigure;
}

buttonPressed.addEventListener("click", function (e) {
  // console.log("Lanre")
  clickedButton = e.target.textContent;
  if (e.target.classList.contains("btn")) {
    if (clickedButton === "=") {
      toCalculate();
    } else if (clickedButton === "AC") {
      clearDisplay();
    } else {
      updateDisplay(clickedButton);
    }
  }
});
