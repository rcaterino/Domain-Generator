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
    var zParrafoNuevo = document.createElement("p");
    zParrafoNuevo.innerHTML = generateExcuse();

    //document.querySelector("#excuse").innerHTML = ;
    //alert("Le has dado click");
  });
};

let generateExcuse = () => {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var ext = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let h = 0; h < ext.length; h++) {
          document.write(
            "<p>" +
              "www." +
              pronoun[i] +
              adj[j] +
              noun[k] +
              ext[h] +
              "</p>" +
              "<br>"
          );
        }
      }
    }
  }
  /*let who = ["the dog", "my granma", "his turtle", "my bird"];
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
  );*/
};

//console.log(generateExcuse());

//Generador de Excusas
