window.addEventListener('load',()=>{/* escuchamos cuando se carga el documento*/ 
//creamos Dos constantes y nos guardamos los elementos que necesitamos 
    const display = document.querySelector('.calculator-display');
    const keyPadButtons = document.getElementsByClassName('keypad-button');

//creamos otra constante para convertir el htmlCollection a array
    //Array.from es para crear un nuevo array
    const keyPadButtonsArray = Array.from(keyPadButtons)
    //iteramos por nuestro nuevo array de buttons 

    keyPadButtonsArray.forEach((button) => {
        //y a cada button le agregamos un listener 
        button.addEventListener('click',()=>{
            console.log(button.innerHTML)
            
            calculadora(button,display)

        })
        
    });
})
function calculadora(button,display){
    switch(button.innerHTML){
        case 'C':
            borrar(display)
            break;
        case '=':
        calcular(display)
        break;

        default:
            actualizar(display,button)
             break;

    }
}

function calcular(display){
  display.innerHTML = eval(display.innerHTML); //tomar el string de la operacion y lo va a resolver y guardarlo
}
function actualizar(display,button){
    if(display.innerHTML == 0){
        display.innerHTML = ''; 


    }
    display.innerHTML += button.innerHTML; //esto va a poner cada valor que toquemos, alado del otro 

}
function borrar(display){
    display.innerHTML = 0;
}