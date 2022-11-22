const icons = document.querySelectorAll('.menu__icon');
icons.forEach (icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

