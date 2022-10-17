let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно loginPopUp
let openPopupButton = document.querySelectorAll('.setting__link'); // Кнопки для показа окна

openPopupButton.forEach((button) =>{
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active');
    }
});



// function getLocalStorage() {
//     if (localStorage.getItem('hero')) {
//
//     }
// }

const setting = document.querySelector('.setting')

const main = document.querySelector('.main');

const hero = main.querySelector('.hero');
const hero2 = main.querySelector('.hero2');

let heroBlock = 'ver1';
let heroSelected = setting.querySelector('.setting__hero-select');



// перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
function setLocalStorage() {
    localStorage.setItem('heroBlock', heroBlock);
}
window.addEventListener('beforeunload', setLocalStorage);

// перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
function getLocalStorage() {
    if (localStorage.getItem('heroBlock')) {
        heroBlock = localStorage.getItem('heroBlock');
        heroSelectTrue(heroBlock);
    }
}
window.addEventListener('load', getLocalStorage);

heroTrue();

heroSelected.addEventListener("change", ()=>{
    let selectValue = heroSelected.value;
    heroSelectTrue(selectValue);
    heroTrue();
});


function heroTrue(){
    switch (heroBlock) {
        case 'ver1':
            hero.style.display = "block";
            hero2.style.display = "none";
            heroBlock = 'ver1';
            break;
        case 'ver2':
            hero.style.display = "none";
            hero2.style.display = "block";
            heroBlock = 'ver2';
            break;
        default:
    }
}

function heroSelectTrue(selectValue){
    for(let i=0; i<heroSelected.options.length; i++){
        if(heroSelected.options[i].value === selectValue ){

            heroSelected.options[i].selected = true;
            heroBlock = heroSelected.options[i].value;
        } else {
            heroSelected.options[i].selected = false;
        }
    }
}




