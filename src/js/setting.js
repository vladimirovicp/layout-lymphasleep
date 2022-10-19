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

const videoPreview = main.querySelector('.video-preview');
let videoPreviewBlock = 'выкл';
let videoPreviewSelected = setting.querySelector('.setting__video-preview_select');

// перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
function setLocalStorage() {
    localStorage.setItem('heroBlock', heroBlock);
    localStorage.setItem('videoPreviewBlock', videoPreviewBlock);
}
window.addEventListener('beforeunload', setLocalStorage);

// перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
function getLocalStorage() {

    if (localStorage.getItem('heroBlock')) {
        heroBlock = localStorage.getItem('heroBlock');
        heroSelectTrue(heroBlock);
    }
    heroTrue(heroBlock);

    if (localStorage.getItem('videoPreviewBlock')) {
        videoPreviewBlock = localStorage.getItem('videoPreviewBlock');
        videoPreviewSelectTrue(videoPreviewBlock);
    }
    videoPreviewTrue(videoPreviewBlock);

}
window.addEventListener('load', getLocalStorage);


heroSelected.addEventListener("change", ()=>{
    heroSelectTrue(heroSelected.value);
    heroTrue();
});

videoPreviewSelected.addEventListener("change", ()=>{
    let selectValue = videoPreviewSelected.value;
    videoPreviewSelectTrue(selectValue);
    videoPreviewTrue(selectValue);
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
            hero.style.display = "block";
            hero2.style.display = "none";
            heroBlock = 'ver1';
    }
}
function heroSelectTrue(select){
    for(let i=0; i<heroSelected.options.length; i++){
        if(heroSelected.options[i].value === select ){

            heroSelected.options[i].selected = true;
            heroBlock = heroSelected.options[i].value;
        } else {
            heroSelected.options[i].selected = false;
        }
    }
}

function videoPreviewTrue(select){
    switch (select) {
        case 'вкл':
            videoPreview.style.display = "block";
            break;
        case 'выкл':
            videoPreview.style.display = "none";
            break;
        default:
            videoPreview.style.display = "none";
    }
}
function videoPreviewSelectTrue(select){
    for(let i=0; i<videoPreviewSelected.options.length; i++){
        if(videoPreviewSelected.options[i].value === select ){
            videoPreviewSelected.options[i].selected = true;
            videoPreviewBlock = videoPreviewSelected.options[i].value;
        } else {
            videoPreviewSelected.options[i].selected = false;
        }
    }
}






