const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const buttonContainer = document.querySelector('.button-container');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('open');
    buttonContainer.classList.toggle('open');
});
