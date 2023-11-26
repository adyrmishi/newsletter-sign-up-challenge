let subscribe = document.querySelector('input[type="submit"]');
let emailInput = document.querySelector('input[type="text"]');
let signUp = document.querySelectorAll('.column');
let success = document.getElementById('success');
let signUpSection = document.getElementById('newsletter-sign-up');
let errorLabel = document.querySelector('.error');
let button = document.querySelector('button');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
    return emailRegex.test(email) ? true : false;
}

emailInput.addEventListener('input', () => {
    emailInput.value;
});

subscribe.addEventListener('click', e => {
    e.preventDefault()
    if (!validateEmail(emailInput.value)) {
        errorLabel.style.display = 'block';
        emailInput.className = 'error';
    } else {
        emailInput.className = '';
        signUp.forEach(el => { el.style.display = 'none' })
        signUpSection.style.display = 'none'
        success.style.display = 'flex';
        let confirmMsg = document.createElement('p');
        confirmMsg.innerText = `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription.`
        success.insertBefore(confirmMsg, button)
    }
})

button.addEventListener('click', e => {
    signUp.forEach(el => { el.style.display = 'flex' })
    signUpSection.style.display = 'flex'
    success.style.display = 'none'
    emailInput.value = '';
})