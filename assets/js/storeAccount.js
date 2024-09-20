// Get User information when click on a User item
// Initialize selectedUser in localStorage
let selectedUser = localStorage.getItem('selectedUser');
// localStorage.setItem('selectedUser', '')

// Get all User entries on the list page
const userItems = document.querySelectorAll('.user-item');

// Handle click events for each User entry
if (userItems) {
    userItems.forEach(userItem => {
        userItem.addEventListener('click', () => {
            // Listen for click events, get User information, save to UserInfor
            if (userItem.querySelector('.name')) {
                var UserInfor = {
                    name: userItem.querySelector('.name').textContent,
                    img: userItem.querySelector('.bg-img img').getAttribute('src'),
                }
            }

            if (userItem.querySelector('.name') && userItem.querySelector('.desc')) {
                var UserInfor = {
                    name: userItem.querySelector('.name').textContent,
                    number: userItem.querySelector('.desc').textContent,
                    img: userItem.querySelector('.bg-img img').getAttribute('src'),
                }
            }

            // Save User item information to localStorage
            localStorage.setItem('selectedUser', JSON.stringify(UserInfor));
        });
    });
}

// Extract User item information from localStorage
let selectedUserInfo = JSON.parse(localStorage.getItem('selectedUser'));

// Display User information on the User details page
if (document.querySelector('.bank-select-block')) {
    if (selectedUserInfo !== null) {
        if (document.querySelector('.bank-select-block .infor .name') && document.querySelector('.bank-select-block .infor .number') && document.querySelector('.bank-select-block .bg-img img')) {
            document.querySelector('.bank-select-block .infor .name').textContent = selectedUserInfo.name;
            if (!selectedUserInfo.number) {
                document.querySelector('.bank-select-block .infor .number').textContent = '505-287-8051';
            } else {
                document.querySelector('.bank-select-block .infor .number').textContent = selectedUserInfo.number;
            }
            document.querySelector('.bank-select-block .bg-img img').src = selectedUserInfo.img;
        }
    }
}


// Initialize selectedBank in localStorage
let selectedBank = localStorage.getItem('selectedBank');

// Get all User entries on the list page
const buttonTransferByWallet = document.querySelector('.btn-confirm.faspay-wallet');

// Handle click events for btn confirm payment
if (buttonTransferByWallet) {
    buttonTransferByWallet.addEventListener('click', () => {
        // Listen for click events, get User information, save to UserInfor
        if (document.querySelector('#content>.bank-select-block')) {
            var BankInfor = {
                name: 'FAS Bank',
                number: document.querySelector('#content>.bank-select-block .number').textContent,
                img: 'assets/images/fav.png',
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

