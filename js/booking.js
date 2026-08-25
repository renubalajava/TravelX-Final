/* =========================================
   TRAVELX - BOOKING FORM VALIDATION
   Professional Client-Side Validation
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    if (!form) {
        console.error("Booking form not found.");
        return;
    }

    /* =========================================
       INPUT ELEMENTS
    ========================================= */

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const destination = document.getElementById("destination");
    const travelDate = document.getElementById("travelDate");
    const travelers = document.getElementById("travelers");
    const budget = document.getElementById("budget");
    const specialReq = document.getElementById("specialReq");

    /* =========================================
       REGULAR EXPRESSIONS
    ========================================= */

    const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const phoneRegex =
        /^[6-9]\d{9}$/;

    /* =========================================
       SET MINIMUM TRAVEL DATE
    ========================================= */

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const todayString = `${year}-${month}-${day}`;

    if (travelDate) {
        travelDate.min = todayString;
    }

    /* =========================================
       ERROR MESSAGE
    ========================================= */

    function showError(input, message) {

        clearError(input);

        input.classList.add("is-invalid");

        const error = document.createElement("div");

        error.className = "booking-error";

        error.textContent = message;

        input.parentElement.appendChild(error);
    }

    /* =========================================
       SUCCESS FIELD STATE
    ========================================= */

    function showValid(input) {

        clearError(input);

        input.classList.remove("is-invalid");

        input.classList.add("is-valid");
    }

    /* =========================================
       CLEAR ERROR
    ========================================= */

    function clearError(input) {

        if (!input) {
            return;
        }

        input.classList.remove("is-invalid");
        input.classList.remove("is-valid");

        const parent = input.parentElement;

        const error = parent.querySelector(".booking-error");

        if (error) {
            error.remove();
        }
    }

    /* =========================================
       VALIDATE FULL NAME
    ========================================= */

    function validateName() {

        const value = fullName.value.trim();

        if (value === "") {

            showError(
                fullName,
                "Please enter your full name."
            );

            return false;
        }

        if (value.length < 4) {

            showError(
                fullName,
                "Name must contain at least 4 characters."
            );

            return false;
        }

        if (!nameRegex.test(value)) {

            showError(
                fullName,
                "Please enter a valid full name."
            );

            return false;
        }

        showValid(fullName);

        return true;
    }

    /* =========================================
       VALIDATE EMAIL
    ========================================= */

    function validateEmail() {

        const value = email.value.trim();

        if (value === "") {

            showError(
                email,
                "Please enter your email address."
            );

            return false;
        }

        if (!emailRegex.test(value)) {

            showError(
                email,
                "Please enter a valid email address."
            );

            return false;
        }

        showValid(email);

        return true;
    }

    /* =========================================
       VALIDATE PHONE
    ========================================= */

    function validatePhone() {

        const value = phone.value.trim();

        if (value === "") {

            showError(
                phone,
                "Please enter your mobile number."
            );

            return false;
        }

        if (!phoneRegex.test(value)) {

            showError(
                phone,
                "Enter a valid 10-digit Indian mobile number."
            );

            return false;
        }

        showValid(phone);

        return true;
    }

    /* =========================================
       VALIDATE DESTINATION
    ========================================= */

    function validateDestination() {

        if (
            !destination.value ||
            destination.value === ""
        ) {

            showError(
                destination,
                "Please select your destination."
            );

            return false;
        }

        showValid(destination);

        return true;
    }

    /* =========================================
       VALIDATE TRAVEL DATE
    ========================================= */

    function validateTravelDate() {

        const value = travelDate.value;

        if (value === "") {

            showError(
                travelDate,
                "Please select your travel date."
            );

            return false;
        }

        const selectedDate = new Date(value);
        const currentDate = new Date();

        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {

            showError(
                travelDate,
                "Travel date cannot be in the past."
            );

            return false;
        }

        showValid(travelDate);

        return true;
    }

    /* =========================================
       VALIDATE TRAVELERS
    ========================================= */

    function validateTravelers() {

        const value = Number(travelers.value);

        if (
            travelers.value === "" ||
            value < 1
        ) {

            showError(
                travelers,
                "Please enter at least 1 traveler."
            );

            return false;
        }

        if (value > 50) {

            showError(
                travelers,
                "Maximum 50 travelers are allowed."
            );

            return false;
        }

        showValid(travelers);

        return true;
    }

    /* =========================================
       VALIDATE BUDGET
    ========================================= */

    function validateBudget() {

        const value = Number(budget.value);

        /*
           Budget is optional.
           Validate only when user enters it.
        */

        if (budget.value === "") {

            clearError(budget);

            return true;
        }

        if (value <= 0) {

            showError(
                budget,
                "Budget must be greater than ₹0."
            );

            return false;
        }

        if (value > 100000000) {

            showError(
                budget,
                "Please enter a realistic budget amount."
            );

            return false;
        }

        showValid(budget);

        return true;
    }

    /* =========================================
       VALIDATE SPECIAL REQUEST
    ========================================= */

    function validateSpecialRequest() {

        const value = specialReq.value.trim();

        /*
           Special request is optional.
        */

        if (value === "") {

            clearError(specialReq);

            return true;
        }

        if (value.length < 10) {

            showError(
                specialReq,
                "Special request should contain at least 10 characters."
            );

            return false;
        }

        if (value.length > 500) {

            showError(
                specialReq,
                "Special request cannot exceed 500 characters."
            );

            return false;
        }

        showValid(specialReq);

        return true;
    }

    /* =========================================
       LIVE VALIDATION
    ========================================= */

    fullName.addEventListener("blur", validateName);

    email.addEventListener("blur", validateEmail);

    phone.addEventListener("blur", validatePhone);

    destination.addEventListener(
        "change",
        validateDestination
    );

    travelDate.addEventListener(
        "change",
        validateTravelDate
    );

    travelers.addEventListener(
        "input",
        validateTravelers
    );

    budget.addEventListener(
        "input",
        validateBudget
    );

    specialReq.addEventListener(
        "blur",
        validateSpecialRequest
    );

    /* =========================================
       REMOVE ERROR WHILE TYPING
    ========================================= */

    fullName.addEventListener("input", function () {
        if (this.value.trim() !== "") {
            clearError(this);
        }
    });

    email.addEventListener("input", function () {
        if (this.value.trim() !== "") {
            clearError(this);
        }
    });

    phone.addEventListener("input", function () {

        this.value = this.value
            .replace(/\D/g, "")
            .slice(0, 10);

        clearError(this);
    });

    /* =========================================
       FORM SUBMIT
    ========================================= */

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameValid = validateName();
        const emailValid = validateEmail();
        const phoneValid = validatePhone();
        const destinationValid = validateDestination();
        const dateValid = validateTravelDate();
        const travelersValid = validateTravelers();
        const budgetValid = validateBudget();
        const requestValid = validateSpecialRequest();

        const isFormValid =
            nameValid &&
            emailValid &&
            phoneValid &&
            destinationValid &&
            dateValid &&
            travelersValid &&
            budgetValid &&
            requestValid;

        if (!isFormValid) {

            const firstError =
                form.querySelector(".is-invalid");

            if (firstError) {

                firstError.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                firstError.focus();
            }

            return;
        }

        /* =====================================
           SUBMIT BUTTON
        ===================================== */

        const submitButton =
            form.querySelector(".submit-btn");

        const originalButton =
            submitButton.innerHTML;

        submitButton.disabled = true;

        submitButton.innerHTML = `
            <span
                class="spinner-border spinner-border-sm me-2"
                aria-hidden="true">
            </span>
            Processing Booking...
        `;

        /* =====================================
           SIMULATE BOOKING
        ===================================== */

        setTimeout(function () {

            submitButton.disabled = false;

            submitButton.innerHTML = originalButton;

            showSuccessMessage();

            form.reset();

            /*
               Remove Bootstrap validation states
            */

            const inputs =
                form.querySelectorAll(
                    ".is-valid, .is-invalid"
                );

            inputs.forEach(function (input) {

                input.classList.remove("is-valid");
                input.classList.remove("is-invalid");

            });

        }, 1800);

    });

    /* =========================================
       SUCCESS MESSAGE
    ========================================= */

    function showSuccessMessage() {

        let successMessage =
            document.getElementById("bookingSuccess");

        if (!successMessage) {

            successMessage =
                document.createElement("div");

            successMessage.id =
                "bookingSuccess";

            successMessage.className =
                "booking-success";

            form.appendChild(successMessage);
        }

        successMessage.innerHTML = `
            <div class="success-icon">
                <i class="bi bi-check-circle-fill"></i>
            </div>

            <div>
                <strong>
                    Booking Request Submitted!
                </strong>

                <p>
                    Thank you for choosing TravelX.
                    Our travel team will contact you soon.
                </p>
            </div>
        `;

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(function () {

            successMessage.remove();

        }, 6000);
    }

});