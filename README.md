# TravelX - Professional Travel Website

## Project Overview

TravelX is a responsive travel web application developed as part of the Full Stack Development V8 Module 1 assignment.

The main objective of the project is to build a responsive travel website that works across mobile, tablet, and desktop devices.

The website allows users to explore travel destinations, view destination details, search and filter destinations, add destinations to a cart, save destinations to a wishlist, view travel images, submit booking information, and contact the travel service.

The project is developed using HTML5, CSS3, Bootstrap 5, JavaScript, and Browser Local Storage.

---

# Assignment Objective

The assignment requires a responsive travel web application landing page.

The required features include:

- Header with navigation
- Responsive navigation menu
- Hero section
- About or Features section
- Destinations section
- Contact form
- HTML5 semantic structure
- CSS3 styling
- Flexbox and Grid
- Media queries
- Responsive images
- Responsive design for mobile, tablet, and desktop
- HTML5 form validation
- GitHub hosting

TravelX implements these required features and also includes additional interactive functionality.

---

# Technologies Used

## HTML5

HTML5 is used to create the structure and content of the website.

Semantic HTML5 elements are used to organize the pages.

Examples include:

- header
- nav
- main
- section
- article
- footer
- form

HTML5 is also used for form fields and basic browser validation.

---

# CSS3

CSS3 is used for styling and visual design.

The project uses:

- CSS Box Model
- Flexbox
- CSS Grid
- Media Queries
- Responsive Images
- Typography
- Spacing
- Borders
- Shadows
- Transitions
- Hover Effects
- Animations

CSS is organized into separate files for different pages.

Examples:

- index.css
- about.css
- destinations.css
- gallery.css
- contact.css
- booking.css

---

# Bootstrap 5

Bootstrap 5 is used to improve responsive layout and UI components.

Bootstrap provides:

- Responsive containers
- Grid system
- Buttons
- Navigation components
- Responsive utilities
- Bootstrap Icons
- Modal-related UI support

Bootstrap is combined with custom CSS to create the TravelX design.

---

# JavaScript

JavaScript is used to provide interactive functionality throughout the website.

JavaScript handles:

- Navbar loading
- Footer loading
- Active navigation
- Navbar scroll effect
- Destination rendering
- Destination search
- Destination filtering
- Destination details
- Modal functionality
- Add to Cart
- Remove from Cart
- Wishlist
- Local Storage
- Cart calculation
- Booking validation
- Contact form validation
- Gallery interactions

---

# JavaScript DOM Manipulation

The project uses JavaScript DOM manipulation to dynamically update the webpage.

For example, destination cards are generated dynamically from JavaScript data.

The destination information contains:

- Name
- Image
- Category
- Rating
- Description
- Best travel time
- Temperature
- Activities
- Price
- Days
- Nights
- Package type

The destination JavaScript dynamically creates the destination cards and displays them on the page.

---

# Destination Data

The Destinations page contains travel information for:

- Paris, France
- Maldives
- Dubai, UAE
- Switzerland
- Bali, Indonesia
- Tokyo, Japan

Each destination contains information such as:

- Destination name
- Image
- Category
- Rating
- Description
- Best travel time
- Temperature
- Activities
- Price
- Number of days
- Number of nights
- Package type

---

# Destination Search

The Destinations page provides a search functionality.

Users can search destinations by:

- Destination name
- Category
- Package type

JavaScript reads the search input and dynamically filters the destination list.

The destination list is updated without reloading the page.

---

# Destination Filter

The Destinations page provides category filtering.

Users can filter destinations based on categories such as:

- All
- City
- Beach
- Mountain
- Island

JavaScript handles the filter button events and updates the destination cards dynamically.

---

# Destination Details

Each destination contains a Details button.

When the user clicks Details, a modal opens.

The modal displays:

- Destination image
- Destination name
- Location
- Rating
- Description
- Best travel time
- Temperature
- Activities
- Price
- Number of days
- Number of nights

The modal also provides actions for:

- Wishlist
- Add to Cart
- Booking

---

# Shopping Cart

The TravelX website provides a shopping cart for selected travel destinations.

