// main JS file for module 8 2740 mark lund

const hb = document.querySelector('#hambutton')

const pn = document.querySelector('.navlist')

hb.addEventListener('click', () => {
    hb.classList.toggle('open')
    pn.classList.toggle('open')
})

