//*TODO === Mokepon Variables ===  ===  ===  ===  ===  === === === */
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
const divMonster = document.querySelector(`#IdChildMonster`);

//*TODO ===  ===  Code === ===  === === === === === === === === === */
//** === Init Game === */
const initGame = () => {
  let btnSelectMascot = document.getElementById("IdBtnSelect");
  btnSelectMascot.addEventListener(`click`, checkedAdd);
};
//** === Conditionals === */
const checkedAdd = () => {
  if (monsterFire.checked) {
    alert(`Your Select: MonsterFire 🔥`);
    fireAdd();
  } else if (waterBomb.checked) {
    alert(`Your Select: WaterBomb 💧`);
    waterAdd();
  } else if (punchEarth.checked) {
    alert(`Your Select: PunchEarth 🌍🦾`);
  } else {
    alert("Sorry!! Your Not Select One. Please. select your Mokepon");
  }
};

//*! === Add Chield Elements */
function fireAdd() {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1643725173053-ed68676f1878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  /*  "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg"; */
  img.width = 200;
  img.height = 150;
  img.className = "monsterImg";
  divMonster.appendChild(img);
}

function waterAdd() {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1596743343697-bd2c1e5a8c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  /*  "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg"; */
  img.width = 200;
  img.height = 150;
  img.className = "monsterImg";
  divMonster.appendChild(img);
}
//** === BATTLE */
const selectBattleMascot = () => {};

//** === Init Game Window === */
window.addEventListener("load", initGame);

//** === Message === */
