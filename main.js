let displayValue = "";
const buttons = document.getElementById("buttons");
const disPlay = document.getElementById("display");

// Update display Value
const addToDisplay = (value) => {
  displayValue = displayValue + value;
  disPlay.textContent = displayValue;
};

// Clear Dispalay

const clearDisplay = () => {
  displayValue = 0;
  disPlay.textContent = displayValue;
};

// Calculate

const calculate = () => {
  displayValue = eval(displayValue);
  disPlay.textContent = displayValue;
};

buttons.addEventListener("click", function (e) {
  const clickedButton = e.target.textContent;

  if (e.target.classList.contains("btn")) {
    // const buttonValue = clickedButton;

    if (clickedButton === "AC") {
      clearDisplay();
    } else if (clickedButton === "=") {
      calculate();
    } else {
      addToDisplay(clickedButton);
    }
  }
});

//ChatGPT

// let displayValue = ""; // Keeps track of the current value on the display

// // Function to update the display value
// function addToDisplay(value) {
//   displayValue += value; // Append the clicked value to the current display value
//   document.getElementById("display").value = displayValue; // Update the display
// }

// // Function to clear the display
// function clearDisplay() {
//   displayValue = ""; // Reset the display value
//   document.getElementById("display").value = displayValue;
// }

// // Function to calculate the result
// function calculate() {
//   try {
//     displayValue = eval(displayValue); // Evaluate the expression
//     document.getElementById("display").value = displayValue;
//   } catch (error) {
//     document.getElementById("display").value = "Error"; // In case of invalid input
//     displayValue = "";
//   }
// }

// Add event listeners for the buttons
// document.getElementById("btn1").addEventListener("click", function () {
//   addToDisplay("1");
// });
// document.getElementById("btn2").addEventListener("click", function () {
//   addToDisplay("2");
// });
// document.getElementById("btn3").addEventListener("click", function () {
//   addToDisplay("3");
// });
// document.getElementById("btnPlus").addEventListener("click", function () {
//   addToDisplay("+");
// });
// document.getElementById("btn4").addEventListener("click", function () {
//   addToDisplay("4");
// });
// document.getElementById("btn5").addEventListener("click", function () {
//   addToDisplay("5");
// });
// document.getElementById("btn6").addEventListener("click", function () {
//   addToDisplay("6");
// });
// document.getElementById("btnMinus").addEventListener("click", function () {
//   addToDisplay("-");
// });
// document.getElementById("btn7").addEventListener("click", function () {
//   addToDisplay("7");
// });
// document.getElementById("btn8").addEventListener("click", function () {
//   addToDisplay("8");
// });
// document.getElementById("btn9").addEventListener("click", function () {
//   addToDisplay("9");
// });
// document.getElementById("btnMultiply").addEventListener("click", function () {
//   addToDisplay("*");
// });
// document.getElementById("btn0").addEventListener("click", function () {
//   addToDisplay("0");
// });
// document.getElementById("btnClear").addEventListener("click", function () {
//   clearDisplay();
// });
// document.getElementById("btnEqual").addEventListener("click", function () {
//   calculate();
// });
// document.getElementById("btnDivide").addEventListener("click", function () {
//   addToDisplay("/");
// });
