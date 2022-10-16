// import '../style.css';

// import CircleType from `circletype`;

import '../scss/main.scss';
import '../index.html';

import '../js/setting';



// hero

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
                el[el.length - i - 1].style.transform = "rotate("+(i - (el.length -1)/2) * 18+"deg)";
            }
        })
    }
}

const hero2 = document.querySelector('.hero2');
if (hero2){
    const planetaUp2 = hero2.querySelectorAll('.planet2__anima .planet2__text-up');
    if( planetaUp2.length > 0){
        planetaUp2.forEach( planeta => {
            planeta.innerHTML = planeta.textContent.replace(/\S/g, "<span>$&</span>");
            const el = planeta.querySelectorAll('span');
            for(let i=0; i<el.length;i++){
                el[i].style.transform = "rotate("+(i - (el.length -1)/2) * 18+"deg)";
            }
        })
    }

    const planetaDown2 = hero2.querySelectorAll('.planet2__anima .planet2__text-down');
    if( planetaDown2.length > 0){
        planetaDown2.forEach( planeta => {
            planeta.innerHTML = planeta.textContent.replace(/\S/g, "<span>$&</span>");
            const el = planeta.querySelectorAll('span');
            for(let i=0; i<el.length;i++){
                el[el.length - i - 1].style.transform = "rotate("+(i - (el.length -1)/2) * 18+"deg)";
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


// const upNode = document.getElementById('up');
// const downNode = document.getElementById('down');
//
// const upTextArr = [...upNode.textContent.split('')];
// const downTextArr = [...downNode.textContent.split('')];
//
// upNode.innerHTML = '';
// downNode.innerHTML = '';
//
//
// upTextArr.forEach((el, idx) => {
//     console.log(idx)
//     upNode.innerHTML += `<span style='transform: rotate(${idx * -15 + 85}deg);'>${upTextArr[upTextArr.length - idx - 1]}</span>`
//
//     // upNode.innerHTML += `<span style='transform: rotate(${  (idx+1) * -15 + upTextArr.length*15/2 }deg);'>${upTextArr[upTextArr.length - idx - 1]}</span>`
// });
//
// downTextArr.forEach((el, idx) => {
//   downNode.innerHTML += `<span style='transform: rotate(${idx * -15 + 55}deg);'>${el}</span>`
// });