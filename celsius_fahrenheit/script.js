function toFahrenheit(celsius) {
    return (celsius * 1.8 + 32);
}

let temperatura = toFahrenheit(parseInt(prompt("Digite a temperatura em Celsius")));
document.getElementById("resultado").innerHTML = "A conversão da temperatura de Celsius para Fahrenheit é: " + temperatura;
