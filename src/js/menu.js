const header = document.querySelector('.header');
const menu = header.querySelector('.menu');
const iconMenu = menu.querySelector('.menu__icon');
const menuWrapper = menu.querySelector('.menu__wrapper');



if(iconMenu){
    iconMenu.addEventListener('click', (event) => {
        iconMenu.classList.toggle("open");
        if(menuWrapper){
            menuWrapper.classList.toggle("_active");
        }
    });

    // _active
    // menu__wrapper

}

