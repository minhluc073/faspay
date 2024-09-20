
// Top Up, Withdraw change active cate
const listMoney = document.querySelector('.denomination-block .list-money .row')

listMoney.addEventListener('click', (selectedItem) => {
  if (selectedItem.target.classList.contains("bg")) {
    // add active class
    listMoney.querySelector('.border-primary-2px').classList.remove('border-primary-2px')
    selectedItem.target.classList.add('border-primary-2px')
  }
})