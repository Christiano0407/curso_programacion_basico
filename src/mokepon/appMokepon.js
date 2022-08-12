//** === Mokepon Variables ===  */
//*! === Buttons */
const btnFire = document.querySelector(`#btnMokepon-fire`);
const btnWater = document.querySelector(`#btnMokepon-water`);
const btnEarth = document.querySelector(`#btnMokepon-earth`);
//*! === Buttons Select and Init Game */
const btnSelectMascot = document.querySelector("#IdBtnSelect");
const btnNewGame = document.querySelector(`#IdNewGame`);
//*! === Mokepon Monsters */
const waterBomb = document.querySelector("#waterBomb");
const punchEarth = document.querySelector("#punchEarth");

//*TODO ===  ===  Code === === */
const initGame = () => {
  btnSelectMascot.addEventListener("click", () => {
    selectMascot();
    checkedAdd();
    /* checkedNot(); */
  });
};

function checkedAdd() {
  if (true) {
    const monsterFire = (document.querySelector(`#monsterFire`).checked = true);
    return console.log(`Select a MonsterFire: ${monsterFire}`);
  } else {
    const monsterFire = (document.querySelector(
      `#monsterFire`
    ).checked = false);
    return monsterFire;
  }
}

/* function checkedNot() {
  
} */

const selectMascot = () => {
  return console.log("Select Animal");
};

//** === Init Game Window === */
window.addEventListener("load", initGame);

//** === Message === */
