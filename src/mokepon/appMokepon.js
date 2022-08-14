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
const divEnemy = document.querySelector("#idMonsterEnemy");

//*TODO ===  ===  Code === ===  === === === === === === === === === */

//** === Init Game === */
const initGame = () => {
  let btnSelectMascot = document.getElementById("IdBtnSelect");
  btnSelectMascot.addEventListener(`click`, checkedAdd);
};
//** === Conditionals === */
const checkedAdd = () => {
  let playMonster = document.querySelector(`#playerMonster`); // Span del Player =

  if (monsterFire.checked) {
    alert(`Your Select: MonsterFire 🔥`);
    fireAdd();
    playMonster.innerHTML = "MonsterFire 🔥";
  } else if (waterBomb.checked) {
    alert(`Your Select: WaterBomb 💧`);
    waterAdd();
    playMonster.innerHTML = "WaterBomb 💧";
  } else if (punchEarth.checked) {
    alert(`Your Select: PunchEarth 🌍🦾`);
    earthAdd();
    playMonster.innerHTML = "PunchEarth 🦾🌍⚡";
  } else {
    alert("Sorry!! Your Not Select One. Please. select your Mokepon");
  }

  enemySelectAdd();
};

const enemySelectAdd = () => {
  let enemyMonster = document.querySelector("#enemyMonster");
  let enemyAttack = random(1, 3);

  if (enemyAttack == 1) {
    enemyMonster.innerHTML = "ThunderLight ⚡";
    enemyTwo();
  } else if (enemyAttack == 2) {
    enemyMonster.innerHTML = "BombGreen 🌱";
    enemyOne();
  } else if (enemyAttack == 3) {
    enemyMonster.innerHTML = "CocoSmash 🥌";
    enemyThree();
  } else {
    alert("Sorry!! Please, select your Mokepon of Attack");
  }
};

//** === Random Function === */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//*! === Add Child Elements */
// User =
function fireAdd() {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1643725173053-ed68676f1878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  /*  "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg"; */
  img.width = 150;
  img.height = 150;
  img.className = "monsterImg";
  divMonster.appendChild(img);
}
function waterAdd() {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1596743343697-bd2c1e5a8c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  /*  "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg"; */
  img.width = 150;
  img.height = 150;
  img.className = "monsterImg";
  divMonster.appendChild(img);
}
function earthAdd() {
  const img = document.createElement("img");
  img.src =
    "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg";
  img.width = 150;
  img.height = 150;
  img.className = "monsterImg";
  divMonster.appendChild(img);
}
// Enemy =
function enemyOne() {
  const img = document.createElement("img");
  img.src =
    "https://images.pexels.com/photos/4188296/pexels-photo-4188296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img.width = 150;
  img.height = 150;
  img.className = "monsterImg";
  divEnemy.appendChild(img);
}
function enemyTwo() {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1609845768806-767fcfc317b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";
  img.width = 150;
  img.height = 150;
  img.className = "monsterImg";
  divEnemy.appendChild(img);
}
function enemyThree() {
  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1590955559496-50316bd28ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80";
  img.width = 150;
  img.height = 150;
  img.className = "monsterImg";
  divEnemy.appendChild(img);
}

//*TODO === ===  Attack === === === === === === === === === === ==== === === ===  */

let playAttack;

//*! === Fire */
/* const fireAttack = () => {
  btnFire.addEventListener("click", () => {
    console.log("Fire Attack");
  });
}; */

btnFire.addEventListener("click", () => {
  fireAttack();
});
//*! === Water */
btnWater.addEventListener("click", () => {
  console.log("Water");
});
//*! === Earth */
btnEarth.addEventListener("click", () => {
  console.log("Earth");
});

//*! === Function Attack Fire */
function fireAttack() {
  return (playAttack = console.log("Fire"));
}

//*TODO  === === Init Game Window === === */
window.addEventListener("load", initGame);
