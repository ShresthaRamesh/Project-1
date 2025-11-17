document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const regEmailInput = document.getElementById('regEmail');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const regPasswordInput = document.getElementById('regPassword');
    const termsCheckbox = document.getElementById('termsCheckbox');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const regEmailError = document.getElementById('regEmailError');
    const phoneNumberError = document.getElementById('phoneNumberError');
    const regPasswordError = document.getElementById('regPasswordError');
    const termsError = document.getElementById('termsError');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        validateRegisterForm();
    });

    function validateRegisterForm() {
        let isValid = true;

        // First Name validation
        if (firstNameInput.value.trim() === '') {
            firstNameError.textContent = 'First name is required.';
            firstNameError.style.display = 'block';
            isValid = false;
        } else {
            firstNameError.textContent = '';
            firstNameError.style.display = 'none';
        }

        // Last Name validation
        if (lastNameInput.value.trim() === '') {
            lastNameError.textContent = 'Last name is required.';
            lastNameError.style.display = 'block';
            isValid = false;
        } else {
            lastNameError.textContent = '';
            lastNameError.style.display = 'none';
        }

        // Email validation
        if (regEmailInput.value.trim() === '') {
            regEmailError.textContent = 'Email is required.';
            regEmailError.style.display = 'block';
            isValid = false;
        } else if (!isValidEmail(regEmailInput.value.trim())) {
            regEmailError.textContent = 'Please enter a valid email address.';
            regEmailError.style.display = 'block';
            isValid = false;
        } else {
            regEmailError.textContent = '';
            regEmailError.style.display = 'none';
        }

        // Phone Number validation
        if (phoneNumberInput.value.trim() === '') {
            phoneNumberError.textContent = 'Phone number is required.';
            phoneNumberError.style.display = 'block';
            isValid = false;
        } else if (!isValidPhoneNumber(phoneNumberInput.value.trim())) {
            phoneNumberError.textContent = 'Please enter a valid 10-digit phone number.';
            phoneNumberError.style.display = 'block';
            isValid = false;
        } else {
            phoneNumberError.textContent = '';
            phoneNumberError.style.display = 'none';
        }

        // Password validation
        if (regPasswordInput.value.trim() === '') {
            regPasswordError.textContent = 'Password is required.';
            regPasswordError.style.display = 'block';
            isValid = false;
        } else if (regPasswordInput.value.trim().length < 8) {
            regPasswordError.textContent = 'Password must be at least 8 characters long.';
            regPasswordError.style.display = 'block';
            isValid = false;
        } else if (!/[A-Z]/.test(regPasswordInput.value.trim())) {
            regPasswordError.textContent = 'Password must contain at least one uppercase letter.';
            regPasswordError.style.display = 'block';
            isValid = false;
        } else if (!/[a-z]/.test(regPasswordInput.value.trim())) {
            regPasswordError.textContent = 'Password must contain at least one lowercase letter.';
            regPasswordError.style.display = 'block';
            isValid = false;
        } else if (!/[0-9]/.test(regPasswordInput.value.trim())) {
            regPasswordError.textContent = 'Password must contain at least one digit.';
            regPasswordError.style.display = 'block';
            isValid = false;
        } else if (!/[!@#$%^&*]/.test(regPasswordInput.value.trim())) {
            regPasswordError.textContent = 'Password must contain at least one special character (!@#$%^&*).';
            regPasswordError.style.display = 'block';
            isValid = false;
        }
         else {
            regPasswordError.textContent = '';
            regPasswordError.style.display = 'none';
        }

        // Terms and conditions validation
        if (!termsCheckbox.checked) {
            termsError.textContent = 'You must agree to the terms and conditions.';
            termsError.style.display = 'block';
            isValid = false;
        } else {
            termsError.textContent = '';
            termsError.style.display = 'none';
        }

        if (isValid) {
            // If all validations pass, you can submit the form
            alert('Registration successful! (Simulated)');
            registerForm.reset(); // Clear the form
            // Optionally redirect to login page or dashboard
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/; // Assumes 10-digit phone number
        return phoneRegex.test(phoneNumber);
    }

    // Optional: Real-time validation as user types/interacts
    firstNameInput.addEventListener('input', () => {
        if (firstNameInput.value.trim() !== '') {
            firstNameError.textContent = '';
            firstNameError.style.display = 'none';
        }
    });
    lastNameInput.addEventListener('input', () => {
        if (lastNameInput.value.trim() !== '') {
            lastNameError.textContent = '';
            lastNameError.style.display = 'none';
        }
    });
    regEmailInput.addEventListener('input', () => {
        if (regEmailInput.value.trim() !== '' && isValidEmail(regEmailInput.value.trim())) {
            regEmailError.textContent = '';
            regEmailError.style.display = 'none';
        }
    });
    phoneNumberInput.addEventListener('input', () => {
        if (phoneNumberInput.value.trim() !== '' && isValidPhoneNumber(phoneNumberInput.value.trim())) {
            phoneNumberError.textContent = '';
            phoneNumberError.style.display = 'none';
        }
    });
    regPasswordInput.addEventListener('input', () => {
        // More detailed real-time feedback for password could be implemented here
        if (regPasswordInput.value.trim().length >= 8 &&
            /[A-Z]/.test(regPasswordInput.value.trim()) &&
            /[a-z]/.test(regPasswordInput.value.trim()) &&
            /[0-9]/.test(regPasswordInput.value.trim()) &&
            /[!@#$%^&*]/.test(regPasswordInput.value.trim())) {
            regPasswordError.textContent = '';
            regPasswordError.style.display = 'none';
        }
    });
    termsCheckbox.addEventListener('change', () => {
        if (termsCheckbox.checked) {
            termsError.textContent = '';
            termsError.style.display = 'none';
        }
    });
});