const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const createAccBtn = document.getElementById('createAccBtn');
const invalid = document.getElementById('invalid');

function checkPasswordMatch() {
    if (passwordInput.value.trim() === '') {
        passwordInput.setCustomValidity('Password cannot be empty');
        confirmPasswordInput.setCustomValidity('Password cannot be empty')
        invalid.innerText = 'Please input password';
    } else if (passwordInput.value === confirmPasswordInput.value) {
        passwordInput.setCustomValidity('');
        confirmPasswordInput.setCustomValidity('');
        invalid.innerText = '';
    } else {
        passwordInput.setCustomValidity('Passwords do not match');
        confirmPasswordInput.setCustomValidity('Passwords do not match');
        invalid.innerText = "Password does not match"
    }
}

createAccBtn.addEventListener('click', function (e) {
    e.preventDefault();
    checkPasswordMatch();
});
