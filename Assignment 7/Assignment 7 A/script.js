$(document).ready(() => {
    const regExEmail = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
    const regExUsername = /^[A-Za-z0-9]{5,}$/; // Allows letters and numbers, minimum length of 5
    const regExPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let pass;
    let isEmailValid = false;
    let isUsernameValid = false;
    let isPasswordValid = false;
    let isConfirmPasswordValid = false;

    $('input[type="text"], input[type="password"], input[type="email"]').on('input', (event) => {
        const inputName = $(event.target).attr("name");
        const value = $(event.target).val();
        if (inputName === "password" || inputName === "confirmPassword") {
            // When the "password" or "confirmPassword" field changes, validate both fields.
            printPasswordValues(
                $('input[name="password"]').val(),
                $('input[name="confirmPassword"]').val()
            );
        } else {
            // For other fields, validate individually.
            printValue(inputName, value);
        }
    });

    const printValue = (inputName, value) => {
        if (inputName === "email") {
            if (!value.trim().match(regExEmail)) {
                $('#error_email').show();
                isEmailValid = false;
            } else {
                $('#error_email').hide();
                isEmailValid = true;
            }
        }
        if (inputName === "username") {
            if (!value.match(regExUsername)) {
                $('#login-username-email-error').show();
                isUsernameValid = false;
            } else {
                $('#login-username-email-error').hide();
                isUsernameValid = true;
            }
        }
        updateSubmitButtonState();
    };

    const printPasswordValues = (passwordValue, confirmPasswordValue) => {
        if (!passwordValue.trim().match(regExPassword)) {
            pass = passwordValue;
            $('#signup-password-error').show();
            isPasswordValid = false;
        } else {
            $('#signup-password-error').hide();
            isPasswordValid = true;
        }

        if (confirmPasswordValue !== passwordValue) {
            $('#signup-confirm-password-error').show();
            isConfirmPasswordValid = false;
        } else {
            $('#signup-confirm-password-error').hide();
            isConfirmPasswordValid = true;
        }

        updateSubmitButtonState();
    };

    const updateSubmitButtonState = () => {
        if (!isEmailValid || !isUsernameValid || !isPasswordValid || !isConfirmPasswordValid) {
            $('#loginButton').prop('disabled', true);
        } else {
            $('#loginButton').prop('disabled', false);
        }
    };

    $('form[name="myform"]').submit((event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Redirect to the landing page
        const username = $('input[name="username"]').val();

        // Redirect to the landing page with the username as a query parameter
        window.location.href = 'landingpage.html?username=' + encodeURIComponent(username);
    });
});
