const mainAvatar = document.querySelector('.character__your-avatar');
const avatarImages = document.querySelectorAll('.avatar-img');
// 
window.addEventListener('DOMContentLoaded', () => {
    const savedAvatar = localStorage.getItem('avatar');
    const savedName = localStorage.getItem('username');
    const savedWins = localStorage.getItem('wins');
    const savedLosses = localStorage.getItem('losses');
    if (savedAvatar && mainAvatar) {
        mainAvatar.setAttribute('src', savedAvatar);
    }
    ////
    const nameEl = document.querySelector('.character__name');
    if (nameEl && savedName) {
        nameEl.textContent = `Name: ${savedName}`;
    }
    ////
    const winsEl = document.querySelector('.wins');
    const lossesEl = document.querySelector('.losses');

    if (winsEl && savedWins) {
        winsEl.textContent = savedWins;
    }

    if (lossesEl && savedLosses) {
        lossesEl.textContent = savedLosses;
    }
});
// 
avatarImages.forEach(img => {
    img.addEventListener('click', () => {
        const newSrc = img.getAttribute('src');
        if (mainAvatar && newSrc) {
            mainAvatar.setAttribute('src', newSrc);

            localStorage.setItem('avatar', newSrc);
            showSplashScreenCreated();
        }
    });
});
// 
function showSplashScreenCreated() {
    const splashCreated = document.querySelector('.splash-screen-created');
    if (splashCreated) {
        splashCreated.classList.remove('hidden');
        setTimeout(() => {
            splashCreated.classList.add('hidden');
        }, 2000);
    }
}



