/* ========================================
   1. CONFIGURATION
   ======================================== */

const CONFIG = {
    githubUsername: 'AOIKIYORA',
    githubUrl: 'https://github.com/AOIKIYORA',
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
};

/* ========================================
   2. PROJECT DATA
   ======================================== */

const projects = [
    {
        name: 'Example Project',
        description: 'This is a sample project. Replace with your actual projects.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#',
        icon: '💻'
    },
    {
        name: 'Another Project',
        description: 'Another example project. Update the data in script.js to add your real projects.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#',
        icon: '🚀'
    },
    {
        name: 'Web App',
        description: 'Sample web application. Edit this section in script.js with your own projects.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#',
        icon: '⚡'
    }
];

/* ========================================
   3. ANIME DATA
   ======================================== */

const animeCharacters = [
    {
        name: 'Rintaro Tsumugi',
        anime: 'Anime information',
        image: 'assets/Rintaro Tsumugi.jpg',
        description: 'Character information placeholder. You can update this in script.js.'
    },
    {
        name: 'Waguri Kaoruko',
        anime: 'Anime information',
        image: 'assets/Waguri Kaoruko.jpg',
        description: 'Character information placeholder. You can update this in script.js.'
    }
];

/* ========================================
   4. QUOTE DATA
   ======================================== */

const quotes = [
    { text: 'People die when they are killed.', author: '— Anime' },
    { text: 'Believe in yourself. Not in the you who believes in me.', author: '— Anime' },
    { text: 'The world isn\'t perfect. But it\'s there for us trying the best it can.', author: '— Anime' },
    { text: 'Hard work is worthless for those that don\'t believe in themselves.', author: '— Anime' },
    { text: 'No matter how hard or impossible it is, never lose sight of your goal.', author: '— Anime' },
    { text: 'If you don\'t take risks, you can\'t create a future.', author: '— Anime' },
];

/* ========================================
   5. SKILLS DATA
   ======================================== */

const skills = {
    'FRONTEND': [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
    ],
    'DATABASE': [
        { name: 'SQL Server', icon: '🗄️' },
    ],
    'TOOLS': [
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '💻' },
    ]
};

/* ========================================
   6. RENDER FUNCTIONS
   ======================================== */

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    let html = '';
    for (const [group, items] of Object.entries(skills)) {
        html += `<div class="skill-group reveal">
            <h3>${group}</h3>
            <div class="skill-cards">`;
        items.forEach(skill => {
            html += `
                <div class="skill-card">
                    <span class="skill-icon">${skill.icon}</span>
                    <span class="skill-name">${skill.name}</span>
                </div>`;
        });
        html += `</div></div>`;
    }
    grid.innerHTML = html;
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    let html = '';
    projects.forEach(project => {
        const techs = project.technologies.map(t => `<span>${t}</span>`).join('');
        html += `
            <div class="project-card reveal">
                <div class="project-header">
                    <span class="project-icon">${project.icon}</span>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="GitHub">⌘</a>
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Demo">↗</a>
                    </div>
                </div>
                <h3 class="project-name">${project.name}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">${techs}</div>
            </div>`;
    });
    grid.innerHTML = html;
}

function renderAnime() {
    const grid = document.getElementById('anime-grid');
    if (!grid) return;

    let html = '';
    animeCharacters.forEach(char => {
        html += `
            <div class="anime-card reveal">
                <div class="anime-image-wrap">
                    <img src="${char.image}" alt="${char.name}" loading="lazy">
                    <div class="anime-overlay"></div>
                </div>
                <div class="anime-info">
                    <h3 class="anime-character">${char.name}</h3>
                    <p class="anime-title">${char.anime}</p>
                    <p class="anime-desc">${char.description}</p>
                </div>
            </div>`;
    });
    grid.innerHTML = html;
}

/* ========================================
   7. NAVIGATION
   ======================================== */

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

/* ========================================
   8. MOBILE MENU
   ======================================== */

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.textContent = '☰';
        });
    });
}

/* ========================================
   9. TYPING EFFECT
   ======================================== */

function initTypingEffect() {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const phrases = ['IT Developer', 'Anime Fan', 'Creative Coder'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = phrases[phraseIndex];
        if (isDeleting) {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? CONFIG.deletingSpeed : CONFIG.typingSpeed;

        if (!isDeleting && charIndex === current.length) {
            speed = CONFIG.pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
}

/* ========================================
   10. SCROLL REVEAL
   ======================================== */

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
}

/* ========================================
   11. THEME
   ======================================== */

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;

    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        body.classList.add('light-mode');
        if (toggle) toggle.textContent = '☀';
    }

    if (!toggle) return;

    toggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        toggle.textContent = isLight ? '☀' : '☾';
    });
}

/* ========================================
   12. TERMINAL EASTER EGG
   ======================================== */

function initTerminal() {
    const overlay = document.getElementById('terminal-overlay');
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');

    if (!overlay || !output || !input) return;

    const commands = {
        help: () => {
            return `Available commands:\n  about      - About me\n  skills     - My skills\n  projects   - My projects\n  anime      - Anime collection\n  github     - GitHub profile\n  contact    - Contact info\n  clear      - Clear terminal`;
        },
        about: () => 'I am Aoi Kiyora — IT Developer and Anime Fan.',
        skills: () => 'HTML5, CSS3, JavaScript, SQL Server, Git, GitHub, VS Code.',
        projects: () => 'Check the Projects section on this website!',
        anime: () => 'Anime lover. Check the Anime section for my collection.',
        github: () => `Visit: ${CONFIG.githubUrl}`,
        contact: () => 'GitHub, Email, Discord — see Contact section.',
        clear: () => '__CLEAR__'
    };

    function addLine(text) {
        const p = document.createElement('p');
        p.className = 'terminal-line';
        p.textContent = text;
        output.appendChild(p);
        output.scrollTop = output.scrollHeight;
    }

    function processCommand(cmd) {
        const trimmed = cmd.trim().toLowerCase();
        addLine(`<span class="terminal-prompt">AOI@TERMINAL:~$</span> ${cmd}`);

        if (trimmed === '') return;

        if (commands[trimmed]) {
            const result = commands[trimmed]();
            if (result === '__CLEAR__') {
                output.innerHTML = '';
                return;
            }
            addLine(result);
        } else {
            addLine(`Command not found: ${trimmed}. Type 'help' for available commands.`);
        }
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            processCommand(input.value);
            input.value = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            overlay.classList.toggle('open');
            if (overlay.classList.contains('open')) {
                setTimeout(() => input.focus(), 100);
            }
        }
        if (e.key === 'Escape') {
            overlay.classList.remove('open');
        }
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('open');
        }
    });
}

/* ========================================
   13. BACK TO TOP
   ======================================== */

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ========================================
   14. INIT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderAnime();
    initNavigation();
    initMobileMenu();
    initTypingEffect();
    initScrollReveal();
    initTheme();
    initTerminal();
    initBackToTop();
});
