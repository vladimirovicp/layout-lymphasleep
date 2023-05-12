
const atlas = document.querySelector('.atlas')

const dataAtlas = [
    {
        'photo': "./img/no-photo-1920.jpg",
        'text': "Representative images of the lumenized Lyve-1/Prox-1-expressing vessel with distinct walls composed of a single endothelial layer in coronal projection: (1 and 2) – the undulating shape in distal region of the lymphatic vessels, (3 and 4) – valve in the lymphatic vessel, (5-8) – the walls of lymphatic vessel and colocolization of Lyve1 with Prox1"
    },
    {
        'photo': "./img/no-photo-1920.jpg",
        'text': "Lyve-1/Prox-1 expressing LVs in axial projection"
    },
    {
        'photo': "./img/no-photo-1920.jpg",
        'text': "Representative images of Lyve-1-expressing structures close to CD31-expressing capillary (a), venula (b) and arteriole (c). \n"
    },
    {
        'photo': "./img/no-photo-1920.jpg",
        'text': ""
    }
];

if(atlas){
    const control = atlas.querySelector('.atlas-control')
    const videos = control.querySelector('.atlas-control__video');
    const list = videos.querySelector('.atlas-control__list')
    const itemsVideos = list.querySelectorAll('.atlas-control__video-item')

    if(itemsVideos.length>0){
        itemsVideos.forEach(item => {
            atlasVideoButton(item);
        })
    }

    const image = control.querySelector('.atlas-control__img');
    const listImage = image.querySelector('.atlas-control__photo-list')
    const itemsImages = listImage.querySelectorAll('.atlas-control__photo-item')

    if(itemsImages.length>0){
        itemsImages.forEach(item => {
            atlasImageButton(item);
        })
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


    function atlasVideoButton(item){
        const btn = item.querySelector('.atlas-control__btn-video');
        if(btn){
            btn.addEventListener('click', () => {
                if (modal){
                    const iframe = iframeGenerate(btn.dataset.videoId);
                    modalInner.innerHTML = ''
                    modalInner.appendChild(iframe)
                    modal.showModal();
                }
            })
        }
    }

    function atlasImageButton(item){
        const photo = item.querySelector('.atlas-control__btn-photo')

        if (photo){
            photo.addEventListener('click', () => {
                if (modal){
                    const img = imageGenerator(dataAtlas[photo.dataset.photoId].photo);
                    const text = dataAtlas[photo.dataset.photoId].text;



                    const content = document.createElement('div');
                    content.classList.add('atlas-modal__content');

                    const textBlock = document.createElement('div');
                    textBlock.classList.add('atlas-modal__text');
                    textBlock.innerHTML = text;

                    modalInner.innerHTML = ''
                    modalInner.appendChild(content)
                    content.appendChild(img)
                    content.appendChild(textBlock)



                    modal.showModal();
                }
            })
        }
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



