const bankSelectBlock = document.querySelector('#content>.bank-select-block')
const subMenuBank = document.querySelector('#content .sub-menu-bank')
const iconRight = document.querySelector('#content>.bank-select-block .right')

// show dropdown menu
if (bankSelectBlock && subMenuBank) {
    bankSelectBlock.addEventListener('click', () => {
        subMenuBank.classList.toggle('show-sub-menu')
        iconRight.classList.toggle('down-icon')
    })
}

const imgMain = document.querySelector('#content>.bank-select-block img')
const nameMain = document.querySelector('#content>.bank-select-block .infor .name')
const numberMain = document.querySelector('#content>.bank-select-block .infor .number')

const bgImg = document.querySelector('#content>.bank-select-block .bg-img')
const infor = document.querySelector('#content>.bank-select-block .infor')

const subNavItem = document.querySelectorAll('#content .sub-menu-bank .bank-select-block')

// change infor
if (subNavItem) {
    subNavItem.forEach((item) => {
        item.addEventListener('click', () => {
            // close sub menu
            subMenuBank.classList.toggle('show-sub-menu')
            iconRight.classList.toggle('down-icon')

            imgMain.remove()
            nameMain.remove()
            numberMain.remove()

            const selectedImg = item.querySelector('.bg-img img').getAttribute('src')
            const selectedName = item.querySelector('.infor .name').innerHTML
            const selectedNumber = item.querySelector('.infor .number').innerHTML

            //create Img
            const imgCreate = document.createElement('img')
            bgImg.appendChild(imgCreate)

            bgImg.querySelector("img").classList.add('w-100')
            bgImg.querySelector("img").setAttribute('src', selectedImg)

            //create Name
            const nameCreate = document.createElement('div')
            infor.appendChild(nameCreate)

            infor.querySelector("div").classList.add('name')
            infor.querySelector("div").classList.add('fw-400')
            infor.querySelector("div").innerHTML = selectedName

            //create number
            const numberCreate = document.createElement('p')
            infor.appendChild(numberCreate)

            infor.querySelector("p").classList.add('number')
            infor.querySelector("p").classList.add('fs-14')
            infor.querySelector("p").classList.add('fw-400')
            infor.querySelector("p").classList.add('text-secondary')
            infor.querySelector("p").classList.add('mt-4')
            infor.querySelector("p").innerHTML = selectedNumber
        })
    })
}


$(".list-greeting-card").slick({
    dots: false,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 2,
    touchThreshold: 100,
    infinite: true,
    variableWidth: true,
    swipe: true,
    swipeToSlide: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
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
                slidesToShow: 2,
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
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});
