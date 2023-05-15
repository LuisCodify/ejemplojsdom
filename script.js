const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', btnOnClick);

// function btnOnClick(event) {
//   event.preventDefault();
//   const sumaInputs = (!isNaN(input1.value) == true && !isNaN(input2.value) == true) ? Number(input1.value) + Number(input2.value) : input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
  const sumaInputs = (!isNaN(input1.value) == true && !isNaN(input2.value) == true) ? Number(input1.value) + Number(input2.value) : input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}