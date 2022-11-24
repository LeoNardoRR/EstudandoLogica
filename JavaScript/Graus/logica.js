//Faça um programa que peça a temperatura em graus Fahrenheit (°F),
//transforme e mostre a temperatura em graus Celsius (°C).

    function temperatura(){
        const temperatura = document.getElementById('temperatura');
        const Fahrenheit = document.getElementById('Fahrenheit');
        const Celsius = document.getElementById('Celsius');
        const resultado = document.getElementById('resultado');
    

    resultado.innerHTML = '<i>Resultado:</i>';

    if(temperatura == 'Fahrenheit'){
        const calculo = Fahrenheit - 32 * 1.8;
        resultado.innerHTML = `<b>${calculo}</b><br>`;    
        return calculo;
    }
}