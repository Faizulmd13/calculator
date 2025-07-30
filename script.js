let input;
let operand1, operand2, operator;
let btns;
let screen = document.querySelector("#calc-screen");

document.addEventListener("DOMContentLoaded", () => {
  btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      fnEvaluator(btn.id);
    });
  });
});

function equate(operandA, operandB, operator) {
  switch (operator) {
    case "+":
      return +operandA + +operandB;
    case "-":
      return operandA - operandB;
    case "*":
      return operandA * operandB;
    case "/":
      return operandA / operandB;
    default:
      return 0;
  }
}

function fnEvaluator(input) {
  switch (input) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      addToScreen(input);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      defineOperandA();
      defineOperator(input);
      break;
    case "clear":
      clearScreen();
      break;
    case "=":
      defineOperandB();
      console.log(equate(operand1, operand2, operator));
      screen.textContent = equate(operand1, operand2, operator);
    default:
      return 0;
  }
}

function addToScreen(text) {
  if (operator === undefined) {
    if (screen.textContent === "0") {
      screen.textContent = text;
    } else {
      screen.textContent += text;
    }
  } else {
    if (screen.textContent === operand1) {
      screen.textContent = text;
    } else {
      screen.textContent += text;
    }
  }
}

function clearScreen() {
  operand1 = operand2 = operator = undefined;
  screen.textContent = "0";
}

function defineOperandA() {
  operand1 = screen.textContent;
}

function defineOperandB() {
  operand2 = screen.textContent;
}

function defineOperator(currentOperator) {
  operator = currentOperator;
}
