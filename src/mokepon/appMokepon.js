//** === Mokepon Variables ===  */
//*! === Buttons */
const btnFire = document.querySelector(`#btnMokepon-fire`);
const btnWater = document.querySelector(`#btnMokepon-water`);
const btnEarth = document.querySelector(`#btnMokepon-earth`);
//*! === Buttons Select and Init Game */
const btnSelectMascot = document.querySelector("#IdBtnSelect");
const btnNewGame = document.querySelector(`#IdNewGame`);
//*! === Mokepon Monsters */
const monsterFire = document.querySelector(`#monsterFire`);
const waterBomb = document.querySelector(`#waterBomb`);
const punchEarth = document.querySelector("#punchEarth");

//*TODO ===  ===  Code === === */
const initGame = () => {
  btnSelectMascot.addEventListener("click", () => {
    console.log("Select your Best Animal");
    checkedAdd();
  });
};

function checkedAdd() {
  if (monsterFire.checked) {
    console.log(`Your Select: MonsterFire 🔥`);
  } else if (waterBomb.checked) {
    console.log(`Your Select: WaterBomb 💧`);
  } else if (punchEarth.checked) {
    console.log(`Your Select: PunchEarth 🌍🦾`);
  } else {
    console.log("Sorry! Your Not Select One Mokepon");
  }
}

/* const selectMascot = () => {
  return console.log("Select your Best Animal");
}; */

//** === Init Game Window === */
window.addEventListener("load", initGame);

//** === Message === */
