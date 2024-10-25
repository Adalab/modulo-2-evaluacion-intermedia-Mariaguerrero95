"use strict";

/*
    1º Necesito coger las clases del html de: botón, mensaje a mostrar (las dos p) y el input donde escribe la usuaria.
    2º Quiero que al apretar el botón Prueba:
        - Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba :pinte en el html Demasiado alto.
        - Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba: pinte en el html Demasiado bajo.
        - Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: pinte en el html Has ganado campeona!!!
        - Cuando la jugadora no introduzca un número válido y pulse en Prueba:pinte en el html El número debe estar entre 1 y 100.
    3º Cada vez que la usuaria le de al botón Prueba quiero que se pinten en el html los números de intentos que realiza.
    4º En la consola mientras quiero ir viendo cuál es el número aleatorio que ha tocado cada vez que se recargue la página 
*/

let randomNumber = getRandomNumber (100);
let attempts = 0;

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
} 

console.log(`El número aleatorio es: ${randomNumber}`);

const buttonPrueba = document.querySelector(".js-button");
const message = document.querySelector(".js-low-high");
const tryNumber = document.querySelector(".js-try-number");
const write = document.querySelector(".js-write-here");


function checkNumber(ev) {
    ev.preventDefault();
    console.log("La usuaria ha hecho click");
    const userNumber = parseInt(write.value);
    
    if (isNaN (userNumber) || userNumber < 1 || userNumber > 100) {
        message.textContent = 'El número debe estar entre 1 y 100';
        return;
    }
    attempts++;
    tryNumber.textContent = `Número de intentos: ${attempts}`;
    
    if (userNumber === randomNumber) {
        message.textContent = `¡Has ganado campeona!`;
    } else if (userNumber > randomNumber) {
        message.textContent = `Demasiado alto`;
    } else {
        message.textContent = `Demasiado bajo`;
    }
}

buttonPrueba.addEventListener('click', checkNumber);