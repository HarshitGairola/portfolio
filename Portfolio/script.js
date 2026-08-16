/* =========================================================
   HARSHIT GAIROLA — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }
    });

}


/* ================= CLOSE MOBILE MENU ================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        if (menuButton) {
            menuButton.textContent = "☰";
        }

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= NAVBAR SHADOW ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8, 8, 12, 0.85)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.08)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.borderBottom = "none";

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .service-card, .contact-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= PROJECT IMAGE FALLBACK ================= */

const projectImages = document.querySelectorAll(".project-image img");

projectImages.forEach(image => {

    image.addEventListener("error", () => {

        image.style.display = "none";

    });

});


/* ================= CURRENT YEAR ================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Harshit Gairola. All Rights Reserved.`;

}


/* ================= BUTTON RIPPLE EFFECT ================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            event.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            event.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ================= PROJECT CARD HOVER ================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "transform 0.35s ease";

    });

});


/* ================= TYPING EFFECT ================= */

const heroRole = document.querySelector(".hero h2");

if (heroRole) {

    const roles = [
        "Frontend Web Developer",
        "Website Designer",
        "Frontend Developer"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeRole() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            heroRole.textContent =
                currentRole.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeRole, 1800);

                return;
            }

        } else {

            heroRole.textContent =
                currentRole.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {
                    roleIndex = 0;
                }

            }

        }

        setTimeout(
            typeRole,
            deleting ? 45 : 85
        );

    }

    typeRole();

}


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%cHarshit Gairola | Frontend Web Developer",
    "font-size: 18px; font-weight: bold;"
);

console.log(
    "%cWelcome to my portfolio!",
    "font-size: 14px;"
);