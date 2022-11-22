//Uma empresa de computadores possui clientes em diversos estados. Para realizar a venda é necessário calcular o imposto do produto, 
//onde cada estado aplica uma alíquota variada. Construa um programa que receba o valor do produto e o estado de venda, calcule o valor 
//do imposto e exiba o valor final do produto conforme a tabela abaixo:


//MG -> 7%
//SP -> 12%
//RJ -> 15%
//MS -> 8%
//ES -> 12%
//SC -> 18%



    function porcent(estado){
    {
        var estado = document.getElementById('result').innerHTML; 
        // O getElementById retorna a referência do elemento através do seu ID

        document.getElementById('result').innerHTML = "%" + estado * 0.7; 
    }
}
