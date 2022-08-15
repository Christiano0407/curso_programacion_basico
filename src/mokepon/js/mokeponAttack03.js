//** === Attack */
const divAttack = document.querySelector(`#IdChildAttack`);
let playAttack;

//*? === Function Attack Fire */
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
function imageAttackWater() {}
function imageAttackEarth() {}
