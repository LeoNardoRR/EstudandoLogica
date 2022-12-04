//Uma empresa de computadores possui clientes em diversos estados. Para realizar a venda é necessário calcular o imposto do produto, 
//onde cada estado aplica uma alíquota variada. Construa um programa que receba o valor do produto e o estado de venda, calcule o valor 
//do imposto e exiba o valor final do produto conforme a tabela abaixo:

//MG -> 7%
//SP -> 12%
//RJ -> 15%
//MS -> 8%
//ES -> 12%
//SC -> 18%

function calcular() 
{
    const valor = document.getElementById('valor').value ;//valor digitado no input
    const estado = document.getElementById('estado').value; //
    const resultado = document.getElementById('resultado').value;
    
    console.log('Valor: ' + valor + '| estado: ' + estado + '| resultado: ' + resultado +'| number: ' );
    if (valor <= 0 || isNaN(valor)) {
        console.log('Valor ' + valor + ' inválido');
        return;
    }

    resultado.innerHTML = '<i>Inválido:</i>';

    if(estado.toUpperCase() == 'Minas Gerais'){
        const calculo = parseInt(valor) + parseInt((valor * 0.07));
        resultado.innerHTML = `<b>Resultado: R$${calculo}</b><br>`;    
        return calculo;
    }
    if(estado.toUpperCase() == 'São Paulo'){
        const calculo = parseInt(valor) + parseInt((valor * 0.12));
        resultado.innerHTML = `<b>Resultado: R$${calculo}</b><br>`;    
        return calculo;
    }
    if(estado.toUpperCase() == 'Rio de Janeiro'){
        const calculo = parseInt(valor) + parseInt((valor * 0.15));
        resultado.innerHTML = `<b>Resultado: R$${calculo}</b><br>`;    
        return calculo;
    }
    if(estado.toUpperCase() == 'Mato Grosso do Sul'){
        const calculo = parseInt(valor) + parseInt((valor * 0.08));
        resultado.innerHTML = `<b>Resultado: R$${calculo}</b><br>`;    
        return calculo;
    }
    if(estado.toUpperCase() == 'Espirito Santo'){
        const calculo = parseInt(valor) + parseInt((valor * 0.12));
        resultado.innerHTML = `<b>Resultado: R$${calculo}</b><br>`;    
        return calculo;
    }
    if(estado.toUpperCase() == 'Santa Catarina'){
        const calculo = parseInt(valor) + parseInt((valor * 0.18));
        resultado.innerHTML = `<b>Resultado: R$${calculo}</b><br>`;    
        return calculo;
    }
    else
    {
    }
}