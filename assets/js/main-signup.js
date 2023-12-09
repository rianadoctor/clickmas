function checkPasswordRequirements(password) {
    const requirementsList = document.getElementById('password-requirements').children;

    for (let i = 0; i < requirementsList.length; i++) {
        const requirement = requirementsList[i];
        const isMet = checkRequirement(password, i);

        if (isMet) {
            requirement.classList.remove('list-group-item-danger');
            requirement.classList.add('list-group-item-success');
        } else {
            requirement.classList.remove('list-group-item-success');
            requirement.classList.add('list-group-item-danger');
        }
    }
}

function checkRequirement(password, index) {
    switch (index) {
        case 0:
            return /[A-Z]/.test(password);
        case 1:
            return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
        case 2:
            return /\d/.test(password);
        case 3:
            return password.length >= 8;
        default:
            return false;
    }
}

function checkPasswordMatch(repeatedPassword) {
    const originalPassword = document.getElementById('form3Example4c').value;
    const matchList = document.getElementById('password-match').children;

    const passwordsMatch = originalPassword === repeatedPassword;

    for (let i = 0; i < matchList.length; i++) {
        const matchItem = matchList[i];

        if (passwordsMatch) {
            matchItem.classList.remove('list-group-item-danger');
            matchItem.classList.add('list-group-item-success');
        } else {
            matchItem.classList.remove('list-group-item-success');
            matchItem.classList.add('list-group-item-danger');
        }
    }
}



function updateRegisterButtonState() {
    const nameInput = document.getElementById('form3Example1c');
    const emailInput = document.getElementById('form3Example3c');
    const passwordInput = document.getElementById('form3Example4c');
    const repeatedPasswordInput = document.getElementById('form3Example4cd');
    const termsCheckbox = document.getElementById('form2Example3c');
    const registerButton = document.getElementById('register');

    const isNameValid = nameInput.checkValidity();
    const isEmailValid = emailInput.checkValidity();
    const isPasswordValid = passwordInput.checkValidity();
    const isRepeatedPasswordValid = repeatedPasswordInput.checkValidity();
    const areTermsAccepted = termsCheckbox.checked;

    const isFormValid = isNameValid && isEmailValid && isPasswordValid && isRepeatedPasswordValid && areTermsAccepted;

    registerButton.disabled = !isFormValid;
}


document.getElementById('register').addEventListener('click', async function() {
    if (this.disabled) {
        // Registration button is disabled, do not proceed
        return;
    }
    localStorage.setItem('previousPage', window.location.href);

    window.location.href = "rewards.html";
});




document.getElementById('form3Example1c').addEventListener('input', updateRegisterButtonState);
document.getElementById('form3Example3c').addEventListener('input', updateRegisterButtonState);
document.getElementById('form3Example4c').addEventListener('input', updateRegisterButtonState);
document.getElementById('form3Example4cd').addEventListener('input', updateRegisterButtonState);
document.getElementById('form2Example3c').addEventListener('change', updateRegisterButtonState);