    document.addEventListener("DOMContentLoaded", () => {

        /* =====================================================
        DESTINATION DATA
        ===================================================== */

        const destinations = [
            {
                name: "Paris, France",
                image: "images/destination1.jpg",
                category: "city",
                rating: "4.8",
                description:
                    "Experience the romance, art and culture of Paris. Explore the Eiffel Tower, Louvre Museum and beautiful French streets.",
                bestTime: "April - June",
                temperature: "12°C - 24°C",
                activities: "Eiffel Tower, Louvre, Seine Cruise",
                price: 1299,
                days: "5 Days",
                nights: "4 Nights",
                type: "City Tour"
            },

            {
                name: "Maldives",
                image: "images/destination2.jpg",
                category: "island beach",
                rating: "4.9",
                description:
                    "Relax on beautiful white-sand beaches and enjoy crystal-clear waters in the Maldives.",
                bestTime: "November - April",
                temperature: "25°C - 30°C",
                activities: "Beach, Diving, Snorkeling",
                price: 1499,
                days: "5 Days",
                nights: "4 Nights",
                type: "Beach Escape"
            },

            {
                name: "Dubai, UAE",
                image: "images/destination3.jpg",
                category: "city",
                rating: "4.7",
                description:
                    "Discover luxury shopping, modern architecture, desert adventures and unforgettable experiences in Dubai.",
                bestTime: "November - March",
                temperature: "20°C - 30°C",
                activities: "Burj Khalifa, Desert Safari, Shopping",
                price: 1199,
                days: "4 Days",
                nights: "3 Nights",
                type: "Luxury Tour"
            },

            {
                name: "Switzerland",
                image: "images/gallery4.jpg",
                category: "mountain",
                rating: "4.9",
                description:
                    "Enjoy breathtaking Alps, peaceful lakes, scenic trains and charming Swiss villages.",
                bestTime: "May - September",
                temperature: "10°C - 25°C",
                activities: "Alps, Scenic Train, Lakes",
                price: 1899,
                days: "7 Days",
                nights: "6 Nights",
                type: "Mountain Escape"
            },

            {
                name: "Bali, Indonesia",
                image: "images/gallery5.jpg",
                category: "island beach",
                rating: "4.8",
                description:
                    "Explore tropical beaches, ancient temples, rice terraces and vibrant Balinese culture.",
                bestTime: "April - October",
                temperature: "24°C - 30°C",
                activities: "Temples, Beaches, Rice Terraces",
                price: 999,
                days: "5 Days",
                nights: "4 Nights",
                type: "Island Escape"
            },

            {
                name: "Tokyo, Japan",
                image: "images/gallery6.jpg",
                category: "city",
                rating: "4.8",
                description:
                    "Experience the perfect blend of traditional Japanese culture and futuristic city life.",
                bestTime: "March - May",
                temperature: "10°C - 25°C",
                activities: "Tokyo Tower, Temples, Shopping",
                price: 1599,
                days: "6 Days",
                nights: "5 Nights",
                type: "City Adventure"
            }
        ];


        /* =====================================================
        ELEMENTS
        ===================================================== */

        const destinationGrid =
            document.getElementById("destinationGrid");

        const searchInput =
            document.getElementById("destinationSearch");

        const searchBtn =
            document.getElementById("searchBtn");

        const filterButtons =
            document.querySelectorAll(".filter-btn");

        const noResults =
            document.getElementById("noResults");


        /* =====================================================
        MODAL ELEMENTS
        ===================================================== */

        const modal =
            document.getElementById("destinationModal");

        const modalOverlay =
            document.getElementById("modalOverlay");

        const modalClose =
            document.getElementById("modalClose");

        const modalImage =
            document.getElementById("modalImage");

        const modalTitle =
            document.getElementById("modalTitle");

        const modalLocation =
            document.getElementById("modalLocation");

        const modalRating =
            document.getElementById("modalRating");

        const modalDescription =
            document.getElementById("modalDescription");

        const modalBestTime =
            document.getElementById("modalBestTime");

        const modalTemperature =
            document.getElementById("modalTemperature");

        const modalActivities =
            document.getElementById("modalActivities");

        const modalPrice =
            document.getElementById("modalPrice");

        const modalDays =
            document.getElementById("modalDays");

        const modalNights =
            document.getElementById("modalNights");

        const wishlistBtn =
            document.getElementById("wishlistBtn");

        const addToCartBtn =
            document.getElementById("addToCartBtn");

        const modalBookBtn =
            document.getElementById("modalBookBtn");

        const modalPrev =
            document.getElementById("modalPrev");

        const modalNext =
            document.getElementById("modalNext");


        /* =====================================================
        CART ELEMENTS
        ===================================================== */

        const cartNavBtn =
            document.getElementById("cartNavBtn");

        const cartDrawer =
            document.getElementById("cartDrawer");

        const drawerOverlay =
            document.getElementById("drawerOverlay");

        const cartClose =
            document.getElementById("cartClose");

        const cartItems =
            document.getElementById("cartItems");

        const cartCount =
            document.getElementById("cartCount");

        const drawerCartCount =
            document.getElementById("drawerCartCount");

        const cartTotal =
            document.getElementById("cartTotal");

        const cartBookBtn =
            document.getElementById("cartBookBtn");


        /* =====================================================
        STATE
        ===================================================== */

        let currentIndex = 0;
        let activeCategory = "all";


        /* =====================================================
        LOCAL STORAGE - CART
        ===================================================== */

        function getCart() {

            try {

                const savedCart =
                    localStorage.getItem("travelXCart");

                if (!savedCart) {
                    return [];
                }

                const cart =
                    JSON.parse(savedCart);

                return Array.isArray(cart)
                    ? cart
                    : [];

            } catch (error) {

                console.error(
                    "Unable to read cart:",
                    error
                );

                return [];
            }
        }


        function saveCart(cart) {

            try {

                localStorage.setItem(
                    "travelXCart",
                    JSON.stringify(cart)
                );

            } catch (error) {

                console.error(
                    "Unable to save cart:",
                    error
                );
            }
        }


        /* =====================================================
        LOCAL STORAGE - WISHLIST
        ===================================================== */

        function getWishlist() {

            try {

                const savedWishlist =
                    localStorage.getItem(
                        "travelXWishlist"
                    );

                if (!savedWishlist) {
                    return [];
                }

                const wishlist =
                    JSON.parse(savedWishlist);

                return Array.isArray(wishlist)
                    ? wishlist
                    : [];

            } catch (error) {

                console.error(
                    "Unable to read wishlist:",
                    error
                );

                return [];
            }
        }


        function saveWishlist(wishlist) {

            try {

                localStorage.setItem(
                    "travelXWishlist",
                    JSON.stringify(wishlist)
                );

            } catch (error) {

                console.error(
                    "Unable to save wishlist:",
                    error
                );
            }
        }


        /* =====================================================
        ADD TO CART
        ===================================================== */

        function addToCart(index) {

            const destination =
                destinations[index];

            if (!destination) {
                return;
            }

            let cart =
                getCart();

            const alreadyExists =
                cart.some(
                    item =>
                        item.name === destination.name
                );

            if (alreadyExists) {

                showMessage(
                    `${destination.name} is already in your cart.`
                );

                updateCartUI();
                updateCardStates();
                updateModalButtons();

                return;
            }

            cart.push({

                id: destination.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-"),

                name: destination.name,

                image: destination.image,

                price: Number(destination.price),

                rating: destination.rating,

                days: destination.days,

                nights: destination.nights,

                type: destination.type
            });

            saveCart(cart);

            updateCartUI();

            updateCardStates();

            updateModalButtons();

            showMessage(
                `${destination.name} added to cart!`
            );

            openCart();
        }


        /* =====================================================
        REMOVE FROM CART
        ===================================================== */

        function removeFromCart(name) {

            let cart =
                getCart();

            cart =
                cart.filter(
                    item =>
                        item.name !== name
                );

            saveCart(cart);

            updateCartUI();

            updateCardStates();

            updateModalButtons();
        }


        /* =====================================================
        UPDATE CART UI
        ===================================================== */

        function updateCartUI() {

            const cart =
                getCart();

            /* CART COUNT */

            if (cartCount) {

                cartCount.textContent =
                    cart.length;
            }

            if (drawerCartCount) {

                drawerCartCount.textContent =
                    `(${cart.length})`;
            }


            /* CART ITEMS */

            if (!cartItems) {
                return;
            }


            if (cart.length === 0) {

                cartItems.innerHTML = `

                    <div class="cart-empty">

                        <i class="bi bi-cart-x"></i>

                        <p>
                            Your cart is empty.
                        </p>

                        <small>
                            Add a destination to continue.
                        </small>

                    </div>

                `;

            } else {

                cartItems.innerHTML =

                    cart.map(
                        (item, index) => `

                        <div
                            class="cart-item"
                            data-cart-index="${index}"
                        >

                            <img
                                src="${item.image}"
                                alt="${item.name}"
                            >

                            <div class="cart-item-info">

                                <strong>
                                    ${item.name}
                                </strong>

                                <span>
                                    $${Number(
                                        item.price
                                    ).toLocaleString()}
                                </span>

                            </div>

                            <button
                                type="button"
                                class="remove-cart"
                                data-name="${item.name}"
                                title="Remove"
                            >

                                <i class="bi bi-trash"></i>

                            </button>

                        </div>

                    `
                    ).join("");
            }


            /* TOTAL */

            const total =
                cart.reduce(
                    (sum, item) =>
                        sum +
                        Number(item.price || 0),
                    0
                );

            if (cartTotal) {

                cartTotal.textContent =
                    "$" +
                    total.toLocaleString();
            }


            /* BOOK BUTTON */

            if (cartBookBtn) {

                if (cart.length === 0) {

                    cartBookBtn.classList.add(
                        "disabled"
                    );

                    cartBookBtn.setAttribute(
                        "aria-disabled",
                        "true"
                    );

                } else {

                    cartBookBtn.classList.remove(
                        "disabled"
                    );

                    cartBookBtn.removeAttribute(
                        "aria-disabled"
                    );
                }
            }
        }


        /* =====================================================
        UPDATE CARD STATES
        ===================================================== */

        function updateCardStates() {

            const cart =
                getCart();

            const wishlist =
                getWishlist();


            /* CART BUTTONS */

            document
                .querySelectorAll(".card-cart-btn")
                .forEach(button => {

                    const index =
                        Number(
                            button.dataset.cart
                        );

                    const destination =
                        destinations[index];

                    if (!destination) {
                        return;
                    }

                    const exists =
                        cart.some(
                            item =>
                                item.name ===
                                destination.name
                        );

                    if (exists) {

                        button.classList.add(
                            "added"
                        );

                        button.innerHTML = `

                            <i class="bi bi-check-circle"></i>
                            Added

                        `;

                    } else {

                        button.classList.remove(
                            "added"
                        );

                        button.innerHTML = `

                            <i class="bi bi-cart-plus"></i>
                            Add to Cart

                        `;
                    }

                });


            /* WISHLIST BUTTONS */

            document
                .querySelectorAll(".favorite-card")
                .forEach(button => {

                    const index =
                        Number(
                            button.dataset.wishlist
                        );

                    const destination =
                        destinations[index];

                    if (!destination) {
                        return;
                    }

                    const exists =
                        wishlist.some(
                            item =>
                                item.name ===
                                destination.name
                        );

                    if (exists) {

                        button.classList.add(
                            "active"
                        );

                        button.innerHTML =
                            '<i class="bi bi-heart-fill"></i>';

                    } else {

                        button.classList.remove(
                            "active"
                        );

                        button.innerHTML =
                            '<i class="bi bi-heart"></i>';
                    }

                });
        }


        /* =====================================================
        TOGGLE WISHLIST
        ===================================================== */

        function toggleWishlist(index) {

            const destination =
                destinations[index];

            if (!destination) {
                return;
            }

            let wishlist =
                getWishlist();

            const existingIndex =
                wishlist.findIndex(
                    item =>
                        item.name ===
                        destination.name
                );


            if (existingIndex !== -1) {

                wishlist.splice(
                    existingIndex,
                    1
                );

                showMessage(
                    `${destination.name} removed from wishlist.`
                );

            } else {

                wishlist.push({

                    id: destination.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-"),

                    name: destination.name,

                    image: destination.image,

                    price: Number(destination.price),

                    rating: destination.rating
                });

                showMessage(
                    `${destination.name} added to wishlist!`
                );
            }


            saveWishlist(wishlist);

            updateCardStates();

            updateModalButtons();
        }


        /* =====================================================
        RENDER DESTINATIONS
        ===================================================== */

        function renderDestinations() {

            if (!destinationGrid) {
                return;
            }

            const searchValue =
                searchInput
                    ? searchInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            const filtered =
                destinations.filter(
                    destination => {

                        const matchesSearch =

                            destination.name
                                .toLowerCase()
                                .includes(searchValue)

                            ||

                            destination.category
                                .toLowerCase()
                                .includes(searchValue)

                            ||

                            destination.type
                                .toLowerCase()
                                .includes(searchValue);


                        const matchesCategory =

                            activeCategory === "all"

                            ||

                            destination.category
                                .toLowerCase()
                                .includes(
                                    activeCategory
                                );


                        return (
                            matchesSearch &&
                            matchesCategory
                        );
                    }
                );


            if (filtered.length === 0) {

                destinationGrid.innerHTML = "";

                if (noResults) {
                    noResults.classList.add(
                        "show"
                    );
                }

                return;
            }


            if (noResults) {

                noResults.classList.remove(
                    "show"
                );
            }


            destinationGrid.innerHTML =

                filtered
                    .map(destination => {

                        const index =
                            destinations.indexOf(
                                destination
                            );


                        return `

                            <div class="col-lg-4 col-md-6">

                                <div class="destination-card">

                                    <div class="destination-image">

                                        <img
                                            src="${destination.image}"
                                            alt="${destination.name}"
                                        >

                                        <div class="destination-badge">

                                            <i class="bi bi-star-fill"></i>

                                            ${destination.rating}

                                        </div>


                                        <button
                                            type="button"
                                            class="favorite-card"
                                            data-wishlist="${index}"
                                            aria-label="Add to wishlist"
                                        >

                                            <i class="bi bi-heart"></i>

                                        </button>


                                        <div class="destination-type">

                                            ${destination.type}

                                        </div>

                                    </div>


                                    <div class="card-body">

                                        <div class="destination-location">

                                            <i class="bi bi-geo-alt-fill"></i>

                                            ${destination.name}

                                        </div>


                                        <h4>
                                            ${destination.name}
                                        </h4>


                                        <p>
                                            ${destination.description}
                                        </p>


                                        <div class="package-info">

                                            <span>

                                                <i class="bi bi-calendar3"></i>

                                                ${destination.days}

                                            </span>


                                            <span>

                                                <i class="bi bi-moon-stars"></i>

                                                ${destination.nights}

                                            </span>


                                            <span>

                                                <i class="bi bi-thermometer-half"></i>

                                                ${destination.temperature}

                                            </span>

                                        </div>


                                        <div class="card-footer-row">

                                            <div>

                                                <small>
                                                    Starting from
                                                </small>

                                                <strong>
                                                    $${Number(
                                                        destination.price
                                                    ).toLocaleString()}
                                                </strong>

                                            </div>


                                            <div class="card-actions">

                                                <button
                                                    type="button"
                                                    class="explore-btn"
                                                    data-details="${index}"
                                                >
                                                    Details
                                                </button>


                                                <button
                                                    type="button"
                                                    class="card-cart-btn"
                                                    data-cart="${index}"
                                                >

                                                    <i class="bi bi-cart-plus"></i>

                                                    Add to Cart

                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        `;

                    })
                    .join("");


            updateCardStates();
        }


        /* =====================================================
        OPEN DETAILS MODAL
        ===================================================== */

        function openModal(index) {

            const destination =
                destinations[index];

            if (!destination || !modal) {
                return;
            }

            currentIndex =
                index;


            if (modalImage) {

                modalImage.src =
                    destination.image;

                modalImage.alt =
                    destination.name;
            }


            if (modalTitle) {

                modalTitle.textContent =
                    destination.name;
            }


            if (modalLocation) {

                modalLocation.textContent =
                    destination.name;
            }


            if (modalRating) {

                modalRating.innerHTML = `

                    <i class="bi bi-star-fill"></i>

                    ${destination.rating}

                `;
            }


            if (modalDescription) {

                modalDescription.textContent =
                    destination.description;
            }


            if (modalBestTime) {

                modalBestTime.textContent =
                    destination.bestTime;
            }


            if (modalTemperature) {

                modalTemperature.textContent =
                    destination.temperature;
            }


            if (modalActivities) {

                modalActivities.textContent =
                    destination.activities;
            }


            if (modalPrice) {

                modalPrice.textContent =
                    "$" +
                    Number(
                        destination.price
                    ).toLocaleString();
            }


            if (modalDays) {

                modalDays.textContent =
                    destination.days;
            }


            if (modalNights) {

                modalNights.textContent =
                    destination.nights;
            }


            updateModalButtons();


            modal.classList.add("show");

            if (modalOverlay) {

                modalOverlay.classList.add(
                    "show"
                );
            }

            document.body.classList.add(
                "modal-open"
            );
        }


        /* =====================================================
        CLOSE MODAL
        ===================================================== */

        function closeModal() {

            if (modal) {

                modal.classList.remove(
                    "show"
                );
            }

            if (modalOverlay) {

                modalOverlay.classList.remove(
                    "show"
                );
            }

            document.body.classList.remove(
                "modal-open"
            );
        }


        /* =====================================================
        UPDATE MODAL BUTTONS
        ===================================================== */

        function updateModalButtons() {

            const destination =
                destinations[currentIndex];

            if (!destination) {
                return;
            }

            const cart =
                getCart();

            const wishlist =
                getWishlist();


            const inCart =
                cart.some(
                    item =>
                        item.name ===
                        destination.name
                );


            const inWishlist =
                wishlist.some(
                    item =>
                        item.name ===
                        destination.name
                );


            /* WISHLIST */

            if (wishlistBtn) {

                if (inWishlist) {

                    wishlistBtn.classList.add(
                        "active"
                    );

                    wishlistBtn.innerHTML = `

                        <i class="bi bi-heart-fill"></i>

                        Wishlisted

                    `;

                } else {

                    wishlistBtn.classList.remove(
                        "active"
                    );

                    wishlistBtn.innerHTML = `

                        <i class="bi bi-heart"></i>

                        Wishlist

                    `;
                }
            }


            /* CART */

            if (addToCartBtn) {

                if (inCart) {

                    addToCartBtn.classList.add(
                        "added"
                    );

                    addToCartBtn.innerHTML = `

                        <i class="bi bi-check-circle"></i>

                        Added to Cart

                    `;

                } else {

                    addToCartBtn.classList.remove(
                        "added"
                    );

                    addToCartBtn.innerHTML = `

                        <i class="bi bi-cart-plus"></i>

                        Add to Cart

                    `;
                }
            }
        }


        /* =====================================================
        OPEN CART
        ===================================================== */

        function openCart() {

            updateCartUI();

            if (cartDrawer) {

                cartDrawer.classList.add(
                    "show"
                );
            }

            if (drawerOverlay) {

                drawerOverlay.classList.add(
                    "show"
                );
            }
        }


        /* =====================================================
        CLOSE CART
        ===================================================== */

        function closeCart() {

            if (cartDrawer) {

                cartDrawer.classList.remove(
                    "show"
                );
            }

            if (drawerOverlay) {

                drawerOverlay.classList.remove(
                    "show"
                );
            }
        }


        /* =====================================================
        PREVIOUS DESTINATION
        ===================================================== */

        function showPreviousDestination() {

            currentIndex--;

            if (currentIndex < 0) {

                currentIndex =
                    destinations.length - 1;
            }

            openModal(
                currentIndex
            );
        }


        /* =====================================================
        NEXT DESTINATION
        ===================================================== */

        function showNextDestination() {

            currentIndex++;

            if (
                currentIndex >=
                destinations.length
            ) {

                currentIndex = 0;
            }

            openModal(
                currentIndex
            );
        }


        /* =====================================================
        CARD EVENTS
        ===================================================== */

        if (destinationGrid) {

            destinationGrid.addEventListener(
                "click",
                event => {

                    const detailsButton =
                        event.target.closest(
                            ".explore-btn"
                        );

                    const cartButton =
                        event.target.closest(
                            ".card-cart-btn"
                        );

                    const wishlistButton =
                        event.target.closest(
                            ".favorite-card"
                        );


                    /* DETAILS */

                    if (detailsButton) {

                        const index =
                            Number(
                                detailsButton.dataset.details
                            );

                        openModal(index);

                        return;
                    }


                    /* ADD TO CART */

                    if (cartButton) {

                        const index =
                            Number(
                                cartButton.dataset.cart
                            );

                        addToCart(index);

                        return;
                    }


                    /* WISHLIST */

                    if (wishlistButton) {

                        const index =
                            Number(
                                wishlistButton.dataset.wishlist
                            );

                        toggleWishlist(index);

                    }

                }
            );
        }


        /* =====================================================
        MODAL CART
        ===================================================== */

        if (addToCartBtn) {

            addToCartBtn.addEventListener(
                "click",
                () => {

                    addToCart(
                        currentIndex
                    );

                }
            );
        }


        /* =====================================================
        MODAL WISHLIST
        ===================================================== */

        if (wishlistBtn) {

            wishlistBtn.addEventListener(
                "click",
                () => {

                    toggleWishlist(
                        currentIndex
                    );

                }
            );
        }


        /* =====================================================
        MODAL CLOSE
        ===================================================== */

        if (modalClose) {

            modalClose.addEventListener(
                "click",
                closeModal
            );
        }


        if (modalOverlay) {

            modalOverlay.addEventListener(
                "click",
                closeModal
            );
        }


        /* =====================================================
        MODAL NAVIGATION
        ===================================================== */

        if (modalPrev) {

            modalPrev.addEventListener(
                "click",
                showPreviousDestination
            );
        }


        if (modalNext) {

            modalNext.addEventListener(
                "click",
                showNextDestination
            );
        }


        /* =====================================================
        CART EVENTS
        ===================================================== */

        if (cartNavBtn) {

            cartNavBtn.addEventListener(
                "click",
                openCart
            );
        }


        if (cartClose) {

            cartClose.addEventListener(
                "click",
                closeCart
            );
        }


        if (drawerOverlay) {

            drawerOverlay.addEventListener(
                "click",
                closeCart
            );
        }


        /* =====================================================
        REMOVE CART ITEM
        ===================================================== */

        if (cartItems) {

            cartItems.addEventListener(
                "click",
                event => {

                    const removeButton =
                        event.target.closest(
                            ".remove-cart"
                        );

                    if (!removeButton) {
                        return;
                    }

                    const name =
                        removeButton.dataset.name;

                    removeFromCart(name);

                }
            );
        }


        /* =====================================================
        SEARCH
        ===================================================== */

        if (searchBtn) {

            searchBtn.addEventListener(
                "click",
                renderDestinations
            );
        }


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                renderDestinations
            );


            searchInput.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter"
                    ) {

                        renderDestinations();
                    }

                }
            );
        }


        /* =====================================================
        CATEGORY FILTER
        ===================================================== */

        filterButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        filterButtons.forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );

                        button.classList.add(
                            "active"
                        );


                        activeCategory =
                            button.dataset.filter ||
                            "all";


                        renderDestinations();

                    }
                );

            }
        );


        /* =====================================================
        ESC KEY
        ===================================================== */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeModal();

                    closeCart();
                }

            }
        );


        /* =====================================================
        HELPER MESSAGE
        ===================================================== */

        function showMessage(message) {

            let toast =
                document.getElementById(
                    "travelXToast"
                );


            if (!toast) {

                toast =
                    document.createElement(
                        "div"
                    );

                toast.id =
                    "travelXToast";

                toast.style.position =
                    "fixed";

                toast.style.bottom =
                    "30px";

                toast.style.right =
                    "30px";

                toast.style.zIndex =
                    "99999";

                toast.style.padding =
                    "14px 22px";

                toast.style.background =
                    "#111827";

                toast.style.color =
                    "#ffffff";

                toast.style.borderRadius =
                    "10px";

                toast.style.fontSize =
                    "14px";

                toast.style.fontWeight =
                    "500";

                toast.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,.25)";

                toast.style.transition =
                    "all .3s ease";

                document.body.appendChild(
                    toast
                );
            }


            toast.textContent =
                message;

            toast.style.opacity =
                "1";

            toast.style.transform =
                "translateY(0)";


            clearTimeout(
                toast._timer
            );


            toast._timer =
                setTimeout(
                    () => {

                        toast.style.opacity =
                            "0";

                        toast.style.transform =
                            "translateY(10px)";

                    },
                    2200
                );
        }


        /* =====================================================
        INITIAL LOAD
        ===================================================== */

        renderDestinations();

        updateCartUI();

        updateCardStates();

    });