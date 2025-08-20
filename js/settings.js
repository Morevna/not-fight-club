
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.settings__input');
  const savedName = localStorage.getItem('username');

  if (input && savedName) {
    input.value = savedName;
  }
});

////
function showSplashScreenCreated() {
    const splashCreated = document.querySelector('.splash-screen-created');

  if (splashCreated) {
    splashCreated.classList.remove('hidden');

    setTimeout(function() {
      splashCreated.classList.add('hidden'); 
      window.location.href = 'index.html';
    }, 2000); 
    
  }
}
////
function saveName() {
  const characterName = document.querySelector('.settings__input')?.value.trim();

  if (characterName) {
    localStorage.setItem('username', characterName);
    showSplashScreenCreated();
    console.log('Имя успешно сохранено:', localStorage.getItem('username')); // проверка имени
  } else {
    alert('Please Enter New Character Name!');
  }
}
///
const changeButton = document.querySelector('.settings__button');
changeButton?.addEventListener('click', saveName);

