/* =========================================================
   TRAVELX - COMMON COMPONENT LOADER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       LOAD NAVBAR
    ================================= */

    const navbarContainer =
        document.getElementById("navbar");

    if (navbarContainer) {

        fetch("components/navbar.html")

            .then(function (response) {

                if (!response.ok) {
                    throw new Error(
                        "Navbar not found"
                    );
                }

                return response.text();

            })

            .then(function (data) {

                navbarContainer.innerHTML = data;

                setActiveNavigation();

                setupNavbar();

            })

            .catch(function (error) {

                console.error(
                    "Navbar loading error:",
                    error
                );

            });

    }


    /* ================================
       LOAD FOOTER
    ================================= */

    const footerContainer =
        document.getElementById("footer");

    if (footerContainer) {

        fetch("components/footer.html")

            .then(function (response) {

                if (!response.ok) {
                    throw new Error(
                        "Footer not found"
                    );
                }

                return response.text();

            })

            .then(function (data) {

                footerContainer.innerHTML = data;

            })

            .catch(function (error) {

                console.error(
                    "Footer loading error:",
                    error
                );

            });

    }


    /* ================================
       ACTIVE NAVIGATION
    ================================= */

    function setActiveNavigation() {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();

        const navLinks =
            document.querySelectorAll(
                "#navbar .nav-link"
            );

        navLinks.forEach(function (link) {

            const href =
                link.getAttribute("href");

            if (!href) return;

            const linkPage =
                href
                    .split("/")
                    .pop()
                    .toLowerCase();

            if (
                linkPage === currentPage ||
                (
                    currentPage === "" &&
                    linkPage === "index.html"
                )
            ) {

                link.classList.add("active");

            }

        });

    }


    /* ================================
       NAVBAR SCROLL
    ================================= */

    function setupNavbar() {

        const navbar =
            document.querySelector(
                ".custom-navbar"
            );

        if (!navbar) return;

        function handleScroll() {

            if (window.scrollY > 40) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }

        window.addEventListener(
            "scroll",
            handleScroll
        );

        handleScroll();

    }

});