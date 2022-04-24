// main js file for module 10

// get a reference to the menu button
const hb = document.querySelector('#hamburgerBtn')

// get a reference to the page wrapper
const pw = document.querySelector('#pageWrapper')

//listen for click and change page wrapper class
hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver')
})