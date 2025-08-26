document.addEventListener('DOMContentLoaded', function () {
  const splash = document.querySelector('.splash-screen-new-battle');

  if (splash) {
    setTimeout(function () {
      splash.classList.add('hidden');
    }, 1500);
  }
});

/////
const savedName = localStorage.getItem('username');
const yourName = document.querySelector('.your-name');
if (yourName && savedName) {
  yourName.textContent = savedName;
}
////
const attackForm = document.getElementById('attack-form');
const defenceForm = document.getElementById('defence-form');
const attackBtn = document.querySelector('.attack-btn');

attackForm.addEventListener('change', removeBlock);
defenceForm.addEventListener('change', removeBlock);

function removeBlock() {
  const selectedAttack = document.querySelector('input[name="attack"]:checked');
  const selectedDefence = document.querySelectorAll('input[name="defence"]:checked');

  if (selectedAttack && selectedDefence.length === 2) {
    attackBtn.disabled = false;   
  } else {
    attackBtn.disabled = true;   
  }
}
////
attackBtn.addEventListener('click', startFight);
function startFight () {

}

// ////
// const your = {
//   name: 'yourName',
//   hp: 150,
//   attackDamage: 20,
//   critChance: 0.2,
//   critMultiplier: 1.5,
//   attackZonesCount: 1,  
//   defenceZonesCount: 2,
//   selectedAttack: null,
//   selectedDefence: [],
// };

// const opponent = {
//   name: 'Tiger',
//   hp: 150,
//   attackDamage: 15,
//   critChance: 0.1,
//   critMultiplier: 1.7,
//   attackZonesCount: 2,
//   defenceZonesCount: 1,
//   selectedAttack: [],
//   selectedDefence: [],
// };


///
localStorage.setItem('yourCharacter', JSON.stringify({
  name: "name",
  avatar: "url",
  wins: 3,
  losses: 1,
}));

localStorage.setItem('opponentCharacter', JSON.stringify({
  name: "name",
  avatar: "url",
  wins: 3,
  losses: 1,
}));