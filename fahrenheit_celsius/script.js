function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

let temperatura = toCelsius(parseInt(prompt("Digite a temperatura em Fahrenheit")));
document.getElementById("resultado").innerHTML ="A conversão da temperatura de Fahrenheit para Celsius é: " + temperatura.toFixed(2) + "°C";