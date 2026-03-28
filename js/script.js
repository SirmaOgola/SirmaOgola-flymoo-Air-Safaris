document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
        document.querySelectorAll("#nav-links a").forEach(link => {
            link.addEventListener("click", () => navLinks.classList.remove("active"));
        });
    }

    // Contact form alert
    const form = document.querySelector(".contact-form");
    if (form) form.addEventListener("submit", () => alert("Request sent successfully!"));

    // Initialize AOS
    if (typeof AOS !== "undefined") AOS.init({ duration: 1000, once: true });
});

// Loader fade-out
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("fade-out");
});

// Booking Modal Logic
const modal = document.getElementById('booking-modal');
const modalClose = document.querySelector('.modal-close');
const aircraftSelect = document.getElementById('aircraft-select');
const bookingForm = document.getElementById('booking-form');

// Function to open modal with pre-filled aircraft
function openBookingModal(aircraftName) {
    if (aircraftSelect) {
        aircraftSelect.value = aircraftName;
    }
    modal.classList.add('active');
}

// Close modal on X or background click
if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Attach click listeners to all "Request Charter" buttons
const charterButtons = document.querySelectorAll('.btn');
charterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // prevent default anchor behavior
        const aircraftCard = btn.closest('.aircraft-card');
        if (aircraftCard) {
            const aircraftName = aircraftCard.querySelector('h3').innerText;
            openBookingModal(aircraftName);
        } else {
            // if button is not inside an aircraft card (e.g., on index page), open without pre‑fill
            openBookingModal('');
        }
    });
});

// Open modal from custom trigger buttons (like contact section)
const modalTriggers = document.querySelectorAll('.modal-trigger');
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        // Optionally set aircraft select to a default or empty value
        if (aircraftSelect) aircraftSelect.value = '';
        openBookingModal('');
    });
});

