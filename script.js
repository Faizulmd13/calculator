let input;
let operand1, operand2, operator;
let result;
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

function equate(operandA, operandB, sign) {
  switch (sign) {
    case "+":
      result = +operandA + +operandB;
      break;
    case "-":
      result = operandA - operandB;
      break;
    case "*":
      result = operandA * operandB;
      break;
    case "/":
      result = operandA / operandB;
      break;
    default:
      return 0;
  }
  return result;
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
    case ".":
      addToScreen(input);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      defineOperator(input);
      break;
    case "clear":
      clearScreen();
      break;
    case "=":
      defineOperandB();
      screen.textContent = operand1 = equate(operand1, operand2, operator);
      operator = operand2 = undefined;
      break;
    default:
      return 0;
  }
}

function addToScreen(text) {
  if (result !== undefined) {
    screen.textContent = "";
    result = undefined;
  }
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
  if (operand1 === undefined) {
    defineOperandA();
  } else if (operator !== undefined && operand1 !== screen.textContent) {
    defineOperandB();
    operand1 = equate(operand1, operand2, operator);
    screen.textContent = operand1;
    operand2 = undefined;
  }
  operator = currentOperator;
}
