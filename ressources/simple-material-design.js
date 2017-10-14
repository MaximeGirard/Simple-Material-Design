window.addEventListener('load', function() {

var menuButton = document.getElementsByClassName('smd-menu-button'),
menu = document.getElementsByClassName('smd-menu'),
menuFond = document.getElementsByClassName('smd-menu-fond');

if (menuButton != null && menu != null && menuFond != null) {

menuButton[0].addEventListener('click', function(){
menu[0].classList.add('smd-slide');
menu[0].classList.remove('smd-unslide');
menuFond[0].style.display = 'block';
});

menuFond[0].addEventListener('click', function(){
menu[0].classList.add('smd-unslide');
menu[0].classList.remove('smd-slide');
menuFond[0].style.display = 'none';
});

}
});