Users can add a destination by clicking Add to Cart.

The cart stores:

- Destination ID
- Destination name
- Destination image
- Price
- Rating
- Number of days
- Number of nights
- Package type

The cart prevents duplicate destinations from being added.

---

# Cart Count

The navigation bar displays the number of destinations currently added to the cart.

Whenever a destination is added or removed, the cart count is updated automatically.

---

# Cart Total

The cart calculates the total price of all selected destinations.

JavaScript uses the destination prices and calculates the total amount dynamically.

For example:

Destination 1 price + Destination 2 price + Destination 3 price = Cart Total

The total is updated whenever an item is added or removed.

---

# Remove From Cart

Users can remove a destination from the cart.

When a destination is removed:

- The destination is removed from the cart
- Cart count is updated
- Cart total is updated
- The cart interface is refreshed

---

# Local Storage

Browser Local Storage is used to save cart and wishlist information.

This allows selected destinations to remain available after refreshing the browser.

## Cart Storage

The cart uses the following Local Storage key:

    travelXCart

The cart data is converted into JSON before being stored.

JavaScript uses:

    JSON.stringify()

to save the data.

When retrieving the data, JavaScript uses:

    JSON.parse()

to convert the stored JSON back into JavaScript data.

---

# Wishlist

Users can save their favourite destinations using the Wishlist feature.

When a destination is added to the wishlist, its information is saved in Local Storage.

The wishlist uses the following key:

    travelXWishlist

The wishlist prevents duplicate destinations.

Users can also remove destinations from the wishlist.

---

# Navbar

The website uses a common navigation component.

The navbar contains links to the main pages.

The navigation includes:

- Home
- About
- Destinations
- Gallery
- Contact
- Booking
- Login
- Book Now

The active page is automatically highlighted.

JavaScript identifies the current page and applies the active navigation class.

---

# Common Component Loader

The project uses JavaScript to load common components.

The common components include:

- Navbar
- Footer

The JavaScript file:

    include.js

loads these components dynamically.

This avoids writing the same navbar and footer code repeatedly on every page.

---

# Navbar Scroll Effect

JavaScript detects the browser scroll position.

When the user scrolls down, a CSS class is added to the navbar.

This allows the navbar appearance to change when the page is scrolled.

---

# Home Page

The Home page is the main landing page of TravelX.

It contains:

- Hero section
- Travel heading
- Travel description
- Call-to-action buttons
- Travel information
- Featured content
- Responsive layout

The Home page introduces the TravelX travel service and directs users to explore destinations and book trips.

---

# About Page

The About page provides information about TravelX.

It contains:

- About content
- Travel information
- Supporting images
- Experience information
- Responsive layout

The page explains the purpose and travel experience provided by TravelX.

---

# Gallery Page

The Gallery page displays travel images.

Features include:

- Responsive image grid
- Travel images
- Image details
- Image popup
- Previous image navigation
- Next image navigation
- Close functionality

JavaScript is used to control the gallery interaction.

---

# Contact Page

The Contact page allows users to contact the travel service.

The form contains fields such as:

- Name
- Email
- Phone
- Subject
- Message

JavaScript is used for form validation.

---

# Contact Form Validation

The contact form validates user input before submission.

Validation includes:

- Required fields
- Name validation
- Email validation
- Phone validation
- Subject validation
- Message validation

The form prevents invalid data from being submitted.

HTML5 validation attributes are also used where appropriate.

---

# Booking Page

The Booking page allows users to submit travel booking information.

The booking form collects required travel information.

JavaScript is used to validate the booking form.

The form checks required fields before allowing the booking process to continue.

---

# Responsive Design

Responsive design is an important requirement of the assignment.

The website is designed for:

## Mobile

    320px - 768px

## Tablet

    769px - 1024px

## Desktop

    Above 1024px

Media queries are used to change the layout according to screen size.

---

# Mobile Responsive Design

On mobile devices:

- Navigation changes to a hamburger menu
- Destination cards stack vertically
- Forms use full available width
- Images become responsive
- Buttons become easier to use
- Content fits the screen width
- Horizontal overflow is prevented

---

# Tablet Responsive Design

