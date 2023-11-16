document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('waitlist-form').addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });

    function submitForm() {
        var email = document.getElementById('email').value;
        if (validateEmail(email)) {
            document.getElementById('confirmation-message').innerHTML = "Thank you! We'll keep you informed.";
            clearForm();
        } else {
            document.getElementById('confirmation-message').innerHTML = "Please enter a valid email address.";
        }
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function clearForm() {
        document.getElementById('email').value = '';
    }
});
