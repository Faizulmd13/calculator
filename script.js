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
      result = +operandB === 0 ? "Can't divide by 0" : operandA / operandB;
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
      if (operand1 === undefined || operator === undefined) return;
      defineOperandB();
      if (operand2 === undefined || operand2 === "") return;

      const resultValue = equate(operand1, operand2, operator);
      screen.textContent = resultValue;

      if (typeof resultValue === "number") {
        operand1 = result = resultValue;
      } else {
        operand1 = result = undefined;
      }
      operator = operand2 = undefined;
      break;

    case "<-":
      backspace();
      break;
    default:
      return 0;
  }
}

function addToScreen(text) {
  if (text === "." && screen.textContent.includes(".")) return;

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

function backspace() {
  if (result !== undefined) {
    operand1 = operand2 = result = undefined;
  }

  let current = screen.textContent;
  current = current.slice(0, -1);
  screen.textContent = current === "" ? "0" : current;
}
