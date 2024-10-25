"use script"

/*
    1ª PARTE EJERCICIO

        1º Seleccionar elementos del html: input, botón, los dos párrafos
        2º Generar y guardar un número aleatorio (fuera del evento)
        3º cuando la usuaria hace click en Prueba
            - Recojo el valor del input
            - Si el numero aleatorio es < que el numero de la usuaria pinto "Demasiado bajo"
            - Si el numero aleatorio es > que el numero de la usuaria pinto "Demasiado alto"
            - Si el numero aleatorio es igual pinto "Has ganado campeona"
            - Si el numero de la usuaria es > 100 o < 1 o si no hay numero pinto "El numero está entre 1 y 100"

    2ª PARTE EJERCICIO (CONTADOR)

        1º Crear un contador que valga 0
        2º Cuando la usuaria hace click en Prueba, 
            - Sumar 1 al contador
            - Pinto el contador en el HTML
*/

// Variables globales

const input = document.querySelector(".js-write-here");
const buttonPrueba = document.querySelector(".js-button");
const message = document.querySelector(".js-low-high");
const counter = document.querySelector(".js-try-number");


//Variable global para el contador
let attempts = 0;

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
} 

//Siempre con constante, ya cuando vaya a cambiar algo lo cambio por let, que yo había utilizado let y no es buena práctica.

const randomNumber = getRandomNumber(100);
//console.log("Numero aleatorio: ", randomNumber);

//En la función manejadora, escribir todas las instrucciones que se ejecutan a raíz del evento (click);
function handleClickButton(ev){
    ev.preventDefault();
    //console.log("Ha hecho click");
    //Se pone parseInt para convertir a número, para que sea true:
    const numberUser = parseInt(input.value);
    //console.log(numberUser)

    console.log("Tipo de dato del número de la usuaria", typeof numberUser);
    console.log("Tipo de dato del numero aleatorio", typeof randomNumber);

    if (numberUser > 100 || numberUser < 1){
        message.innerHTML = "Escribe un número entre el 1 y 100";
    }else if (randomNumber > numberUser){
        message.innerHTML = "Pista: Demasiado bajo";
    } else if (randomNumber < numberUser){
        message.innerHTML = "Pista: Demasiado alto";
    } else if (randomNumber === numberUser){
        message.innerHTML = "Has ganado, campeona";
    } 
    attempts++;
    console.log(atemps);
    //Tambien se puede escribir:
    //attemps +=1;
    
    counter.innerHTML = "Número de intentos: " + attempts;
}

buttonPrueba.addEventListener("click", handleClickButton);


/*REFACTORIZAR:

function handleClickButton( {
    guessNumber();
    setCounter()
    attempts = attempts +1;
    counter.innerHTML = "Número de intentos: " + attempts;
})

buttonPrueba.addEventListener("click", handleClickButton);
*/


//PREGUNTA ENTREVISTA: diferencia entre doble = y triple ===, CON DOBLE == va a ser true, compara el contenido no el tipo de dato, TRIPLE === nunca va a ser true porque compara el contenido pero si compara el tipo de dato. el === es más seguro, porque un string nunca va a ser igual a un número.
