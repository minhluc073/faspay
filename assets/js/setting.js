const changeLanguageBlock = document.querySelector('.change-language-block')
const navMain = document.querySelector('.change-language-block .menu-nav>.nav-item')
const subMenuNav = document.querySelector('.change-language-block .menu-nav .sub-menu-nav')
const subNavItem = document.querySelectorAll('.change-language-block .menu-nav .sub-menu-nav .nav-item')
const iconRight = document.querySelector('.change-language-block .menu-nav>.nav-item .ph-caret-right')

const imgLanguage = document.querySelector('.change-language-block .menu-nav>.nav-item img')
const nameLanguage = document.querySelector('.change-language-block .menu-nav>.nav-item .nav')

const leftInfor = document.querySelector('.change-language-block .menu-nav>.nav-item .left-infor')
const bgImg = document.querySelector('.change-language-block .menu-nav>.nav-item .bg-img')


navMain.addEventListener('click', () => {
    subMenuNav.classList.toggle('show-sub-menu-nav')
    changeLanguageBlock.classList.toggle('show-height')
    iconRight.classList.toggle('down-icon')
})

subNavItem.forEach((item) => {
    item.addEventListener('click', () => {
        subMenuNav.classList.toggle('show-sub-menu-nav')
        changeLanguageBlock.classList.toggle('show-height')
        iconRight.classList.toggle('down-icon')

        // add active on selectedItem
        subMenuNav.querySelector('.active').classList.remove('active')
        item.classList.add('active')

        // remove img, name language
        imgLanguage.remove()
        nameLanguage.remove()
        const selectedImg = item.querySelector('.left-infor img').getAttribute('src')
        const selectedName = item.querySelector('.left-infor .nav').innerHTML

        // create Img
        const imgCreate = document.createElement('img')
        bgImg.appendChild(imgCreate)

        const img = bgImg.querySelector("img")

        img.classList.add('w-100')
        img.setAttribute('src', selectedImg)

        // create Name
        const nameCreate = document.createElement('span')
        leftInfor.appendChild(nameCreate)

        const name = leftInfor.querySelector("span")

        name.classList.add('nav')
        name.classList.add('ml-16')
        name.classList.add('fw-400')
        name.innerHTML = selectedName
    })
})
