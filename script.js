/* =================================
   TYPING EFFECT
================================= */

const typing = document.getElementById("typing");

const words = [
    "Developer",
    "Web Developer",
    "Anime Enjoyer",
    "Digital Creator",
    "Just a curious human."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function type() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(type, 1800);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        type,
        deleting ? 45 : 85
    );
}

type();


/* =================================
   YEAR
================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =================================
   SCROLL REVEAL
================================= */

const elements =
    document.querySelectorAll(
        ".section, .project, .skill-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
