// main JS file for module 8 2740 mark lund

const hb = document.querySelector('#hambutton')

const pn = document.querySelector('.navlist')

hb.addEventListener('click', () => {
    hb.classList.toggle('open')
    pn.classList.toggle('open')
})

// swiper stuff

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 2000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    //autoplay
    autoplay: {
        delay: 5000,
    }
});
