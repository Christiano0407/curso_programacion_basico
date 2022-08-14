//** === Mokepon Variables ===  */
//*! === Buttons */
let btnFire = document.querySelector(`#btnMokeponFire`);
let btnWater = document.querySelector(`#btnMokeponWater`);
let btnEarth = document.querySelector(`#btnMokeponEarth`);
//*! === Buttons Select and Init Game */

let btnNewGame = document.querySelector(`#IdNewGame`);
//*! === Mokepon Monsters */
const monsterFire = document.querySelector(`#monsterFire`);
const waterBomb = document.querySelector(`#waterBomb`);
const punchEarth = document.querySelector("#punchEarth");

//*TODO ===  ===  Code === === */
//** === Init Game === */
const initGame = () => {
  let btnSelectMascot = document.getElementById("IdBtnSelect");
  btnSelectMascot.addEventListener(`click`, checkedAdd);
};
//** === Conditionals === */
const checkedAdd = () => {
  if (monsterFire.checked) {
    alert(`Your Select: MonsterFire 🔥`);
  } else if (waterBomb.checked) {
    alert(`Your Select: WaterBomb 💧`);
  } else if (punchEarth.checked) {
    alert(`Your Select: PunchEarth 🌍🦾`);
  } else {
    alert("Sorry! Your Not Select One Mokepon");
  }
};
//** === BATTLE */
const selectBattleMascot = () => {};

//** === Init Game Window === */
window.addEventListener("load", initGame);

//** === Message === */
