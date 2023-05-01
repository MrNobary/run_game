
const player = document.querySelector('.player')
const pipe = document.querySelector('.pipe')

const jump = () => {
    player.classList.add('jump')

    setTimeout(() => {
        player.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
    
    if (pipePosition <= 130 && pipePosition > 0 && playerPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        player.style.background = 'red';
        player.style.bottom = `${playerPosition}px`;

        clearInterval(loop)
    }



}, 10)

document.addEventListener('keydown', jump)