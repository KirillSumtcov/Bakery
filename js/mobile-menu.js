const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll(".mobile-menu__menu .link");
const closeButton = document.querySelector(".mobile-menu__btn-close");

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const closeMenu = () => mobileMenu.classList.remove("is-open");


menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);