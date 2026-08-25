/* =========================================================
   TRAVELX - HOME PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.querySelector(".custom-navbar");

    function handleNavbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".service-card, " +
        ".destination-card, " +
        ".why-card, " +
        ".testimonial-card"
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

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


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* =====================================================
       NEWSLETTER FORM
    ===================================================== */

    const newsletterForm =
        document.getElementById("newsletterForm");

    const newsletterEmail =
        document.getElementById("newsletterEmail");

    const newsletterMessage =
        document.getElementById("newsletterMessage");


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const email =
                    newsletterEmail.value.trim();


                if (email === "") {

                    showNewsletterMessage(
                        "Please enter your email address.",
                        "error"
                    );

                    return;
                }


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(email)) {

                    showNewsletterMessage(
                        "Please enter a valid email address.",
                        "error"
                    );

                    return;
                }


                showNewsletterMessage(
                    "Thank you! You are successfully subscribed.",
                    "success"
                );


                newsletterForm.reset();

            }
        );

    }


    function showNewsletterMessage(
        message,
        type
    ) {

        if (!newsletterMessage) return;


        newsletterMessage.textContent =
            message;


        if (type === "success") {

            newsletterMessage.style.color =
                "#7CFFB2";

        } else {

            newsletterMessage.style.color =
                "#FFD1D1";

        }

    }


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                this.style.background =
                    "#eef1f6";

                this.style.objectFit =
                    "cover";

            }
        );

    });


    /* =====================================================
       DESTINATION CARD HOVER ACCESSIBILITY
    ===================================================== */

    const destinationCards =
        document.querySelectorAll(
            ".destination-card"
        );


    destinationCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                this.classList.add("active-card");

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                this.classList.remove("active-card");

            }
        );

    });


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    /* =====================================================
       MOBILE NAVBAR CLOSE
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".navbar-nav .nav-link"
        );


    const navbarCollapse =
        document.getElementById(
            "mainNavbar"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (
                    window.innerWidth < 992 &&
                    navbarCollapse &&
                    navbarCollapse.classList.contains("show")
                ) {

                    if (
                        typeof bootstrap !==
                        "undefined"
                    ) {

                        const collapse =
                            bootstrap.Collapse
                                .getInstance(
                                    navbarCollapse
                                );


                        if (collapse) {
                            collapse.hide();
                        }

                    }

                }

            }
        );

    });


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    const backToTop =
        document.createElement("button");


    backToTop.type = "button";

    backToTop.innerHTML =
        '<i class="bi bi-arrow-up"></i>';

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    backToTop.style.position =
        "fixed";

    backToTop.style.right =
        "20px";

    backToTop.style.bottom =
        "20px";

    backToTop.style.width =
        "42px";

    backToTop.style.height =
        "42px";

    backToTop.style.border =
        "none";

    backToTop.style.borderRadius =
        "50%";

    backToTop.style.background =
        "#1E1D4C";

    backToTop.style.color =
        "#FFFFFF";

    backToTop.style.cursor =
        "pointer";

    backToTop.style.zIndex =
        "9998";

    backToTop.style.opacity =
        "0";

    backToTop.style.visibility =
        "hidden";

    backToTop.style.transition =
        "0.3s ease";

    backToTop.style.boxShadow =
        "0 8px 20px rgba(0,0,0,0.15)";


    document.body.appendChild(
        backToTop
    );


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.style.opacity =
                    "1";

                backToTop.style.visibility =
                    "visible";

            } else {

                backToTop.style.opacity =
                    "0";

                backToTop.style.visibility =
                    "hidden";

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

});