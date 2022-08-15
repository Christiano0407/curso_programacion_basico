//** === Attack */
const divAttack = document.querySelector(`#IdChildAttack`);
const divEnemyAttack = document.querySelector(`#idEnemyChildAttack`);
let playAttack;
let enemyAttack;
//let imageAttack;

//*? === Function Attack Fire, Water and Earth === */
export const fireAttack = () => {
  playAttack = console.log("Fire!!!");
  imageAttackFire();
};
export const waterAttack = () => {
  playAttack = console.log("Water");
  imageAttackWater();
};
export const earthAttack = () => {
  playAttack = console.log("Earth Rock");
  imageAttackEarth();
};

export const enemyRandomAttack = () => {
  let enemyAttackRandomPower = randomAttack(1, 3);

  if (enemyAttackRandomPower == 1) {
    enemyAttack = console.log("Arrow Attack");
    imageAttackEnemyOne();
  } else if (enemyAttackRandomPower == 2) {
    enemyAttack = console.log("Attack Plsu 02");
  } else if (enemyAttackRandomPower == 3) {
    enemyAttack == console.log("Attack Plus 03");
  } else {
    console.log("Your not a power!");
  }
};

//*! === ADD Images Child */
//*? === User */
function imageAttackFire() {
  let imageFire = document.createElement("img");
  imageFire.src =
    "https://images.unsplash.com/photo-1583248352195-d3a8e766edf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";
  imageFire.width = 100;
  imageFire.height = 100;
  imageFire.className = "fireImage";
  divAttack.appendChild(imageFire);
}
function imageAttackWater() {
  let imageWater = document.createElement("img");
  imageWater.src =
    "https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80";
  imageWater.width = 100;
  imageWater.height = 100;
  imageWater.className = "waterImage";
  divAttack.appendChild(imageWater);
}
function imageAttackEarth() {
  let imageRock = document.createElement("img");
  imageRock.src =
    "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  imageRock.width = 100;
  imageRock.height = 100;
  imageRock.className = "rockImage";
  divAttack.appendChild(imageRock);
}
//*? === Enemy */
function imageAttackEnemyOne() {
  let imageEnemyOne = document.createElement("img");
  imageEnemyOne.src =
    "https://images.unsplash.com/photo-1563705655508-d8915da702f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
  imageEnemyOne.width = 100;
  imageEnemyOne.height = 100;
  imageEnemyOne.className = "arrowImage";
  divEnemyAttack.appendChild(imageEnemyOne);
}

//*! Random Enemy Attack === */
const randomAttack = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
