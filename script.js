const display = document.getElementById("display");
let currentInput = "0";
let previousInput = "";
let operator = null;

// Handle button clicks
document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("click", () => {
    const number = button.getAttribute("data-number");
    const operation = button.getAttribute("data-operator");

    if (number) handleNumber(number);
    else if (operation) handleOperator(operation);
    else if (button.id === "equals") calculate();
    else if (button.id === "clear") clear();
  });
});

function handleNumber(number) {
  currentInput = currentInput === "0" ? number : currentInput + number;
  updateDisplay();
}

function handleOperator(op) {
  if (currentInput) previousInput = currentInput;
  operator = op;
  currentInput = "";
}

function calculate() {
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  if (operator && prev && curr) {
    let result;
    switch (operator) {
      case "+": result = prev + curr; break;
      case "-": result = prev - curr; break;
      case "*": result = prev * curr; break;
      case "/": result = prev / curr; break;
      case "%": result = prev % curr; break;
      case "square": result = Math.pow(prev, 2); break;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
  }
}

function clear() {
  currentInput = "0";
  previousInput = "";
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput;
}
