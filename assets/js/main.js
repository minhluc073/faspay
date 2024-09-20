var passiveEvent = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function () {
      passiveEvent = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) { }

// in my case I need both passive and capture set to true, change as you need it.
passiveEvent = passiveEvent ? { capture: true, passive: true } : true;

//if you need to handle mouse wheel scroll
var supportedWheelEvent = "onwheel" in HTMLDivElement.prototype ? "wheel" :
  document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";


// home page
$(".list-send-again").slick({
  dots: false,
  arrows: false,
  slidesToShow: 10,
  slidesToScroll: 10,
  touchThreshold: 100,
  swipe: true,
  swipeToSlide: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 10,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 9,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 9,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
});


// voucher page
$(".list-voucher").slick({
  dots: false,
  arrows: false,
  slidesToShow: 10,
  slidesToScroll: 10,
  touchThreshold: 100,
  infinite: true,
  variableWidth: true,
  swipe: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
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



$(".list-deal").slick({
  dots: false,
  arrows: false,
  slidesToShow: 10,
  slidesToScroll: 10,
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


// payment security
const inputBlock = document.querySelectorAll('.payment-security-block .list-page .heading .label-block span')

if (inputBlock) {
  inputBlock.forEach(item => {
    item.addEventListener('click', () => {
      let subHeading = item.parentElement.parentElement.parentElement.querySelector('.sub-heading')
      console.log(subHeading);
      let listPage = subHeading.parentElement.parentElement
      console.log(listPage);
      if (window.getComputedStyle(item).backgroundColor === 'rgb(211, 211, 212)') {
        subHeading.classList.remove('disable')
        subHeading.classList.add('enable')
        listPage.style.height = '100px'
      } else {
        subHeading.classList.remove('enable')
        subHeading.classList.add('disable')
        listPage.style.height = '52px'
      }
    })
  })
}

// Manage friend
const deleteButton = document.querySelector('.header-main .ph-trash-simple')
const modalDeleteBlock = document.querySelector('.modal-delete-block')
const modalDeleteBlockContainer = document.querySelector('.modal-container')
const closeModal = document.querySelectorAll('.modal-delete-block .button-block button')

if (deleteButton && modalDeleteBlock) {
  deleteButton.addEventListener('click', () => {
    modalDeleteBlock.classList.add('open')
  })

  modalDeleteBlock.addEventListener('click', () => {
    modalDeleteBlock.classList.remove('open')
  })

  closeModal.forEach(item => {
    item.addEventListener('click', () => {
      modalDeleteBlock.classList.remove('open')
    })
  })

  modalDeleteBlockContainer.addEventListener('click', (e) => {
    e.stopPropagation()
  })
}