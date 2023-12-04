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
