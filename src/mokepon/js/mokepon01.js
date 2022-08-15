//** === Conditionals === */
const monsterFire = document.querySelector(`#monsterFire`);
const waterBomb = document.querySelector(`#waterBomb`);
const punchEarth = document.querySelector("#punchEarth");
import { fireAdd } from "./mokeponElements";
import { waterAdd } from "./mokeponElements";
import { earthAdd } from "./mokeponElements";
import { enemyOne } from "./mokeponElements";
import { enemyTwo } from "./mokeponElements";
import { enemyThree } from "./mokeponElements";

//*! === */
export const checkedAdd = () => {
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

export const enemySelectAdd = () => {
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
