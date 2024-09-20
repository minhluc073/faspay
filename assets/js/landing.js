// home page
$("#screen-preview .list-screen .row").slick({
    dots: false,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    touchThreshold: 100,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1780,
            settings: {
                slidesToShow: 6,
            },
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
});


// header active
const listItem = document.querySelector('#header .list-nav ul')
const navItem = document.querySelectorAll('#header .list-nav ul li')

navItem.forEach(item => {
    item.addEventListener('click', () => {
        listItem.querySelector('.active').classList.remove('active')
        item.classList.add('active')
    })
})


// close qr
const closeIcon = document.querySelector('#qr-fixed i')
const qrFixed = document.querySelector('#qr-fixed')

closeIcon.addEventListener('click', () => {
    qrFixed.classList.add('d-none')
})