//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import reactDom from "react-dom";

let numbers = [0,0,0,0,0,0];
let idInterval ; //no se le coloca valor ya que es un numero de setInterval por default al azar.

const maxSeconds = 35; //maximo de segundos que queremos colocarle al cronometro y haga un pauseInterval(un pause).
let maxSecondsReverse = "1050"; //maximo de segundos que queremos colocarle al cronometro y haga un pauseInterval(un pause).
let totalSeconds = 0;// esta variable va a almacenar los segundos transcurridos.

let increaseOrDecrease = true; // valor true para increase , false para drecrease.

// se agrega nuevamente el array numbers para que se actualice en 0, luego se actualiza nuevamente
// la interfaz dentro de stopInterval(esto para mostrar los nuevos valores).
function stopInterval() {
    clearInterval(idInterval); 
    // se garantiaza que no han transcurrido segundos, colocando todos en 0 nuevamente 
    numbers = [0,0,0,0,0,0];
    totalSeconds = 0;
    ReactDOM.render(<Home n1={numbers[5]} n2={numbers[4]} n3={numbers[3]} n4={numbers[2]} n5={numbers[1]} n6={numbers[0]} />, document.querySelector("#app"));
}

function alternateMode(){
    increaseOrDecrease = !increaseOrDecrease;
    totalSeconds = maxSecondsReverse;
    if(increaseOrDecrease){
        alert("increased timer")
        numbers= [0,0,0,0,0,0]
    }else{
        let indexNumbers=numbers.length-1;
        maxSecondsReverse = prompt("Reverse Seconds: ") // se implementa un promt para que el usuario establezca el #de segundos que desea.
        numbers= [0,0,0,0,0,0]// se coloca nuevamente en 0 en espera del nuevo valor ingresado en el prompt.
        for(let i=maxSecondsReverse.length-1; i>=0 ; i--){
            numbers[indexNumbers] = parseInt(maxSecondsReverse[i]);
            indexNumbers--;

        }
        alert("timer in regression")
    }
}
// garantiza que la posicion index este entre 0-9 
// si el numero numbers[index] es 10 entonces coloca esa posicion en 0 y luego incrementa el adyacente
function increaseNext(arrayN,index) {
    if(increaseOrDecrease){
    if( arrayN[index]==10){
        arrayN[index] = 0;
        arrayN[index-1]++;
    }
}else{
    if( arrayN[index]==-1){
        arrayN[index] = 9;
        arrayN[index-1]--;
    }
}
}

function startCounter (){

    // numbers[5] es el secundero 
    if (increaseOrDecrease){
        numbers[5]++;
        totalSeconds++;
    }
    else if(totalSeconds!=0){
        numbers[5]--;
        totalSeconds--;
    }
    // se incrementa totalSenconds
  
    for(let i = 5; 1 <= i  ;i--){
        increaseNext(numbers,i);
        ReactDOM.render(<Home n1={numbers[5]} n2={numbers[4]} n3={numbers[3]} n4={numbers[2]} n5={numbers[1]} n6={numbers[0]} />, document.querySelector("#app"));
    }
    if( totalSeconds === maxSeconds || totalSeconds == 0 ){
        stopInterval();
    }
    
};
//se elimina el contardor actual para evitar errores al hacer multiples "click", luego se crea un nuevo setInterval el cual
//se almacena el ID (numero al azar que proporciona la funcion setInterval por default)
function continueInterval() {
    clearInterval(idInterval)
    idInterval = setInterval(startCounter,1000);
}
//pauseInterval hara una pausa al cronometro, y si desea continuar, usamos el boton "continue"
function pauseInterval() {
    clearInterval(idInterval);

};


 idInterval =  setInterval(startCounter,1000);



export {stopInterval};
export {continueInterval};
export {pauseInterval};
export {alternateMode};