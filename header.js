const burger = document.querySelector('.burger');
const menu = document.querySelector('#menu');
const logo = document.querySelector('#logo-burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    logo.classList.toggle('active');
});


