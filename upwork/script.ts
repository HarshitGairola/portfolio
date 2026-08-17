/* =========================================================
   HARSHIT GAIROLA — PORTFOLIO
   TYPESCRIPT
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById(
    "menuToggle"
) as HTMLButtonElement | null;

const navLinks = document.getElementById(
    "navLinks"
) as HTMLUListElement | null;


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", (): void => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu when a navigation link is clicked */

    const links = navLinks.querySelectorAll("a");

    links.forEach((link: HTMLAnchorElement): void => {

        link.addEventListener("click", (): void => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   2. CURRENT YEAR
========================================================= */

const currentYear = document.getElementById(
    "currentYear"
);

if (currentYear) {

    currentYear.textContent =
        String(new Date().getFullYear());

}


/* =========================================================
   3. ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll<HTMLElement>(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll<HTMLAnchorElement>(
        ".nav-links a"
    );


const updateActiveNavigation = (): void => {

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(
        (section: HTMLElement): void => {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom &&
                sectionId
            ) {

                navigationLinks.forEach(
                    (link: HTMLAnchorElement): void => {

                        link.classList.remove("active");

                        const target =
                            link.getAttribute("href");

                        if (
                            target === `#${sectionId}`
                        ) {

                            link.classList.add("active");

                        }

                    }
                );

            }

        }
    );

};


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


/* =========================================================
   4. HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector<HTMLElement>(
        ".site-header"
    );


const updateHeader = (): void => {

    if (!header) {
        return;
    }

    if (window.scrollY > 40) {

        header.style.background =
            "rgba(8, 8, 13, 0.94)";

    } else {

        header.style.background =
            "rgba(8, 8, 13, 0.82)";

    }

};


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


/* =========================================================
   5. REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll<HTMLElement>(
        ".section-header, .skill-card, .project-card, .stat, .education-item, .contact-card"
    );


const revealObserver =
    new IntersectionObserver(
        (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ): void => {

            entries.forEach(
                (
                    entry: IntersectionObserverEntry
                ): void => {

                    if (entry.isIntersecting) {

                        const element =
                            entry.target as HTMLElement;

                        element.style.opacity = "1";

                        element.style.transform =
                            "translateY(0)";

                        observer.unobserve(element);

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element: HTMLElement): void => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(element);

    }
);


/* =========================================================
   6. PROJECT LINK PROTECTION
========================================================= */

const projectLinks =
    document.querySelectorAll<HTMLAnchorElement>(
        ".project-link"
    );


projectLinks.forEach(
    (link: HTMLAnchorElement): void => {

        link.addEventListener(
            "click",
            (event: MouseEvent): void => {

                const url =
                    link.getAttribute("href");


                /*
                    The project links currently contain "#".

                    This prevents accidentally opening a blank
                    page until you add the real GitHub Pages URL.
                */

                if (!url || url === "#") {

                    event.preventDefault();

                    alert(
                        "Add the GitHub Pages URL for this project first."
                    );

                }

            }
        );

    }
);


/* =========================================================
   7. EMAIL BUTTON
========================================================= */

const emailLinks =
    document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="mailto:"]'
    );


emailLinks.forEach(
    (link: HTMLAnchorElement): void => {

        link.addEventListener(
            "click",
            (): void => {

                console.log(
                    "Opening email client..."
                );

            }
        );

    }
);


/* =========================================================
   8. GITHUB LINK
========================================================= */

const githubLinks =
    document.querySelectorAll<HTMLAnchorElement>(
        'a[href*="github.com"]'
    );


githubLinks.forEach(
    (link: HTMLAnchorElement): void => {

        link.addEventListener(
            "click",
            (): void => {

                console.log(
                    "Opening GitHub profile..."
                );

            }
        );

    }
);


/* =========================================================
   9. PAGE LOADED
========================================================= */

window.addEventListener(
    "load",
    (): void => {

        document.body.classList.add(
            "page-loaded"
        );

        updateActiveNavigation();

        updateHeader();

    }
);