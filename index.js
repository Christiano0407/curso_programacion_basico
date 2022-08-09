console.log("Hello World");

/* let name = " ";
name = prompt("What is your name?");
console.log(`Hello Mrs. ${name}`); */
//** === Algorithm === */
/* const player = 0;
player = prompt("Qué escojes: Piedra(2), Papel(3) o Tijera(4)")
const pc = 3;

if (player == 1) {
  console.log("Piedra");
} else {
  console.log("Error!");
} */
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
let pc = 2;

const piedra = document.querySelector(`#piedra`);
const papel = document.querySelector(`#papel`);
const tijeraa = document.querySelector(`#tijera`);

const option = document.querySelector(`#IDOption`);
//option.appendChild(jugador);
option.innerHTML = jugador;
//option.innerHTML = ;

piedra.addEventListener("click", () => {
  //console.log("Piedra");
  game();
});

papel.addEventListener("click", () => {
  //console.log("Papel");
  game();
});

tijeraa.addEventListener("click", () => {
  //console.log("Tijera");
  game();
});

// alert("Elegiste " + jugador)
function game() {
  if (jugador == 1) {
    console.log("Elegiste piedra");
  } else if (jugador == 2) {
    console.log("Elegiste papel");
  } else if (jugador == 3) {
    console.log("Elegiste tijera");
  } else {
    console.log("Elegiste PERDER");
  }
}
//game();
