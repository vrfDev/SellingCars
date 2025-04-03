let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next'); // Corrigido nexButton para nextButton
let container = document.querySelector('.list'); // Alterado .container para .list
let items = container.querySelectorAll('.item');
let indicator = document.querySelector('.indicators'); // Corrigido querrySelector para querySelector
let dots = indicator.querySelectorAll('ul li'); // Corrigido querrySelectorAll para querySelectorAll

let active = 0;
let lastPosition = items.length - 1; // Corrigido lenght para length

// Botão "Próximo"
nextButton.onclick = () => {
    items[active].classList.remove('active');
    dots[active].classList.remove('active');

    active = active + 1 > lastPosition ? 0 : active + 1;

    items[active].classList.add('active');
    dots[active].classList.add('active');
}

// Botão "Anterior"
prevButton.onclick = () => {
    items[active].classList.remove('active');
    dots[active].classList.remove('active');

    active = active - 1 < 0 ? lastPosition : active - 1;

    items[active].classList.add('active');
    dots[active].classList.add('active');
}
