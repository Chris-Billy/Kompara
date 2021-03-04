const burger = document.querySelector('.burger');
const menu = document.querySelector('#menu');
const logo = document.querySelector('#logo-burger');
const nav = document.querySelector('#nav');
const pusher = document.querySelector('.pusher');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');
    pusher.classList.toggle('active');
});


