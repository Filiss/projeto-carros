let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let all = document.querySelector('.all');
let items = document.querySelectorAll('.list .item');
let indicator = document.querySelector('.indic');
let list = all.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlide () {
    let itemOld = all.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    items[active].classList.add('active')


}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;

    setSlide()

    items[active].classList.add('active')

}

prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;

    setSlide()

    items[active].classList.add('active')
}