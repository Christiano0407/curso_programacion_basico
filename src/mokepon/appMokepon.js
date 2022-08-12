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
    alert("Select your Best Animal for Battle");
    checkedAdd();
  });
};
//** === Conditionals */
function checkedAdd() {
  if (monsterFire.checked) {
    alert(`Your Select: MonsterFire 🔥`);
  } else if (waterBomb.checked) {
    alert(`Your Select: WaterBomb 💧`);
  } else if (punchEarth.checked) {
    alert(`Your Select: PunchEarth 🌍🦾`);
  } else {
    alert("Sorry! Your Not Select One Mokepon");
  }
}
//** === BATTLE */
const selectBattleMascot = () => {};

//** === Init Game Window === */
window.addEventListener("load", initGame);

//** === Message === */
