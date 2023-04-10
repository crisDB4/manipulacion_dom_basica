const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// function btnOnClick() {
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado: "+sumaInputs;
// }

// btn.addEventListener('click',btnOnClick);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: "+sumaInputs;
}

form.addEventListener('submit', sumarInputValues);

const source = document.querySelector('.source');

source.addEventListener('copy', copiarTexto);

function copiarTexto(event) {
    console.log({event});
    const selection = "Copiar es malo :( ";
    event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
    event.preventDefault();
};
