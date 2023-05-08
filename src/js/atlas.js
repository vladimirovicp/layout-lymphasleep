
const atlas = document.querySelector('.atlas')

const dataAtlas = [
    {
        'photo': "./img/no-photo-1920.jpg",
    }
];

if(atlas){
    const control = atlas.querySelector('.atlas-control')
    const list = control.querySelector('.atlas-control-list')

    const items = list.querySelectorAll('.atlas-control__item')

    if(items.length>0){
        items.forEach(item => {
            atlasButton(item)
        })
    }
}

const modal = document.querySelector('.atlas-modal');
const modalInner = modal.querySelector('.atlas-modal__inner');
const closeModal = modal.querySelector('.atlas-closeModal');


if (modal){
    closeModal.addEventListener('click',()=>{
        modal.close();
    });

    modal.addEventListener('click', (e)=>{
        if(e.target ===modal) modal.close();

        setTimeout(() => {  modalInner.innerHTML = ''; }, 300);

    })
}


function atlasButton(item){
    const photo = item.querySelector('.atlas-control__btn-photo')
    const video = item.querySelector('.atlas-control__btn-video')

    if (photo){
        photo.addEventListener('click', () => {
            if (modal){

                const img = imageGenerator(dataAtlas[0].photo);
                modalInner.innerHTML = ''
                modalInner.appendChild(img)
                modal.showModal();

            }
        })
    }

    if (video){
        video.addEventListener('click', () => {
            if (modal){

                const iframe = iframeGenerate(video.dataset.videoId);
                modalInner.innerHTML = ''
                modalInner.appendChild(iframe)

                modal.showModal();
            }
        })
    }
}


const imageGenerator = (path) => {
    const img = document.createElement('img');
    img.src = path;
    img.classList.add('atlas-modal__photo');
    return img;
}

const iframeGenerate = (videoId) => {
    const iframe = document.createElement('iframe');
    const src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`

    iframe.setAttribute('src', src)
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allow', 'autoplay')
    iframe.setAttribute('allowfullscreen', '')
    iframe.classList.add('atlas-modal__video');

    return iframe;
}



