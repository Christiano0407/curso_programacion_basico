//** === Conditionals === */
import { fireAdd } from "./mokeponElements.js";
import { waterAdd } from "./mokeponElements.js";
import { earthAdd } from "./mokeponElements.js";
import { enemyOne } from "./mokeponElements.js";
import { enemyTwo } from "./mokeponElements.js";
import { enemyThree } from "./mokeponElements.js";
import { enemyRandomAttack } from "./mokeponAttack03.js";
const monsterFire = document.querySelector(`#monsterFire`);
const waterBomb = document.querySelector(`#waterBomb`);
const punchEarth = document.querySelector("#punchEarth");

//*! === User*/
export const checkedAdd = () => {
  let playMonster = document.querySelector(`#playerMonster`); // Span del Player =

  if (monsterFire.checked) {
    alert(`Your Select: MonsterFire π₯`);
    fireAdd();
    playMonster.innerHTML = "MonsterFire π₯";
  } else if (waterBomb.checked) {
    alert(`Your Select: WaterBomb π§`);
    waterAdd();
    playMonster.innerHTML = "WaterBomb π§";
  } else if (punchEarth.checked) {
    alert(`Your Select: PunchEarth ππ¦Ύ`);
    earthAdd();
    playMonster.innerHTML = "PunchEarth π¦Ύπβ‘";
  } else {
    alert("Sorry!! Your Not Select One. Please. select your Mokepon");
  }

  enemySelectAdd();
};
//*! === Enemy */
const enemySelectAdd = () => {
  let enemyMonster = document.querySelector("#enemyMonster");
  let enemyAttack = random(1, 3);

  if (enemyAttack == 1) {
    enemyMonster.innerHTML = "ThunderLight β‘";
    enemyTwo();
    enemyRandomAttack();
  } else if (enemyAttack == 2) {
    enemyMonster.innerHTML = "BombGreen π±";
    enemyOne();
    enemyRandomAttack();
  } else if (enemyAttack == 3) {
    enemyMonster.innerHTML = "CocoSmash π₯";
    enemyThree();
    enemyRandomAttack();
  } else {
    alert("Sorry!! Please, select your Mokepon of Attack");
  }
};

//** === Random Function === */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
