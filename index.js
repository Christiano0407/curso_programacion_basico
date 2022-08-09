console.log("Hello World");

//** === Algorithm === */
let jugador = 0;
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
let min = 1;
let max = 3;
let pc = Math.floor(Math.random() * (max - min + 1) + 1);

const piedra = document.querySelector(`#piedra`);
const papel = document.querySelector(`#papel`);
const tijeraa = document.querySelector(`#tijera`);
const option = document.querySelector(`#IDoption`);

piedra.addEventListener("click", () => {
  console.log("Piedra");
  //game();
});

papel.addEventListener("click", () => {
  console.log("Papel");
  //game();
});

tijeraa.addEventListener("click", () => {
  console.log("Tijera");
  //game();
});

//*! === Game (Options) >>> */
function game() {
  if (jugador == 1) {
    console.log("Jugador: Elegiste piedra 🥌");
  } else if (jugador == 2) {
    console.log("Jugador: Elegiste papel 🧻");
  } else if (jugador == 3) {
    console.log("Jugador: Elegiste tijera ✂");
  } else {
    console.log("Jugador: Elegiste PERDER!!! 🤣");
  }
  if (pc == 1) {
    console.log("Pc: piedra 🥌");
  } else if (pc == 2) {
    console.log("Pc: papel 🧻");
  } else if (pc == 3) {
    console.log("Pc: tijera ✂");
  } else {
    console.log("Pc: Perdiste!! 🤣");
  }

  combat();
}
//*! == Combat ==> */
function combat() {
  if (pc == jugador) {
    console.log("EMPATE!!");
  }
  if (jugador == 1 && pc == 3) {
    console.log("Jugador: Gana!!");
  }
  if (jugador == 2 && pc == 1) {
    console.log("Jugador: Gana!!");
  }
  if (jugador == 3 && pc == 2) {
    console.log("Jugador: Gana!!");
  }
}

//*TODO === Call === */
game();

//** === Exercise Math === */
/* const max = 10;
const min = 5;
let num = Math.floor(Math.random() * (max - min + 1) + min);
console.log(num);
 */
