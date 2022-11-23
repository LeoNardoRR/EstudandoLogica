//Uma empresa de computadores possui clientes em diversos estados. Para realizar a venda é necessário calcular o imposto do produto, 
//onde cada estado aplica uma alíquota variada. Construa um programa que receba o valor do produto e o estado de venda, calcule o valor 
//do imposto e exiba o valor final do produto conforme a tabela abaixo:


//MG -> 7%
//SP -> 12%
//RJ -> 15%
//MS -> 8%
//ES -> 12%
//SC -> 18%

function calcular() {
    const valor = document.getElementById('valor')//valor digitado no input
    const estado = document.getElementById('estado') //
    const resultado = document.getElementById('resultado');
    const number = parseInt(valor.value)

    if (number <= 0 || Number.isNaN(number)) {
        console.error('Valor ' + valor.value + ' inválido')
        return;
    }

    resultado.innerHTML = '<i>Resultado:</i>';

    if(estado == MG){
        const calculo = valor * 0.7;
        resultado.innerHTML = `<b>${valor}</b><br>`    
        return resultado;
    }
}