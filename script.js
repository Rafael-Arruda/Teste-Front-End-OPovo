const btnMobile = document.querySelector('.btn-mobile');

function toggleMenu() {

    const nav = document.querySelector('.navigation');
    const header = document.querySelector('header');

    nav.classList.toggle('active-nav');
    header.classList.toggle('active-header');
}

btnMobile.addEventListener('click', toggleMenu);