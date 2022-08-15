//** === Attack */
const divAttack = document.querySelector(`#IdChildAttack`);
let playAttack;

//*? === Function Attack Fire, Water and Earth === */
export const fireAttack = () => {
  playAttack = imageAttackFire();
};
export const waterAttack = () => {
  playAttack = imageAttackWater();
};
export const earthAttack = () => {
  playAttack = imageAttackEarth();
};

//*! === ADD Images Child */
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
