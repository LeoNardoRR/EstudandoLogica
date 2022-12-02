//Faça um programa que peça a temperatura em graus Fahrenheit (°F),
//transforme e mostre a temperatura em graus Celsius (°C).


    function temperatura(){
        const temperatura = document.getElementById('temperatura');
        const fahrenheit = document.getElementById("fahrenheit").value;
        const celsius = document.getElementById("celsius").value;
        const resultado = document.getElementById('resultado').value;
    
        resultado.innerHTML = '<i>Resultado:</i>';

    if(temperatura == 'F'){
        const calculo = parseInt(valor) + parseInt((valor * 0.07));
        resultado.innerHTML = `<b>${calculo}</b><br>`;    
        return calculo;
    }
    else if(temperatura =='C'){
        celsius = (parseInt(fahrenheit) - 32) * 1.8;
    }
    
    else(isNaN(fahrenheit) || isNaN(celsius));{
        alert("Digite um valor váilido!");
        return 
    }
}