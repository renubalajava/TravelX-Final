"use strict";

/* =========================================================
   TRAVELX — CONTACT FORM VALIDATION
========================================================= */

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const sendButton = document.querySelector(".send-btn");


/* =========================================================
   VALIDATION PATTERNS
========================================================= */

const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;

const emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const phonePattern = /^[6-9][0-9]{9}$/;


/* =========================================================
   SHOW ERROR
========================================================= */

function showError(input, message) {

    if (!input) return;

    clearError(input);

    input.classList.add("is-invalid");

    const error = document.createElement("small");

    error.className = "validation-error";

    error.textContent = message;

    input.parentElement.appendChild(error);
}


/* =========================================================
   CLEAR ERROR
========================================================= */

function clearError(input) {

    if (!input) return;

    input.classList.remove("is-invalid");

    const error =
        input.parentElement.querySelector(
            ".validation-error"
        );

    if (error) {
        error.remove();
    }
}


/* =========================================================
   MARK VALID
========================================================= */

function markValid(input) {

    if (!input) return;

    clearError(input);

    input.classList.add("is-valid");
}


/* =========================================================
   CLEAR VALIDATION
========================================================= */

function clearValidation(input) {

    if (!input) return;

    input.classList.remove(
        "is-valid",
        "is-invalid"
    );

    const error =
        input.parentElement.querySelector(
            ".validation-error"
        );

    if (error) {
        error.remove();
    }
}


/* =========================================================
   NAME VALIDATION
========================================================= */

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        showError(
            nameInput,
            "Please enter your full name."
        );

        return false;
    }

    if (name.length < 4) {

        showError(
            nameInput,
            "Name must contain at least 4 characters."
        );

        return false;
    }

    if (!namePattern.test(name)) {

        showError(
            nameInput,
            "Name should contain letters and spaces only."
        );

        return false;
    }

    markValid(nameInput);

    return true;
}


/* =========================================================
   EMAIL VALIDATION
========================================================= */

function validateEmail() {

    const email = emailInput.value.trim();

    if (email === "") {

        showError(
            emailInput,
            "Please enter your email address."
        );

        return false;
    }

    if (!emailPattern.test(email)) {

        showError(
            emailInput,
            "Please enter a valid email address."
        );

        return false;
    }

    markValid(emailInput);

    return true;
}


/* =========================================================
   PHONE VALIDATION
========================================================= */

function validatePhone() {

    const phone = phoneInput.value.trim();

    if (phone === "") {

        showError(
            phoneInput,
            "Please enter your mobile number."
        );

        return false;
    }

    if (!phonePattern.test(phone)) {

        showError(
            phoneInput,
            "Enter a valid 10-digit mobile number."
        );

        return false;
    }

    markValid(phoneInput);

    return true;
}


/* =========================================================
   SUBJECT VALIDATION
========================================================= */

function validateSubject() {

    const subject = subjectInput.value.trim();

    if (subject === "") {

        showError(
            subjectInput,
            "Please enter the subject."
        );

        return false;
    }

    if (subject.length < 5) {

        showError(
            subjectInput,
            "Subject must contain at least 5 characters."
        );

        return false;
    }

    markValid(subjectInput);

    return true;
}


/* =========================================================
   MESSAGE VALIDATION
========================================================= */

function validateMessage() {

    const message = messageInput.value.trim();

    if (message === "") {

        showError(
            messageInput,
            "Please enter your message."
        );

        return false;
    }

    if (message.length < 15) {

        showError(
            messageInput,
            "Message must contain at least 15 characters."
        );

        return false;
    }

    markValid(messageInput);

    return true;
}


/* =========================================================
   REAL-TIME VALIDATION
========================================================= */

nameInput?.addEventListener("blur", validateName);

emailInput?.addEventListener("blur", validateEmail);

phoneInput?.addEventListener("blur", validatePhone);

subjectInput?.addEventListener("blur", validateSubject);

messageInput?.addEventListener("blur", validateMessage);


/* =========================================================
   CLEAR ERROR WHILE TYPING
========================================================= */

[
    nameInput,
    emailInput,
    phoneInput,
    subjectInput,
    messageInput
].forEach(input => {

    input?.addEventListener("input", function () {

        clearValidation(this);

        if (successMessage) {
            successMessage.style.display = "none";
        }

    });

});


/* =========================================================
   PHONE — ONLY NUMBERS
========================================================= */

phoneInput?.addEventListener("input", function () {

    this.value = this.value
        .replace(/\D/g, "")
        .slice(0, 10);

});


/* =========================================================
   FORM SUBMIT
========================================================= */

form?.addEventListener("submit", function (event) {

    event.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validPhone = validatePhone();
    const validSubject = validateSubject();
    const validMessage = validateMessage();


    /* Stop submission if validation fails */

    if (
        !validName ||
        !validEmail ||
        !validPhone ||
        !validSubject ||
        !validMessage
    ) {

        const firstInvalid =
            form.querySelector(".is-invalid");

        firstInvalid?.focus();

        return;
    }


    /* =====================================================
       LOADING STATE
    ===================================================== */

    if (sendButton) {

        sendButton.disabled = true;

        sendButton.innerHTML = `
            <span
                class="spinner-border spinner-border-sm"
                aria-hidden="true">
            </span>
            Sending...
        `;

    }


    /* =====================================================
       SIMULATED SUBMISSION
    ===================================================== */

    setTimeout(function () {

        if (successMessage) {

            successMessage.innerHTML = `
                <i class="bi bi-check-circle-fill me-2"></i>
                Thank you! Your message has been sent successfully.
            `;

            successMessage.style.display = "flex";

        }


        form.reset();


        [
            nameInput,
            emailInput,
            phoneInput,
            subjectInput,
            messageInput
        ].forEach(clearValidation);


        if (sendButton) {

            sendButton.disabled = false;

            sendButton.innerHTML = `
                <i class="bi bi-send-fill"></i>
                <span>Send Message</span>
            `;

        }

    }, 1500);

});


/* =========================================================
   NAVBAR SHADOW
========================================================= */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".custom-navbar");

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 12px 35px rgba(23,27,58,.12)";

    } else {

        navbar.style.boxShadow =
            "0 8px 25px rgba(23,27,58,.06)";

    }

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


/* =========================================================
   CONTACT CARD ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".contact-item, .contact-form-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(element => {

        observer.observe(element);

    });

}


console.log(
    "TravelX Contact JavaScript loaded successfully."
);