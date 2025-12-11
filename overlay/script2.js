
const popUpContainer = document.querySelector('.pop-container');

const showPopUpBtn = document.querySelector('.show-popup');
showPopUpBtn.addEventListener('click', () => {
    popUpContainer.classList.add('active');
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    popUpContainer.classList.remove('active');
});


const overLay = document.querySelector('.pop-container');
overLay.addEventListener('click', (e) => {
    popUpContainer.classList.remove('active');
})

const popup = document.querySelector('.popup');
popup.addEventListener('click', (e) => {
    e.stopPropagation();
});