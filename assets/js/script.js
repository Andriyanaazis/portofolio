/* =========================================================
   ANDRIYANA ABDULLAH A.
   Portfolio Website
   JavaScript
   Features:
   - Mobile hamburger menu
   - Smooth navigation
   - Scroll reveal
   - Close mobile menu after navigation
   ========================================================= */


/* =========================================================
   1. MOBILE HAMBURGER MENU
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

}


/* =========================================================
   2. CLOSE MOBILE MENU WHEN NAVIGATION LINK IS CLICKED
   ========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }

    });

});


/* =========================================================
   3. SMOOTH NAVIGATION
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (!targetElement) {
            return;
        }

        event.preventDefault();

        const header = document.querySelector(".site-header");

        const headerHeight = header
            ? header.offsetHeight
            : 0;

        const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   4. SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}


/* =========================================================
   5. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (!navMenu || !menuToggle) {
        return;
    }

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (
        navMenu.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* =========================================================
   6. ESCAPE KEY CLOSES MOBILE MENU
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
        return;
    }

    if (!navMenu || !menuToggle) {
        return;
    }

    navMenu.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

});


/* =========================================================
   7. INITIALIZE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (menuToggle) {
        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

});
