
// Initialize selectedBank in localStorage
let selectedBank = localStorage.getItem('selectedBank');

// Get all User entries on the list page
const buttonConfirm = document.querySelector('.btn-confirm');

// Handle click events for btn confirm payment
if (buttonConfirm) {
    buttonConfirm.addEventListener('click', () => {
        // Listen for click events, get User information, save to UserInfor
        if (document.querySelector('#content>.bank-select-block')) {
            var BankInfor = {
                name: document.querySelector('#content>.bank-select-block .name').textContent,
                number: document.querySelector('#content>.bank-select-block .number').textContent,
                img: document.querySelector('#content>.bank-select-block .bg-img img').getAttribute('src'),
            }
        }

        // Save Bank item information to localStorage
        localStorage.setItem('selectedBank', JSON.stringify(BankInfor));
    });
}

// Extract User item information from localStorage
let selectedBankInfo = JSON.parse(localStorage.getItem('selectedBank'));

// Display User information on the User details page
if (document.querySelector('.success-block')) {
    if (selectedBankInfo !== null) {
        if (document.querySelector('.bank-main .name .bank-name') && document.querySelector('.bank-main .number') && document.querySelector('.bank-main .bg-img img')) {
            document.querySelector('.bank-main .name .bank-name').textContent = selectedBankInfo.name;
            document.querySelector('.bank-main .number').textContent = selectedBankInfo.number;
            document.querySelector('.bank-main .bg-img img').src = selectedBankInfo.img;
        }
    }
}


