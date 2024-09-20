const inputBlock = document.querySelector('#content .form-input-block .input-block input')
const iconRight = document.querySelectorAll('#content .form-input-block .input-block i')

// show dropdown menu
iconRight.forEach(item => {
    item.addEventListener('click', (e) => {
        const parentItem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
        parentItem.querySelector('.sub-menu-input').classList.toggle('show-dropdown-input')
    })
})

// // change number
const subNavAccount = document.querySelectorAll('#content .account-block .sub-menu-input .bank-select-block')
const subMenuAccount = document.querySelector('#content .account-block .sub-menu-input')

subNavAccount.forEach(item => {
    item.addEventListener('click', () => {
        subMenuAccount.classList.remove('show-dropdown-input')

        const selectedNumber = item.querySelector('.infor .number').innerHTML

        //create number
        document.querySelector('#content>.bank-select-block .infor .number').innerHTML = selectedNumber
        document.querySelector('#content .account-block .input-block input').value = selectedNumber
    })
})


// change img, name
const imgMain = document.querySelector('#content>.bank-select-block img')
const bgImg = document.querySelector('#content>.bank-select-block .bg-img')

const subNavBank = document.querySelectorAll('#content .bank-block .sub-menu-input .bank-select-block')
const subMenuBank = document.querySelector('#content .bank-block .sub-menu-input')

subNavBank.forEach(item => {
    item.addEventListener('click', () => {
        subMenuBank.classList.remove('show-dropdown-input')

        const selectedImg = item.querySelector('.bg-img img').getAttribute('src')
        const selectedName = item.querySelector('.infor .name').innerHTML

        imgMain.remove()

        //create Img
        const imgCreate = document.createElement('img')
        bgImg.appendChild(imgCreate)

        bgImg.querySelector("img").classList.add('w-100')
        bgImg.querySelector("img").setAttribute('src', selectedImg)

        //create Name
        document.querySelector('#content>.bank-select-block .infor .name').innerHTML = selectedName
        document.querySelector('#content .bank-block .input-block input').value = selectedName

        // change bg img, name result block
        const nameResult = document.querySelector('.list-card .card-name')
        const imgResult = document.querySelector('.list-card .bg-img')

        if (nameResult) {
            nameResult.innerHTML = selectedName
        }
        if (selectedName.toLowerCase() == 'fas bank' && imgResult) {
            imgResult.setAttribute('src', 'assets/images/bg/yellow.png')
        }
        if (selectedName.toLowerCase() == 'acb bank' && imgResult) {
            imgResult.setAttribute('src', 'assets/images/bg/red.png')
        }
        if (selectedName.toLowerCase() == 'bia bank' && imgResult) {
            imgResult.setAttribute('src', 'assets/images/bg/green.png')
        }
        if (selectedName.toLowerCase() == 'cbb bank' && imgResult) {
            imgResult.setAttribute('src', 'assets/images/bg/blue.png')
        }
    })
})
