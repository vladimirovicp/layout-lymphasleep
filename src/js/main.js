// import '../style.css';

// import CircleType from `circletype`;

import '../scss/main.scss';
import '../index.html';

import '../js/setting';



const hero = document.querySelector('.hero');
if (hero){
    const planetaUp = hero.querySelectorAll('.planet__anima .planet__text-up');
    if( planetaUp.length > 0){
        planetaUp.forEach( planeta => {
            planeta.innerHTML = planeta.textContent.replace(/\S/g, "<span>$&</span>");
            const el = planeta.querySelectorAll('span');
            for(let i=0; i<el.length;i++){
                el[i].style.transform = "rotate("+(i - (el.length -1)/2) * 18+"deg)";
            }
        })
    }

    const planetaDown = hero.querySelectorAll('.planet__anima .planet__text-down');
    if( planetaDown.length > 0){
        planetaDown.forEach( planeta => {
            planeta.innerHTML = planeta.textContent.replace(/\S/g, "<span>$&</span>");
            const el = planeta.querySelectorAll('span');
            for(let i=0; i<el.length;i++){
                el[el.length - i - 1].style.transform = "rotate("+(i - (el.length -1)/2) * 27+"deg)";
            }
        })
    }

}


// const text = document.querySelector('.planet__mercury_text-up');
// //разбивка текста на буквы
// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
// let element = document.querySelectorAll('span');
// for(let i=0; i<element.length;i++){
//     element[i].style.transform = "rotate("+(i - (element.length -1)/2) * 18+"deg)";
// }