On tablet devices:

- Destination cards use a two-column layout where appropriate
- Images remain responsive
- Content spacing is adjusted
- Navigation remains responsive
- Forms adapt to the available width

---

# Desktop Responsive Design

On desktop and laptop screens:

- Destination cards use multiple columns
- Content has wider spacing
- Images use larger dimensions
- Navigation displays full menu options
- Sections use the available screen width efficiently

---

# Responsive Images

Images are made responsive using CSS.

Images are prevented from exceeding their container width.

This helps prevent horizontal overflow on smaller devices.

---

# Flexbox

Flexbox is used for layouts where content needs alignment in rows or columns.

Examples include:

- Navigation
- Buttons
- Card actions
- Form layouts
- Content alignment

Flexbox helps maintain consistent spacing and alignment.

---

# CSS Grid

CSS Grid is used for sections containing multiple cards.

Examples include:

- Destination cards
- Gallery images
- Feature sections

Grid columns are changed using media queries for different screen sizes.

---

# Form Validation

HTML5 and JavaScript are used together for form validation.

HTML5 provides validation features such as:

- required
- type="email"
- input restrictions

JavaScript provides additional validation and user feedback.

---

# Project Structure

    Travel Website/
    |
    |-- index.html
    |-- about.html
    |-- destinations.html
    |-- gallery.html
    |-- contact.html
    |-- booking.html
    |
    |-- css/
    |   |-- index.css
    |   |-- about.css
    |   |-- destinations.css
    |   |-- gallery.css
    |   |-- contact.css
    |   |-- booking.css
    |
    |-- js/
    |   |-- include.js
    |   |-- destinations.js
    |   |-- gallery.js
    |   |-- contact.js
    |   |-- booking.js
    |
    |-- components/
    |   |-- navbar.html
    |   |-- footer.html
    |
    |-- images/
    |
    |-- README.md

---

# How to Run the Project

## Step 1

Open the Travel Website folder in Visual Studio Code.

## Step 2

Install the Live Server extension.

## Step 3

Open:

    index.html

## Step 4

Right-click index.html.

Select:

    Open with Live Server

## Step 5

The website will open in the browser.

The project should be opened using Live Server because JavaScript uses fetch to load common components such as the navbar and footer.

---

# Testing

The following functionality should be tested before submission:

- Home page
- About page
- Destinations page
- Gallery page
- Contact page
- Booking page
- Navbar
- Mobile hamburger menu
- Destination search
- Destination filters
- Destination details
- Add to Cart
- Remove from Cart
- Cart count
- Cart total
- Wishlist
- Local Storage
- Contact validation
- Booking validation
- Gallery popup
- Previous and Next gallery controls
- Mobile responsiveness
- Tablet responsiveness
- Desktop responsiveness

---

# Browser Testing

The website can be tested using modern browsers such as:

- Google Chrome
- Microsoft Edge

Responsive testing can be performed using browser Developer Tools.

Recommended testing widths:

    Mobile: 375px
    Tablet: 768px / 1024px
    Desktop: 1366px or higher

---

# Assignment Requirements Covered

The TravelX project covers the major assignment requirements:

- Semantic HTML5 structure
- Header and navigation
- Responsive hamburger menu
- Hero section
- About/Features section
- Destinations section
- Contact form
- HTML5 validation
- CSS3 styling
- Flexbox
- CSS Grid
- Media queries
- Responsive images
- Responsive layout
- Git and GitHub preparation

The project also provides additional functionality such as destination search, filtering, cart, wishlist, Local Storage, gallery interaction, and booking.

---

# GitHub Deployment

The project can be uploaded to GitHub for version control and hosting.

Recommended steps:

    git init

    git add .

    git commit -m "Initial TravelX travel website"

    git branch -M main

    git remote add origin YOUR_GITHUB_REPOSITORY_URL

    git push -u origin main

The project can then be deployed using GitHub Pages.

---

# Future Improvements

Possible future improvements include:

- Backend integration
- Database integration
- User authentication
- Online payment integration
- Real travel booking API
- Destination API integration
- User accounts
- Booking history
- Admin dashboard

---

