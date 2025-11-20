document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        validateLoginForm();
    });

    function validateLoginForm() {
        let isValid = true;

        // Email validation
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }

        // Password validation
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            passwordError.style.display = 'block';
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.textContent = '';
            passwordError.style.display = 'none';
        }

        if (isValid) {
            // If all validations pass, you can submit the form
            // For a real application, you would send this data to a server
            alert('Login successful! (Simulated)');
            loginForm.reset(); // Clear the form
            // Optionally redirect or perform further actions
        }
    }

    function isValidEmail(email) {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Optional: Real-time validation as user types
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() !== '' && isValidEmail(emailInput.value.trim())) {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.trim() !== '' && passwordInput.value.trim().length >= 6) {
            passwordError.textContent = '';
            passwordError.style.display = 'none';
        }
    });
});