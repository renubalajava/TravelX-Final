/* =========================================
   TRAVELX GALLERY DATA
========================================= */

const galleryData = [

    {
        image: "images/gallery1.jpg",
        title: "Lake & Mountains",
        location: "Canada",
        description:
            "Experience breathtaking landscapes, crystal-clear waters and majestic mountains. A perfect destination for nature lovers and adventure seekers.",
        bestTime: "May - September",
        temperature: "10°C - 22°C",
        activities: "Hiking, Photography, Boating",
        experience: "Adventure & Nature"
    },

    {
        image: "images/gallery2.jpg",
        title: "Tropical Paradise",
        location: "Maldives",
        description:
            "Relax beside turquoise waters and beautiful beaches while enjoying a peaceful tropical escape filled with unforgettable moments.",
        bestTime: "November - April",
        temperature: "25°C - 31°C",
        activities: "Swimming, Diving, Snorkeling",
        experience: "Beach & Relaxation"
    },

    {
        image: "images/gallery3.jpg",
        title: "City Escape",
        location: "Dubai, UAE",
        description:
            "Discover modern architecture, luxury experiences and exciting attractions in one of the world's most vibrant travel destinations.",
        bestTime: "November - March",
        temperature: "18°C - 30°C",
        activities: "Shopping, Sightseeing, Dining",
        experience: "Luxury & Adventure"
    },

    {
        image: "images/gallery4.jpg",
        title: "Island Adventure",
        location: "Bali, Indonesia",
        description:
            "Explore beautiful beaches, peaceful temples and lush landscapes while experiencing the unique culture of Bali.",
        bestTime: "April - October",
        temperature: "24°C - 30°C",
        activities: "Surfing, Hiking, Culture",
        experience: "Island & Culture"
    },

    {
        image: "images/gallery5.jpg",
        title: "Mountain Escape",
        location: "Switzerland",
        description:
            "Enjoy spectacular alpine scenery, charming villages and peaceful mountain landscapes perfect for an unforgettable holiday.",
        bestTime: "June - September",
        temperature: "8°C - 24°C",
        activities: "Hiking, Skiing, Photography",
        experience: "Mountains & Nature"
    },

    {
        image: "images/gallery6.jpg",
        title: "Luxury Escape",
        location: "Paris, France",
        description:
            "Experience timeless architecture, romantic streets, world-class cuisine and unforgettable moments in the heart of Paris.",
        bestTime: "April - June",
        temperature: "12°C - 25°C",
        activities: "Sightseeing, Dining, Shopping",
        experience: "Luxury & Culture"
    },

    {
        image: "images/gallery7.jpg",
        title: "Tropical Journey",
        location: "Kerala, India",
        description:
            "Discover peaceful backwaters, tropical greenery and traditional experiences in one of India's most beautiful destinations.",
        bestTime: "October - February",
        temperature: "22°C - 30°C",
        activities: "Boating, Nature, Photography",
        experience: "Nature & Relaxation"
    },

    {
        image: "images/gallery8.jpg",
        title: "Unforgettable Journey",
        location: "Paris, France",
        description:
            "Create unforgettable memories while exploring iconic landmarks, beautiful streets and the timeless charm of Paris.",
        bestTime: "April - October",
        temperature: "12°C - 26°C",
        activities: "Photography, Culture, Sightseeing",
        experience: "City & Culture"
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const galleryCards =
    document.querySelectorAll(".gallery-card");

const galleryModal =
    document.getElementById("galleryModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalLocation =
    document.getElementById("modalLocation");

const modalDescription =
    document.getElementById("modalDescription");

const modalBestTime =
    document.getElementById("modalBestTime");

const modalTemperature =
    document.getElementById("modalTemperature");

const modalActivities =
    document.getElementById("modalActivities");

const modalExperience =
    document.getElementById("modalExperience");

const modalClose =
    document.getElementById("modalClose");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const modalDots =
    document.getElementById("modalDots");

const modalBackdrop =
    document.querySelector(".modal-backdrop-custom");


let currentIndex = 0;


/* =========================================
   UPDATE GALLERY DETAILS
========================================= */

function updateGallery() {

    const item =
        galleryData[currentIndex];

    if (!item) {
        return;
    }

    modalImage.src =
        item.image;

    modalImage.alt =
        item.title;

    modalTitle.textContent =
        item.title;

    modalLocation.textContent =
        item.location;

    modalDescription.textContent =
        item.description;

    modalBestTime.textContent =
        item.bestTime;

    modalTemperature.textContent =
        item.temperature;

    modalActivities.textContent =
        item.activities;

    modalExperience.textContent =
        item.experience;

    updateDots();
}


/* =========================================
   OPEN GALLERY MODAL
========================================= */

function openGallery(index) {

    if (
        index < 0 ||
        index >= galleryData.length
    ) {
        return;
    }

    currentIndex = index;

    updateGallery();

    galleryModal.classList.add("show");

    galleryModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open-custom"
    );
}


/* =========================================
   CLOSE GALLERY MODAL
========================================= */

function closeGallery() {

    galleryModal.classList.remove("show");

    galleryModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open-custom"
    );
}


/* =========================================
   NEXT IMAGE
========================================= */

function showNext() {

    currentIndex =
        (currentIndex + 1) %
        galleryData.length;

    updateGallery();
}


/* =========================================
   PREVIOUS IMAGE
========================================= */

function showPrevious() {

    currentIndex =
        (currentIndex - 1 +
        galleryData.length) %
        galleryData.length;

    updateGallery();
}


/* =========================================
   CREATE / UPDATE DOTS
========================================= */

function updateDots() {

    modalDots.innerHTML = "";

    galleryData.forEach(
        function (_, index) {

            const dot =
                document.createElement("span");

            dot.className =
                "modal-dot";

            if (index === currentIndex) {

                dot.classList.add("active");

            }

            dot.setAttribute(
                "aria-label",
                `Open gallery image ${index + 1}`
            );

            dot.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    currentIndex = index;

                    updateGallery();

                }
            );

            modalDots.appendChild(dot);

        }
    );
}


