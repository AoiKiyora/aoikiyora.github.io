
/* =========================
   TYPING EFFECT
========================= */

const typingText = document.getElementById("typing-text");

const texts = [
    "Developer",
    "Web Developer",
    "Anime Enjoyer",
    "Code & Create",
    "Just a curious human."
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();


/* =========================
   FOOTER YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll(".section");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.1
        }
    );

sections.forEach(section => {
    observer.observe(section);
});
