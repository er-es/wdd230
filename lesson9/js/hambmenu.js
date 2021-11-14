
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const clickMenu = document.querySelector('.clickMenu');

clickMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show () {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close () {
    mainMenu.style.top = '-100%';
}



//function toggleMenu() { document.getElementsByClassName("navigation")[0].classList.toggle("responsive");}