/* =========================================
   GALLERY CARD EVENTS
========================================= */

galleryCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const index =
                    Number(
                        card.dataset.index
                    );

                openGallery(index);

            }
        );

        /* Keyboard accessibility */

        card.setAttribute(
            "tabindex",
            "0"
        );

        card.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    const index =
                        Number(
                            card.dataset.index
                        );

                    openGallery(index);

                }

            }
        );

    }
);


/* =========================================
   BUTTON EVENTS
========================================= */

modalClose.addEventListener(
    "click",
    closeGallery
);

prevBtn.addEventListener(
    "click",
    showPrevious
);

nextBtn.addEventListener(
    "click",
    showNext
);


/* =========================================
   BACKDROP CLICK
========================================= */

modalBackdrop.addEventListener(
    "click",
    closeGallery
);


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !galleryModal.classList.contains(
                "show"
            )
        ) {
            return;
        }


        /* ESC = CLOSE */

        if (event.key === "Escape") {

            closeGallery();

        }


        /* RIGHT ARROW = NEXT */

        else if (
            event.key === "ArrowRight"
        ) {

            showNext();

        }


        /* LEFT ARROW = PREVIOUS */

        else if (
            event.key === "ArrowLeft"
        ) {

            showPrevious();

        }

    }
);


/* =========================================
   TOUCH SWIPE SUPPORT
========================================= */

let touchStartX = 0;
let touchEndX = 0;

const modalImageWrapper =
    document.querySelector(
        ".modal-image-wrapper"
    );


modalImageWrapper.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


modalImageWrapper.addEventListener(
    "touchend",
    function (event) {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    { passive: true }
);


function handleSwipe() {

    const swipeDistance =
        touchEndX - touchStartX;


    if (
        Math.abs(swipeDistance) < 50
    ) {
        return;
    }


    if (swipeDistance < 0) {

        showNext();

    } else {

        showPrevious();

    }

}


/* =========================================
   INITIAL STATE
========================================= */

galleryModal.setAttribute(
    "aria-hidden",
    "true"
);