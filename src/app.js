/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  const boton = document.querySelector("#boton");
  // Agregar listener
  boton.addEventListener("click", function(evento) {
    // Aquí todo el código que se ejecuta cuando se da click al botón
    document.querySelector("#excuse").innerHTML = generateExcuse();
    //alert("Le has dado click");
  });
};

let generateExcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let quienPosition = Math.floor(Math.random() * 4);
  let quePosition = Math.floor(Math.random() * 4);
  let cuandoPosition = Math.floor(Math.random() * 5);

  return (
    who[quienPosition] + " " + what[quePosition] + " " + when[cuandoPosition]
  );
};

console.log(generateExcuse());

//Generador de Excusas
