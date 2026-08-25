/* =========================================================
   TRAVELX - ABOUT PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       NAVBAR SHADOW ON SCROLL
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    function handleNavbar() {

        if (!navbar) return;

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbar);

    handleNavbar();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".purpose-card, " +
        ".why-card, " +
        ".service-card, " +
        ".testimonial-card, " +
        ".timeline-item, " +
        ".stats-card, " +
        ".feature-box"
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

    });


    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });


    /* =====================================================
       STATISTICS COUNTER
    ===================================================== */

    const counters = document.querySelectorAll(
        ".stats-card h2"
    );


    function animateCounter(element) {

        const originalText =
            element.textContent.trim();

        const number =
            parseInt(
                originalText.replace(/\D/g, ""),
                10
            );

        if (isNaN(number)) return;


        let suffix = "";

        if (originalText.includes("%")) {
            suffix = "%";
        } else if (originalText.includes("+")) {
            suffix = "+";
        }


        let current = 0;

        const duration = 1200;

        const increment =
            number / (duration / 20);


        const timer = setInterval(function () {

            current += increment;


            if (current >= number) {

                current = number;

                clearInterval(timer);

            }


            element.textContent =
                Math.floor(current) + suffix;

        }, 20);

    }


    const counterObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        animateCounter(entry.target);

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(function (counter) {

        counterObserver.observe(counter);

    });


    /* =====================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

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
        document.querySelector(
            "#mainNavbar"
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
        );

    });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.createElement("button");


    backToTop.innerHTML =
        '<i class="bi bi-arrow-up"></i>';


    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    backToTop.style.position = "fixed";
    backToTop.style.right = "20px";
    backToTop.style.bottom = "20px";
    backToTop.style.width = "42px";
    backToTop.style.height = "42px";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.background = "#24235b";
    backToTop.style.color = "#ffffff";
    backToTop.style.cursor = "pointer";
    backToTop.style.zIndex = "9998";
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
    backToTop.style.transition = "0.3s";


    document.body.appendChild(backToTop);


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.style.opacity = "1";
                backToTop.style.visibility =
                    "visible";

            } else {

                backToTop.style.opacity = "0";
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


    /* =====================================================
       IMAGE ERROR FALLBACK
    ===================================================== */

    document.querySelectorAll(
        "img"
    ).forEach(function (image) {

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

});