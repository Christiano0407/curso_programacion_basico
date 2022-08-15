//*TODO === Mokepon Variables ===  ===  ===  ===  ===  === === === */
//*! === Buttons Select and Init Game */
//let btnNewGame = document.querySelector(`#IdNewGame`);
let playAttack;

//*TODO ===  ===  Code === ===  === === === === === === === === === */
//** === Conditionals === */
import { checkedAdd } from "./js/mokepon01";
//import { enemySelectAdd } from "./js/mokepon01";

//** === Init Game === */
const initGame = () => {
  let btnSelectMascot = document.getElementById("IdBtnSelect");
  btnSelectMascot.addEventListener(`click`, checkedAdd);
  // === Buttons  and Events ===
  let btnFire = document.querySelector(`#btnMokeponFire`);
  btnFire.addEventListener("click", fireAttack);
  let btnWater = document.querySelector(`#btnMokeponWater`);
  btnWater.addEventListener("click", waterAttack);
  let btnEarth = document.querySelector(`#btnMokeponEarth`);
  btnEarth.addEventListener("click", earthAttack);
};

//*TODO === ===  Attack === === === === === === === === === === ==== === === ===  */
//*! === Other form */
/* const fireAttack = () => {
  btnFire.addEventListener("click", () => {
    console.log("Fire Attack");
  });
}; */
//*! === Function Attack Fire */
function fireAttack() {
  playAttack = console.log("Fire");
}
function waterAttack() {
  playAttack = console.log("Water");
}
function earthAttack() {
  playAttack = console.log("Rock Attack!!");
}

//*TODO  === === Init Game Window === === */
window.addEventListener("load", initGame);
