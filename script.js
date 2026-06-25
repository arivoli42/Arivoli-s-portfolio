// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

        document.getElementById("main-content").style.display = "block";

        const whatsappBtn =
        document.getElementById("whatsappBtn");

        if (whatsappBtn) {
            whatsappBtn.style.display = "flex";
        }

    }, 3000);

});


// =========================
// TYPING ANIMATION
// =========================

new Typed("#typing", {

    strings: [
        "Full Stack Developer",
        "Java Developer",
        "AI & Data Science Student",
        "Problem Solver",
        "Quick Learner",
        "positive-minded"
    ],

    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1200,
    loop: true

});


// =========================
// PARTICLES BACKGROUND
// =========================

tsParticles.load("particles-js", {

    particles: {

        number: {
            value: 70
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        },

        opacity: {
            value: 0.5
        },

        links: {
            enable: true,
            distance: 150,
            opacity: 0.3
        }

    }

});


// =========================
// ACHIEVEMENT COUNTERS
// =========================

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    counters.forEach(counter => {

        const target =
        parseInt(counter.dataset.target);

        let count = 0;

        const increment =
        target / 100;

        function updateCounter() {

            if (count < target) {

                count += increment;

                counter.innerText =
                Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText =
                target + "+";

            }

        }

        updateCounter();

    });

}


// =========================
// COUNTER OBSERVER
// =========================

const achievementSection =
document.querySelector("#achievements");

if (achievementSection) {

    const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting &&
                !counterStarted
            ) {

                startCounters();

                counterStarted = true;

            }

        });

    });

    counterObserver.observe(
        achievementSection
    );

}


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
document.querySelectorAll(
`
.skill-card,
.project-card,
.timeline-card,
.cert-card,
.counter-card,
.glass-card
`
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const revealTop =
        el.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            revealTop <
            window.innerHeight -
            revealPoint
        ) {

            el.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// =========================
// ACTIVE NAVBAR LINKS
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// SCROLL PROGRESS BAR
// =========================

window.addEventListener("scroll", () => {

    const winScroll =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrolled =
    (winScroll / height) * 100;

    const progressBar =
    document.getElementById(
        "progress-bar"
    );

    if (progressBar) {

        progressBar.style.width =
        scrolled + "%";

    }

});


// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {

        if (topBtn) {
            topBtn.style.display = "block";
        }

    } else {

        if (topBtn) {
            topBtn.style.display = "none";
        }

    }

});

if (topBtn) {

    topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// =========================
// NAVBAR SHADOW
// =========================

const navbar =
document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow =
        "none";

    }

});


// =========================
// SKILL CARD TILT EFFECT
// =========================

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener(
    "mousemove",
    (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateX =
        ((y / rect.height) - 0.5)
        * -10;

        const rotateY =
        ((x / rect.width) - 0.5)
        * 10;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener(
    "mouseleave",
    () => {

        card.style.transform =
        "translateY(0px)";

    });

});


// =========================
// SMOOTH SECTION SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"%cWelcome to Arivoli's Portfolio 🚀",
"color:#60a5fa;font-size:18px;font-weight:bold;"
);