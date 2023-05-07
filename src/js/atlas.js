
const atlas = document.querySelector('.atlas')

if(atlas){
    const control = atlas.querySelector('.atlas-control')
    const list = control.querySelector('.atlas-control-list')

    const items = list.querySelectorAll('.atlas-control__item')

    if(items.length>0){
        items.forEach(item => {
            atlasButton(item)

            // item.addEventListener('click', () =>{
            //     console.log('123')
            // })

        })
    }
}

const modal = document.querySelector('.atlas-modal');
const closeModal = document.querySelector('.atlas-closeModal');


if (modal){
    closeModal.addEventListener('click',()=>{
        modal.close();
    });

    modal.addEventListener('click', (e)=>{
        if(e.target ===modal) modal.close();
    })
}


function atlasButton(item){
    const photo = item.querySelector('.atlas-control__btn-photo')
    const video = item.querySelector('.atlas-control__btn-video')

    if (photo){
        photo.addEventListener('click', () => {
            if (modal){
                modal.showModal();
            }
        })

    }

    if (video){
        video.addEventListener('click', () => {
            if (modal){
                modal.showModal();
            }
        })
    }
}

