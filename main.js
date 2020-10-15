const button = document.querySelector('.dropdown-btn');
const content = document.querySelector('.dropdown-content');
const dropDown = document.querySelector('.dropdown')


button.addEventListener('click', openMenu);

function openMenu(e) {
    content.classList.toggle('open');
}

document.addEventListener('click',(e)=> {
    let isClickInside = dropDown.contains(e.target);
    let isClickOutside = content.contains(e.target);

    if(!isClickInside && isClickOutside.parentNode != isClickInside) {
        content.classList.remove('open');
    }
})
