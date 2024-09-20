const preload = document.querySelector('#preload')

window.addEventListener('load', () => {
    setTimeout(() => {
        preload.classList.add('disable')
    }, 200)
})
