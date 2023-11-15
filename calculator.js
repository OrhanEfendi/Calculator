// const number1El = document.querySelector("#number1El");
// console.log(number1El);
// const number2El = document.querySelector("#number2El");
// console.log(number2El);

// const calcEl = document.querySelector("#calcEl");
// console.log(calcEl);
// const clearEl = document.querySelector("#clearEl");
// console.log(clearEl);
// const mathOpEl = document.querySelector("#mathOpEl");
// console.log(mathOpEl);

// const resultEl = document.querySelector("#resultEl");

// mathOpEl.addEventListener("change", function () {
//   let numberone = Number(number1El.value);
//   let numbertwo = Number(number2El.value);
//   let selectedValue = mathOpEl.value;

//   calcEl.addEventListener("click", function () {
//     // Hatalı girişleri kontrol et
//     if (
//       typeof numberone === "string" ||
//       typeof numbertwo === "string" ||
//       isNaN(numberone) ||
//       isNaN(numbertwo) ||
//       numberone === undefined ||
//       numbertwo === undefined ||
//       numberone === null ||
//       numbertwo === null ||
//       numbertwo === "" ||
//       numberone === ""
//     ) {
//       let result = "Invalid input. Please enter valid numbers.";

//       return (resultEl.innerHTML = result);
//     } else if (numbertwo == 0) {
//       let result = "Cannot divide by zero.";
//       return (resultEl.innerHTML = result);
//     } else {
//       let result;
//       switch (selectedValue) {
//         case "add":
//           result = numberone + numbertwo;
//         case "subtraction":
//           result = numberone - numbertwo;
//         case "multiplication":
//           result = numberone * numbertwo;
//         case "divison":
//           result = numberone / numbertwo;
//         default:
//           result = "Invalid operation";
//       }
//     }
//     resultEl.innerHTML = result;
//   });
// });

const number1El = document.querySelector("#number1El");
const number2El = document.querySelector("#number2El");
const calcEl = document.querySelector("#calcEl");
const mathOpEl = document.querySelector("#mathOpEl");
const resultEl = document.querySelector("#resultEl");
const clearEl = document.querySelector("#clearEl");

mathOpEl.addEventListener("change", function () {
  let numberone = Number(number1El.value);
  let numbertwo = Number(number2El.value);
  let selectedValue = mathOpEl.value;

  calcEl.addEventListener("click", function () {
    let result;

    if (
      typeof numberone === "string" ||
      typeof numbertwo === "string" ||
      isNaN(numberone) ||
      isNaN(numbertwo) ||
      numberone === undefined ||
      numbertwo === undefined ||
      numberone === null ||
      numbertwo === null ||
      numbertwo === "" ||
      numberone === ""
    ) {
      result = "Invalid input. Please enter valid numbers.";
      resultEl.innerHTML = result;
    } else if (numbertwo == 0 && selectedValue === "divison") {
      result = "Cannot divide by zero.";
      resultEl.innerHTML = result;
    } else {
      switch (selectedValue) {
        case "add":
          result = numberone + numbertwo;
          break;
        case "subtraction":
          result = numberone - numbertwo;
          break;
        case "multiplication":
          result = numberone * numbertwo;
          break;
        case "divison":
          result = numberone / numbertwo;
          break;
        default:
          result = "Invalid operation";
      }
      resultEl.innerHTML = result;
    }
    clearEl.addEventListener("click", function () {
      number1El.value = "";
      number2El.value = "";
      resultEl.innerHTML = "";
    });
  });
});
