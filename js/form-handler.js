// Submits the homepage inquiry form and the contact page form to Formspree
// via fetch, keeping visitors on the page instead of redirecting them.
(function () {
    "use strict";

    var SUCCESS_MESSAGE =
        "Thank you — your message has been sent. Our team will get back to you shortly.";
    var ERROR_MESSAGE =
        "Sorry, something went wrong sending your message. Please try again.";

    function showStatus(statusEl, message, type) {
        if (!statusEl) {
            return;
        }

        statusEl.textContent = message;
        statusEl.classList.remove("form-status--success", "form-status--error");
        statusEl.classList.add("is-visible", "form-status--" + type);
    }

    function extractErrorMessage(data) {
        if (data && Array.isArray(data.errors) && data.errors.length) {
            return data.errors.map(function (err) {
                return err.message;
            }).join(", ");
        }
        return null;
    }

    function bindForm(form) {
        var statusEl = form.querySelector(".form-status");
        var submitButton = form.querySelector("button[type='submit']");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (statusEl) {
                statusEl.classList.remove("is-visible", "form-status--success", "form-status--error");
                statusEl.textContent = "";
            }

            if (submitButton) {
                submitButton.disabled = true;
            }

            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            })
                .then(function (response) {
                    if (response.ok) {
                        form.reset();
                        showStatus(statusEl, SUCCESS_MESSAGE, "success");
                        return;
                    }

                    return response.json().then(function (data) {
                        showStatus(statusEl, extractErrorMessage(data) || ERROR_MESSAGE, "error");
                    });
                })
                .catch(function () {
                    showStatus(statusEl, ERROR_MESSAGE, "error");
                })
                .finally(function () {
                    if (submitButton) {
                        submitButton.disabled = false;
                    }
                });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        var forms = document.querySelectorAll(".inquiry-form, .contact-form");
        forms.forEach(bindForm);
    });
})();
