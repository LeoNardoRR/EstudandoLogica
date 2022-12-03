let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value) - 32) * 5)/9;
    fahrenheit.value = parseFloat(output.toFixed(2));    
}
