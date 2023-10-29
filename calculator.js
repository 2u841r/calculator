const result = document.querySelector("#result");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const point = document.querySelector("#point");
const equal = document.querySelector("#equal");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const modulo = document.querySelector("#modulo");
const plusminus = document.querySelector("#plusminus");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const history = document.querySelector("#history");

one.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "1";
});
two.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "2";
});
three.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "3";
});
four.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "4";
});
five.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "5";
});
six.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "6";
});
seven.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "7";
});
eight.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "8";
});
nine.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "9";
});
zero.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "0";
});
point.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += ".";
});
addition.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "+";
});
subtraction.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "-";
});
multiplication.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "*";
});

division.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "/";
});

modulo.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "%";
});

plusminus.addEventListener("click", (event) => {
  event.preventDefault();
  result.value += "+-";
});

clear.addEventListener("click", () => {
  result.value = "";
  history.value = "";
});

equal.addEventListener("click", () => {
  try {
    history.value = result.value;
    result.value = eval(result.value);
  } catch (error) {
    result.value = error.message;
    result.style.fontSize = "16px";
    setTimeout(() => {
      result.value = "";
    }, 1500);
  }
});

del.addEventListener("click", () => {
  beforecut = result.value;
  let kata = beforecut.slice(0, beforecut.length - 1);
  result.value = kata;
});

// document.addEventListener("DOMContentLoaded", function () {
//   result.focus();
// });

//  document.addEventListener('keypress', (event) => {
// if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0' || event.key === '.' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/')
//         ekdigit = result.value += event.key;
//         result.value = ekdigit.slice(0, ekdigit.length - 1);

// });



window.addEventListener("keyup", (event) => {
  event.preventDefault();
  const validCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "*", "/", "%"];
  if (validCharacters.includes(event.key)) {
    result.value += event.key;
  }
});


window.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
        equal.click();
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "Backspace") {
    del.click();
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    clear.click();
  }
});

