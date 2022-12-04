//Escrever um algoritmo que recebe um valor e imprima sua taboada
function calcular() {
    const numberInput = document.getElementById('numberInput')
    const resultado = document.getElementById('resultado');
    const number = parseInt(numberInput.value)

    if (number <= 0 || Number.isNaN(number)) {
        console.error('Valor ' + numberInput.value + ' inválido')
        return;
    }

    resultado.innerHTML = '<p>Resultado:</p><br><br>';

    for (let index = 1; index <= 10; index++) {
        const multiplicationResult = number * index;
        const calculo = number + 'x' + index + ' = ' + multiplicationResult;
        resultado.innerHTML += `<b>${calculo}</b><br />`
    }
}