let body = document.body;
const menu = document.getElementById('menu');
let icon = document.getElementById('menu-icon');
let logo = document.getElementById('logo');

function openMenu(){

    if(menu.style.display === 'flex'){
        menu.style.display = 'none';
        body.classList.remove('stop-scrolling');
        icon.classList.remove('fa-xmark');
        icon.classList.remove('fa-2xl');
        icon.classList.add('fa-xl');
        icon.classList.add('fa-bars');
        logo.style.display = 'block';
    }
    else {
        menu.style.display = 'flex';
        body.classList.add('stop-scrolling');
        icon.classList.remove('fa-bars');
        icon.classList.remove('fa-xl');
        icon.classList.add('fa-2xl');
        icon.classList.add('fa-xmark');
        logo.style.display = 'none';
    }
}
function closeMenu(){

}
