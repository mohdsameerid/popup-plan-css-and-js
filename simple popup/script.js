
const popUpContainer = document.querySelector('.pop-container');

const showPopUpBtn = document.querySelector('.show-popup');
showPopUpBtn.addEventListener('click', () => {
    popUpContainer.classList.add('active');
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    popUpContainer.classList.remove('active');
});